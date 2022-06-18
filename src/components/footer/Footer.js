import React from "react";
import "../../css/Footer.css";
import backImg from "../../imgs/footer/carbon.jpg";

function Footer(){
    return(
        <div className="footer-back" style={{backgroundImage: "url("+ backImg +")"}}>
            <div className="footer">
                <div className="divider">
                    <hr className="shine"/>
                </div>
                <div className="footer-content">
                    <div className="contact-us">
                        <div className="contact-data">
                            <h3>Contáctanos</h3>
                            <div className="contact-data-list">
                                <p>311 814 2989</p>
                                <p>gypinformaticaytecnologia@gmail.com</p>
                                <p>Manzana 62 Casa 9 - Barrio Modelia 1</p>
                                <p>Ibagué - Tolima - Colombia</p>
                            </div>
                        </div>
                        <div className="social-media">
                            <h3>Nuestras Redes</h3>
                            <div className="social-media-logos">
                                <img src={require("../../imgs/icons/icon-facebook.png")} alt="GyP en Facebook" />
                                <img src={require("../../imgs/icons/icon-instagram.png")} alt="GyP en Instagram" />
                                <img src={require("../../imgs/icons/icon-whatsapp.png")} alt="GyP en otro lado" />
                            </div>
                        </div>
                    </div>
                    <div className="gyp-google-map">
                        <h3>Encuentranos en Google maps</h3>
                        <div className="frame-google-street"></div>
                    </div>
                </div>
                <div className="legal-mark">
                    <p> Copyright © 2023, G&amp;P Informática y Tecnología. Diseñado por 
                        <a  target="_blank" 
                            href="https://gypinformaticaytec.wixsite.com/sitioweb"
                            rel="noopener noreferrer"
                        >G&amp;P Informática y Tecnología
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;