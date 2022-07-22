import React, { useState } from 'react'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import Error from 'next/error'
import moment, { Moment } from 'moment'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import { Modal } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import TextField from '@mui/material/TextField'
import Layout from '../src/components/Layout'
import ImageCollage from '../src/components/ImageCollage'
import { FlatStructure, getFlats } from '../src/helper'
import MOCK_DATA from '../src/helper/MOCK_DATA.json'
import routes from '../src/routes'
import type { IFlatData } from '../src/interfaces'

interface IProps {
  flatsData: IFlatData[]
  flatId: string
}

export default function Flat({ flatsData, flatId }: IProps) {
  const flats = getFlats(flatsData)
  const flat = flats.find(({ id }) => id.toString() === flatId)
  const [date, setDate] = useState<Moment>(moment())
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isSelectedSuccess, setIsSelectedSuccess] = useState(false)

  if (!flat) {
    return <Error statusCode={404} />
  }

  const handleChange = (value: Date | null): void => setDate(moment(value))

  return (
    <Layout>
      <Container>
        <Typography variant="h3" component="h1" my={5}>
          {flat.title}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={8}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: '200px', sm: '450px' },
              }}
            >
              <Image
                src={`/${flat.mainImageSrc}`}
                alt={flat.title}
                priority
                objectFit="cover"
                layout="fill"
              />
            </Box>
          </Grid>
          <Grid item xs={4} hidden={isMobile}>
            <ImageCollage />
          </Grid>
        </Grid>
        <Typography variant="h4" component="h2" my={3}>
          Subtitle
        </Typography>
        <Typography variant="body1" component="p">
          {flat.description}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <Button
            onClick={() => {
              setModalIsOpen(true)
              setIsSelectedSuccess(false)
            }}
            sx={{
              bgcolor: isSelectedSuccess ? theme.palette.success.light : theme.palette.action.focus,
              px: 2,
            }}
          >
            {isSelectedSuccess ? 'Booked! 👌' : 'Book now'}
          </Button>
        </Box>

        <Modal
          open={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box width={500}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                orientation="portrait"
                openTo="day"
                value={date}
                onChange={handleChange}
                // eslint-disable-next-line react/jsx-props-no-spreading
                renderInput={params => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Box
              sx={{ bgcolor: theme.palette.grey[200], display: 'flex', justifyContent: 'right' }}
            >
              <Button
                onClick={() => {
                  setModalIsOpen(false)
                  setDate(moment())
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setModalIsOpen(false)
                  setIsSelectedSuccess(true)
                  console.log(date.toObject())
                }}
              >
                OK
              </Button>
            </Box>
          </Box>
        </Modal>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const flatId = Array.isArray(params.flat) ? params.flat[0] : params.flat

  return {
    props: { flatsData: MOCK_DATA, flatId },
  }
}

export const getStaticPaths = async () => {
  const flats = MOCK_DATA.map((el: IFlatData) => new FlatStructure(el))

  return {
    paths: flats.map(flat => routes.getFlat(flat.id)),
    fallback: false,
  }
}
