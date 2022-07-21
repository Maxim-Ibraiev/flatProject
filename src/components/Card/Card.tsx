import Link from 'next/link'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { IFlat } from '../../interfaces'
import routes from '../../routes'

interface IProps {
  flat: IFlat
}

export default function MediaCard({ flat }: IProps) {
  return (
    <Link href={routes.getFlat(flat.id)}>
      <Box component="a">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="100"
            image={flat.mainImageSrc}
            alt={`Apartment photo of ${flat.title}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {flat.title}
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
              {flat.description}
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
