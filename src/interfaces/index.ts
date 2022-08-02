import type TourStructure from '../helper/TourStructure'

export type ITour = TourStructure
// export type ITours = TourStructure[]

export interface ITourData {
  // images: { src?: string }[]
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
