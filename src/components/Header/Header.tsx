import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Lick from '../CustomLink'
import routes from '../../routes'

const Search = styled('form')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function SearchAppBar() {
  const [search, setSearch] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const logoEl = useRef(null)
  const router = useRouter()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    console.log({ search })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setIsMenuOpen(true)}
            ref={logoEl}
          >
            <MenuIcon />
          </IconButton>
          <Lick
            href={routes.home}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'white' }}
          >
            <Typography variant="h6" noWrap component="div">
              Tours
            </Typography>
          </Lick>
          <Search onSubmit={handleSubmit}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={({ target }: { target: { value: string } }) => setSearch(target.value)}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Menu open={isMenuOpen} anchorEl={logoEl.current} onClick={() => setIsMenuOpen(false)}>
            <MenuItem onClick={() => router.push(routes.home)}>Home</MenuItem>
            <MenuItem onClick={() => router.push(routes.about)}>About</MenuItem>
            <MenuItem onClick={() => router.push(routes.portfolio)}>Portfolio</MenuItem>
            <MenuItem onClick={() => router.push(routes.prices)}>Prices</MenuItem>
            <MenuItem onClick={() => router.push(routes.resume)}>Made by Max</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
