import React from 'react'
import Layout from '../components/Layout'
import { CookiesProvider } from "react-cookie";

const App = ({ Component, pageProps }) => {

    return (
        <CookiesProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CookiesProvider>
    )

}

export default App