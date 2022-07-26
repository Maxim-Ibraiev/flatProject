import type { ITourData } from '../interfaces'

export default class TourStructure {
  #tour: ITourData

  constructor(tour: ITourData) {
    this.#tour = tour
  }

  get mainImageSrc() {
    return 'test.png' || this.#tour.images[0]
  }

  get title() {
    return this.#tour.title
  }

  get description() {
    return this.#tour.description
  }

  get rating() {
    return this.#tour.rating
  }

  get images() {
    return this.#tour.images
  }

  get area() {
    return this.#tour.area
  }

  get id() {
    return this.#tour.id
  }
}
