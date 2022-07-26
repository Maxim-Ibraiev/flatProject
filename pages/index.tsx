import Container from '@mui/material/Container'
import CategoryList from '../src/components/CategoryList'
import Layout from '../src/components/Layout'
import { getTourStructure } from '../src/helper'
import MOCK_DATA from '../src/helper/MOCK_DATA.json'
import { ITourData } from '../src/interfaces'

interface IProps {
  tourData: ITourData[]
}

export default function Home({ tourData }: IProps) {
  const tours = getTourStructure(tourData)

  return (
    <Layout>
      <Container>
        <CategoryList title="Top" tours={tours} />
        <CategoryList title="The most review" tours={tours} />
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = MOCK_DATA

  return {
    props: {
      tourData: data,
    },
  }
}
