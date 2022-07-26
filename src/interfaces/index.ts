import type TourStructure from '../helper/TourStructure'

export interface ITourData {
  title: string
  description: string
  rating: number
  images: { src?: string }[]
  area: string
  id: string | number
}

export type ITour = TourStructure

export type ITours = TourStructure[]
