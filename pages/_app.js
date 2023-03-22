import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '../global.css'
import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import 'bootstrap-icons/font/bootstrap-icons.css'

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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