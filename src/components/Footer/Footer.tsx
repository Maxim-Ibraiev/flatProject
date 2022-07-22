import { Box, List, ListItemText, Container, Divider, ListItem, Typography } from '@mui/material'
import CustomLink from '../CustomLink'
import routes from '../../routes'

export default function Footer() {
  return (
    <Box sx={{ mt: 2, bgcolor: 'info.dark' }} component="footer">
      <Container maxWidth="sm">
        <List
          sx={{
            display: 'flex',
            width: 1,
            '& .MuiListItemText-root': { textAlign: 'center' },
          }}
        >
          <ListItem>
            <CustomLink href={routes.about} width={1} color="primary.contrastText">
              <ListItemText primary="About us" />
            </CustomLink>
          </ListItem>
          <Divider orientation="vertical" flexItem sx={{ bgcolor: 'primary.contrastText' }} />
          <ListItem>
            <CustomLink href={routes.portfolio} width={1} color="primary.contrastText">
              <ListItemText primary="Portfolio" />
            </CustomLink>
          </ListItem>
          <Divider orientation="vertical" flexItem sx={{ bgcolor: 'primary.contrastText' }} />
          <ListItem>
            <CustomLink href={routes.prices} width={1} color="primary.contrastText">
              <ListItemText primary="Prices" />
            </CustomLink>
          </ListItem>
        </List>
        <CustomLink
          href={routes.resume}
          color="primary.contrastText"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Typography variant="body1">Made by Max</Typography>
        </CustomLink>
      </Container>
    </Box>
  )
}
