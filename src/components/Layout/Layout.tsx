import React from 'react'
import Box from '@mui/material/Box'
import Header from '../Header'
import Footer from '../Footer'

type IProps = React.PropsWithChildren<{}>

export default function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  )
}
