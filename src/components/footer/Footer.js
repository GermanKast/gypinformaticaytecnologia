import React from "react";
import "../../css/Footer.css";

function Footer(){
    return(
        <div className="footer">
            <div className="contact-us">
                <h3>Contactanos</h3>
                <ul>
                    <li>WhatsApp</li>
                    <li>E-mail</li>
                    <li>Direccion</li>
                </ul>
            </div>
            <div className="social-media">
                <h3>Nuestras Redes</h3>
                <div className="social-media-logos">
                    <img src="" alt="GyP en Facebook" />
                    <img src="" alt="GyP en Instagram" />
                    <img src="" alt="GyP en otro lado" />
                </div>
            </div>
            <div className="gyp-google-map">
                <h3>Encuentranos en Google maps</h3>
                <div className="frame-google-street"></div>
            </div>
        </div>
    );
}

export default Footer;