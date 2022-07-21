import { IFlatData } from '../interfaces'
import FlatStructure from './FlatStructure'

const getFlatStructure = (flatData: IFlatData[]) => flatData.map(el => new FlatStructure(el))

export default getFlatStructure
