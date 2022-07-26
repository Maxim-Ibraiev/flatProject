import Link from 'next/link'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { ITour } from '../../interfaces'
import routes from '../../routes'

interface IProps {
  tour: ITour
}

export default function MediaCard({ tour }: IProps) {
  return (
    <Link href={routes.getTour(tour.id)}>
      <Box component="a">
        <Card sx={{ maxWidth: 345 }}>
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
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
                height: 'calc(3em + 6px * 3)' /* fallback */,
                overflow: 'hidden',
              }}
            >
              {tour.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Link>
  )
}
