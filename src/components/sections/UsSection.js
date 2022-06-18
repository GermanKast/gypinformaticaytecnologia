import React from "react";
import "../../css/UsSection.css";

function UsSection(){
    return(
        <div className="section-us">
            <img className="us-image" src={require("../../imgs/us/diseño-web-caricatura-fondo-oscuro-short.jpg")} alt="" />
            <div className="us-text">
                <h2>Sobre Nosotros</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    );
}

export default UsSection;