import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link"
const Index = () => (

    <Layout>
        <header className=" h-100">
            <div id="slider" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/slide5.jpg" alt="portada1" className="d-block w-100 " />
                        <div className="container">
                            <div className="row justify-content-between ">
                                <div className="col-md-6">
                                    <div className="carousel-caption d-none d-md-block text-end ">
                                        <h3>Tu casa a tu gusto</h3>
                                        <p>Necesito mas Informacion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/slide6.jpg" alt="portada2" className="d-block w-100 " />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="display-4">Encuentra diseños de lujo</h2>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </header>
        <section className="container sobre-nosotros mt-5">
            <h2 className="text-center mb-5">Más sobre Nosotros</h2>
            <div className="row">
                <div className="col-sm-4 text-center">
                    <img src="/icono_seguridad.jpg" alt="icono_Seguridad" className="img-fliud mb-4" />
                    <h3 className="mb-3 text-uppercase">Seguridad</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique iure sit ad, deleniti eaque quod.</p>
                </div>
                <div className="col-sm-4 text-center">
                    <img src="/icono_precio.jpg" alt="icono_Seguridad" className="img-fliud mb-4" />
                    <h3 className="mb-3 text-uppercase">El Mejor Precio</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique iure sit ad, deleniti eaque quod.</p>
                </div>
                <div className="col-sm-4 text-center">
                    <img src="/icono_disponible.jpg" alt="icono_Seguridad" className="img-fliud mb-4" />
                    <h3 className="mb-3 text-uppercase">Disponibilidad Inmediata</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique iure sit ad, deleniti eaque quod.</p>
                </div>
            </div>
        </section>
        <section className="container anuncios mt-5 ">
            <h2 className="text-center mb-5">Nuestros Trabajos</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="/anuncio1.jpg" alt="auncion de trabajo" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-tittle">
                                Casa en Zona de Lujo
                            </h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="/anuncio2.jpg" alt="auncion de trabajo" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-tittle">
                                Casa en Zona de Lujo
                            </h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="/anuncio3.jpg" alt="auncion de trabajo" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-tittle">
                                Casa en Zona de Lujo
                            </h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="/anuncio4.jpg" alt="auncion de trabajo" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-tittle">
                                Casa en Zona de Lujo
                            </h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="/anuncio5.jpg" alt="auncion de trabajo" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-tittle">
                                Casa en Zona de Lujo
                            </h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="/anuncio6.jpg" alt="auncion de trabajo" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-tittle">
                                Casa en Zona de Lujo
                            </h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="encuentra mt-5">
            <div className="container">
                <div className="row text-light align-items-center">
                    <div className="col">
                        <h3>Encuentra la casa de tu sueños</h3>
                        <p>Llena el Formulario de contacto y un asesor se pondrá en contacto a la brevedad.</p>
                        <a href="#" className="btn btn-warning text-uppercase py-2 mt-4" > Contáctanos</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="container mt-5">
            <div className="row ">
                <div className="col-md-8 text-center">
                    <h2 className="text-center  mb-5">
                        Nuestro Blog
                    </h2>
                    <div className="row entrada mb-4">
                        <div className="col-md-5">
                            <img src="/blog1.jpg" alt="entrada de blog" className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                            <h3>Terraza en el techo de tu casa.</h3>
                            <p className="meta">
                                Escrito el: <spam>20/10/2018</spam> por: <spam>Admin</spam>
                            </p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, blanditiis? Porro reprehenderit eos officiis mollitia, voluptates cupiditate beatae, excepturi doloremque temporibus illum id sed voluptatem ducimus nulla in quia ab!</p>
                            <a href="/" className="btn btn-success">Leer Más</a>
                        </div>
                    </div>
                    <div className="row entrada mb-4">
                        <div className="col-md-5">
                            <img src="/blog2.jpg" alt="entrada de blog" className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                            <h3>Guia para decorar tu casa.</h3>
                            <p className="meta">
                                Escrito el: <spam>20/10/2018</spam> por: <spam>Admin</spam>
                            </p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, blanditiis? Porro reprehenderit eos officiis mollitia, voluptates cupiditate beatae, excepturi doloremque temporibus illum id sed voluptatem ducimus nulla in quia ab!</p>
                            <a href="/" className="btn btn-success">Leer Más</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2 className="text-center mb-5">
                        Testimoniales
                    </h2>
                </div>
            </div>
        </section>
    </Layout>

)

export default Index