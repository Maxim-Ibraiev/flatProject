import type TourStructure from '../helper/TourStructure'

export type ITour = TourStructure

export interface ITourData {
  image: string
  id: number
  name: string
  duration: number
  rating: number
  numberOfReviews: number
  price: number
}

export type IDirectionsData = {
  id: number
  name: string
  tours: ITourData[]
}[]
