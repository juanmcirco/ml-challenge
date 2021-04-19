import React from 'react'
import Layout from '../components/Layout'
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';

const App = ({ Component, pageProps }) => {
  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CookiesProvider >
  )

}

export default App