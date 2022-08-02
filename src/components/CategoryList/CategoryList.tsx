import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '../Card'
import type { ITour } from '../../interfaces'

type IProps = {
  title: string
  tours: ITour[]
}

export default function CategoryList({ title, tours }: IProps) {
  return (
    <Box>
      <Typography variant="h4" component="h2" mt={2} mb={2}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {tours.map(
          (tour, ind) =>
            ind < 4 && (
              <Grid xs={6} sm={3} item key={tour.id}>
                <Card tour={tour} />
              </Grid>
            ),
        )}
      </Grid>
    </Box>
  )
}
