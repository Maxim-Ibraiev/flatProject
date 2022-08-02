import Link from 'next/link'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import routes from '../../routes'
import type { ITour } from '../../interfaces'

interface IProps {
  tour: ITour
}

export default function MediaCard({ tour }: IProps) {
  return (
    <Box height={1}>
      <Card sx={{ maxWidth: 345, height: 1, display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          height="100"
          image={tour.mainImageSrc}
          alt={`Apartment photo of ${tour.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {tour.title}
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: 'auto' }}>
          <Link href={routes.getTour(tour.id)}>
            <Button LinkComponent="a" size="small">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  )
}
