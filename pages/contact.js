import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhone,
    faPaperPlane,
    faGlobe,
    fabrans

} from "@fortawesome/free-solid-svg-icons";

const Contact = () => (

    <Layout>
        <header className="contact">
                <h2>Contact Us</h2>
        </header>
        {/* CONTACTO */}
        <section >
            <div className="container py-4">
                <div className="row text-center">
                    <h2 className="fs-1 mb-4">Get in touch</h2>
                    <div className="col-md-6 ">
                        <div className="card p-3 my-2">
                            <div className="card-header">
                                <h3 className="">Send a Message</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, facere.</p>
                            <div className="card-body">
                                <form action="">
                                    <div className="mb-3">
                                        <label className="form-label">Name:</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your name" name="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email address:</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your Email" name="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Message:</label>
                                        <textarea className="form-control" id="message" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 text-start px-4">
                        <div className="call_us">
                            <h3>Call Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, fugiat!</p>
                            <p>
                                <i className="contact_icon bi bi-headset"></i>  <a href="tel:+51950557643" className="descip" > +51 950557643</a>
                            </p>
                        </div>
                        <div className="visit_us">
                            <h3>Visit Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, fugiat!</p>
                            <p>
                                <i className="contact_icon bi bi-geo-alt-fill"></i> <span className="descip"> 198 West 21th Street, Suite 721 New York NY 10016</span>
                            </p>

                        </div>
                        <div className="visit_us">
                            <h3>Write to Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, fugiat!</p>
                            <p>
                                <i className="contact_icon bi bi-geo-alt-fill"></i><a href="mailto:abel.mejia.pinto@gmail.com" className="descip" >
                                    abel.mejia@gmail.com
                                </a>
                            </p>

                        </div>
                    </div>
                    {/* <div className="col-md-3  pt-3">
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
                    </div> */}
                </div>
            </div>
        </section >

    </Layout >

)

export default Contact