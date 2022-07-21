import { IFlatData } from '../interfaces'
import FlatStructure from './FlatStructure'

const getFlats = (flatsData: IFlatData[]) => flatsData.map(data => new FlatStructure(data))

export default getFlats
