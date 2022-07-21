import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import { IFlats } from '../../interfaces'
import Card from '../Card'

type IProps = {
  title: string
  flats: IFlats
}

export default function CategoryList({ title, flats }: IProps) {
  return (
    <Box>
      <Typography variant="h4" component="h2" mt={2} mb={2}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {flats.map(
          (flat, ind) =>
            ind < 4 && (
              <Grid xs={6} sm={3} item key={flat.id}>
                <Card flat={flat} />
              </Grid>
            ),
        )}
      </Grid>
    </Box>
  )
}
