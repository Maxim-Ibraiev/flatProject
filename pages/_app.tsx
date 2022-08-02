/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

const theme = createTheme()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
