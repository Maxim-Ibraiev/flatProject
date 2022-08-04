import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import CustomLink from '../src/components/CustomLink'
import Layout from '../src/components/Layout'

export default function about() {
  return (
    <Layout>
      <Container sx={{ my: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography component="h1" variant="h4">
          Tour
        </Typography>
        <Typography component="p" variant="body1">
          <span>This project is designed for practice with </span>
          <CustomLink href="https://mui.com/material-ui/getting-started/overview/">MUI.</CustomLink>
        </Typography>
      </Container>
    </Layout>
  )
}
