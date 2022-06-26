import React from "react";
import "../../css/UsSection.css";

function UsSection(){
    return(
        <div id="usSection" className="section-us">
            <img className="us-image" src={require("../../imgs/us/diseño-web-caricatura-fondo-oscuro-short.jpg")} alt="" />
            <div className="us-text">
                <h2>Sobre Nosotros</h2>
                <p>Somos un emprendimiento Ibaguereño de dos hermanos con amplios conocimientos y experiencia en el sector publicitario, tecnico y digital.</p>
                <p>Hemos notado que hoy en dia aun existen muchas personas y empresas con dificultad para usar las nuevas tecnologias debido a altos costos o desconocimiento.</p>
                <p>Por lo tanto nuestra mision se ha convertido en ayudar a todo quien lo necesite a acceder a las nuevas herramientas digitales.</p>
            </div>
        </div>
    );
}

export default UsSection;