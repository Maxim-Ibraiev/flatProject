import type FlatStructure from '../helper/FlatStructure'

export interface IFlatData {
  title: string
  description: string
  rating: number
  images: { src?: string }[]
  area: string
  id: string | number
}

export type IFlat = FlatStructure

export type IFlats = FlatStructure[]
