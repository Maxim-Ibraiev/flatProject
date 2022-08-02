import type { ITourData } from '../interfaces'

export default class TourStructure {
  #tour: ITourData

  constructor(tour: ITourData) {
    this.#tour = tour
  }

  get mainImageSrc() {
    return this.#tour.image
  }

  get title() {
    return this.#tour.name
  }

  get description() {
    return this.#tour.name
  }

  get rating() {
    return this.#tour.rating
  }

  get images() {
    return this.#tour.image
  }

  get id() {
    return this.#tour.id
  }
}
