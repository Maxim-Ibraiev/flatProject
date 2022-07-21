import type { IFlatData } from '../interfaces'

export default class FlatStructure {
  #flat: IFlatData

  constructor(flat: IFlatData) {
    this.#flat = flat
  }

  get mainImageSrc() {
    return 'test.png' || this.#flat.images[0]
  }

  get title() {
    return this.#flat.title
  }

  get description() {
    return this.#flat.description
  }

  get rating() {
    return this.#flat.rating
  }

  get images() {
    return this.#flat.images
  }

  get area() {
    return this.#flat.area
  }

  get id() {
    return this.#flat.id
  }
}
