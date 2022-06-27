import React from "react";
import "../../css/UsSection.css";

function UsSection(){
    return(
        <div id="usSection" className="section-us">
            <img className="us-image" src={require("../../imgs/us/diseño-web-caricatura-fondo-oscuro-short.jpg")} alt="" />
            <div className="us-text">
                <h2>Sobre Nosotros</h2>
                <p>Somos un emprendimiento Ibaguereño radicado en la ciudad de Ibagué Tolima desde 2019, contamos con amplios conocimientos y experiencia en el sector publicitario, tecnico y digital.</p>
                <br />
                <p>Nuestra mision es ayudar a todo quien lo necesite a acceder a las nuevas herramientas digitales.</p>
            </div>
        </div>
    );
}

export default UsSection;