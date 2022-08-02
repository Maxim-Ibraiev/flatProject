import { useState } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Error from 'next/error'
import moment, { Moment } from 'moment'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Modal from '@mui/material/Modal'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Accordion from '@mui/material/Accordion'
import TextField from '@mui/material/TextField'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Layout from '../src/components/Layout'
import ImageCollage from '../src/components/ImageCollage'
import { getTours } from '../src/helper'
import DIRECTIONS_DATA from '../src/helper/DIRECTIONS_DATA.json'
import routes from '../src/routes'
import type { IDirectionsData } from '../src/interfaces'

interface IProps {
  directionsData: IDirectionsData
  directionsId: string
}

export default function Tour({ directionsData, directionsId }: IProps) {
  const tours = getTours(directionsData)
  const tour = tours.find(({ id }) => id.toString() === directionsId)
  const [date, setDate] = useState<Moment>(moment())
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isSelectedSuccess, setIsSelectedSuccess] = useState(false)

  if (!tour) {
    return <Error statusCode={404} />
  }

  const handleChange = (value: Date | null): void => setDate(moment(value))

  return (
    <Layout>
      <Container>
        <Typography variant="h3" component="h1" my={{ xs: 1, sm: 3 }}>
          {tour.title}
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
                src={tour.mainImageSrc}
                alt={tour.title}
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
          {tour.description}
        </Typography>

        <Typography variant="h6" component="h3" my={2}>
          Frequently Asked Questions
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Question 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Question 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Question 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

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
                shouldDisableDate={dateToCheck => Boolean(new Date() >= new Date(dateToCheck))}
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
  const directionsId = Array.isArray(params.tour) ? params.tour[0] : params.tour

  return {
    props: { directionsData: DIRECTIONS_DATA, directionsId },
  }
}

export const getStaticPaths = async () => {
  const tours = getTours(DIRECTIONS_DATA)

  return {
    paths: tours.map(tour => routes.getTour(tour.id)),
    fallback: false,
  }
}
