import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '../global.css'
import Head from 'next/head'

import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap')
    }, []);


    return (
        <>
            <Head>
                <title>Acabados </title>
            </Head>
            <Component {...pageProps} />
        </>

    )

}