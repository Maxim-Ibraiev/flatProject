import { ITourData } from '../interfaces'
import TourStructure from './TourStructure'

const getTourStructure = (tourData: ITourData[]) => tourData.map(el => new TourStructure(el))

export default getTourStructure
