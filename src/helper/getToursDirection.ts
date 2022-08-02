import TourStructure from './TourStructure'
import type { ITourData } from '../interfaces'

const getToursDirection = (tourData: ITourData[]) => tourData.map(data => new TourStructure(data))

export default getToursDirection
