import DirectionsStructure from './DirectionsStructure'
import type { IDirectionsData } from '../interfaces'

const getDirectionsStructure = (directionsData: IDirectionsData) =>
  directionsData.map(el => new DirectionsStructure(el))

export default getDirectionsStructure
