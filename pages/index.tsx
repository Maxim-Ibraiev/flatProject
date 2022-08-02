import Container from '@mui/material/Container'
import CategoryList from '../src/components/CategoryList'
import Layout from '../src/components/Layout'
import { getDirectionsStructure } from '../src/helper'
import DIRECTIONS_DATA from '../src/helper/DIRECTIONS_DATA.json'
import type { IDirectionsData } from '../src/interfaces'

interface IProps {
  directionsData: IDirectionsData
}

export default function Home({ directionsData }: IProps) {
  const directions = getDirectionsStructure(directionsData)

  return (
    <Layout>
      <Container>
        {directions.map(({ tours, name }) => (
          <CategoryList key={name} title={name} tours={tours} />
        ))}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = DIRECTIONS_DATA

  return {
    props: {
      directionsData: data,
    },
  }
}
