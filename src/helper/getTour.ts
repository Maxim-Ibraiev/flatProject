import { ITourData } from '../interfaces'
import TourStructure from './TourStructure'

const getTour = (tourData: ITourData[]) => tourData.map(data => new TourStructure(data))

export default getTour
