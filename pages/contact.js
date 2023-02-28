import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhone,
    faPaperPlane,
    faGlobe,

} from "@fortawesome/free-solid-svg-icons";

const Contact = () => (

    <Layout>
        <header className=" about">
        </header>
        {/* CONTACTO */}
        <section>
            <div className="container pt-4">
                <div className="row text-center">
                    <h2>CONTACT US</h2>
                    <div className="col-md-3  pt-3">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{ fontSize: 70, color: "ffbb00" }}
                        />
                        <div className="pt-3">
                            <span className="contact-ico">Address: </span><br />
                            198 West 21th Street, Suite 721 New York NY 10016
                        </div>
                    </div>
                    <div className="col-md-3 pt-3">
                        <FontAwesomeIcon
                            icon={faPhone}
                            style={{ fontSize: 70, color: "ffbb00" }}
                        />
                        <div className="pt-3">
                            <span className="contact-ico">Phone: </span><br />
                            <a href="tel:+51950557643"> +51 950557643</a>
                        </div>
                    </div>
                    <div className="col-md-3 pt-3">
                        <FontAwesomeIcon
                            icon={faPaperPlane}
                            style={{ fontSize: 70, color: "ffbb00" }}
                        />
                        <div className="pt-3">
                            <span className="contact-ico">Email:</span>
                            <address>
                                <a href="mailto:abel.mejia.pinto@gmail.com">
                                    abel.mejia@gmail.com
                                </a>
                            </address>
                        </div>
                    </div>
                    <div className="col-md-3 pt-3">
                        <FontAwesomeIcon
                            icon={faGlobe}
                            style={{ fontSize: 70, color: "ffbb00" }}
                        />
                        <div className="pt-3">
                            <span className="contact-ico">Website: </span><br />
                            <a href="/">dfdConstruccion.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* FORMULARIO */}
        <section>
            <div className="container pt-4">
                <div className="row text-center">
                    <h2>FORMULARIO</h2>
                    <div className="col-md-8">
                        <h2>Contact Us</h2>
                        <form action="">

                        </form>
                    </div>
                    <div className="col-md-4">
                        
                    </div>
                </div>
            </div>
        </section>
    </Layout>

)

export default Contact