import Layout from "../components/Layout";
import 'animate.css'
import { skills, experiences, projects } from "../profile";
import Link from "next/link"
const About = () => (

    <Layout>
        <header className="about">
        </header>
        <section>
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col mb-5">
                        <h2>LA EMPRESA</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sint error nisi pariatur dignissimos? Odio eum quae illo enim dicta nobis necessitatibus obcaecati repudiandae perferendis. Doloribus accusamus doloremque quis aliquid nam sequi molestias autem rem fugit totam sint non sit esse sed nulla ipsum earum natus, nemo repudiandae, modi quae.</p>
                    </div>

                </div>
                <div className="row text-center">
                    <h2 className="mb-4">SOCIOS FUNDADORES</h2>
                    <div className="col-md-6 mb-5 animate__animated animate__backInLeft">
                        <img src="/socio_fundador2.jpg" alt="" className="rounded-circle img-fluid" />
                        <h4>Primer Fundador</h4>
                    </div>
                    <div className="col-md-6 mb-5 animate__animated animate__backInRight">
                        <img src="/socio_fundador1.jpg" alt="" className="rounded-circle img-fluid" />
                        <h4>Segundo fundador</h4>
                    </div>

                </div>
                <div className="row text-center">
                    <h3>EL EQUIPO</h3>
                    <div className="col-md-4">
                        <img src="/equipo1.jpg" alt="" className="rounded img-fluid"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi adipisci pariatur dolorum architecto culpa inventore accusamus atque libero amet enim!</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/equipo2.jpg" alt="" className="rounded img-fluid"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi adipisci pariatur dolorum architecto culpa inventore accusamus atque libero amet enim!</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/equipo3.jpg" alt="" className="rounded img-fluid"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi adipisci pariatur dolorum architecto culpa inventore accusamus atque libero amet enim!</p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>

)

export default About