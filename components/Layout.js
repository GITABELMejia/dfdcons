import Navbar from './Navbar'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Nprogress from 'nprogress';
import Link from "next/link"

const Layout = ({ children, footer = true }) => {

    const router = useRouter()

    useEffect(() => {

        const handleRouteChange = url => {
            console.log(url)
            Nprogress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => Nprogress.done())

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (
        <div className='header'>
            <Navbar />
            <main className=''>
                {children}
            </main>
            {
                footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <div className="row text-start">
                                <div className="col-lg-4 col-md-6">
                                    <div className="footer-info">
                                        <Link className="nombre-sitio navbar-brand text-uppercase fs-5" href="/">
                                            DFD<span>Construction</span><span className="punto">.</span>
                                        </Link>
                                        <p>
                                            198 West 21th Street
                                            <br />
                                            Suite 721 New York NY 10016
                                            <br />
                                            <br />
                                            <strong>
                                                Phone:
                                            </strong>
                                            <a href="tel:+51950557643"> +51 950557643</a>
                                            <br />
                                            <strong>
                                                Email:
                                            </strong>
                                            <a href="mailto:abel.mejia.pinto@gmail.com">abel.mejia@gmail.com</a>
                                        </p>
                                        <div className="solcial-links">
                                            <p>
                                                <a href=""><i className="social_icon bi bi-facebook mx-1"></i></a>
                                                <a href=""><i className="social_icon bi bi-instagram mx-1" ></i></a>
                                                <a href=""><i className="social_icon bi bi-twitter mx-1"></i></a>
                                                <a href=""><i className="social_icon bi bi-linkedin mx-1"></i></a>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-3">
                                    <h4>Links </h4>
                                    Agregar los Links
                                    
                                </div>
                                <div className="col-lg-4 col-md-3">
                                    <h4>Nuestros Servicios</h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                                
                            </div>
                            {/* <h1>&copy; Abel Mejia Pinto Porta Folio </h1>
                            <p>2000 - {new Date().getFullYear()}</p>
                            <p>All rights Reserverd</p> */}
                        </div>
                    </footer>
                )
            }

        </div>
    )

}

export default Layout;