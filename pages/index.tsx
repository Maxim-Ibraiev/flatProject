import Container from '@mui/material/Container'
import CategoryList from '../src/components/CategoryList'
import Layout from '../src/components/Layout'
import { getFlatStructure } from '../src/helper'
import MOCK_DATA from '../src/helper/MOCK_DATA.json'
import { IFlatData } from '../src/interfaces'

interface IProps {
  flatsData: IFlatData[]
}

export default function Home({ flatsData }: IProps) {
  const flats = getFlatStructure(flatsData)

  return (
    <Layout>
      <Container>
        <CategoryList title="Top" flats={flats} />
        <CategoryList title="The most review" flats={flats} />
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = MOCK_DATA

  return {
    props: {
      flatsData: data,
    },
  }
}
