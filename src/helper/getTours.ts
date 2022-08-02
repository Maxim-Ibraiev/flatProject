import getDirectionsStructure from './getDirectionsStructure'
import type { IDirectionsData } from '../interfaces'

const getTours = (directionsData: IDirectionsData) =>
  getDirectionsStructure(directionsData)
    .map(({ tours }) => tours)
    .flat()

export default getTours
