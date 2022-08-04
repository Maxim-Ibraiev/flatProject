import React from 'react'
import Box from '@mui/material/Box'
import Header from '../Header'
import Footer from '../Footer'

type IProps = React.PropsWithChildren<{}>

export default function Layout({ children }: IProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
