import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faAmbulance,
    faAnchor,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => (

    <Layout>
        <header className=" about">
        </header>
        <section>
            <div className="container pt-4">
                <div className="row text-center ">
                    <div className="col-md-6">
                        <h4>DFDCONSTRUCCION</h4>
                        <address>
                            "Direccion de la oficina de la Empresa"
                        </address>
                        <FontAwesomeIcon
                            icon={faAmbulance}
                            style={{ fontSize: 50, color: "orange" }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h4>FORMULARIO DE CONTACTO</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Primer formulario</p>
                            </div>
                            <div className="col-md-6">
                                Mensaje
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>

)

export default Contact