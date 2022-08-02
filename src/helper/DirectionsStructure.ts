import getTourStructure from './getTourStructure'
import type { IDirectionsData } from '../interfaces'

export default class DirectionsStructure {
  #directions: IDirectionsData[0]

  constructor(directions: IDirectionsData[0]) {
    this.#directions = directions
  }

  get id() {
    return this.#directions.id
  }

  get name() {
    return this.#directions.name
  }

  get tours() {
    return getTourStructure(this.#directions.tours)
  }
}
