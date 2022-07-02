import React from "react";
import { useState } from "react";
import "../css/Navbar.css";

function Navbar(){

    const [animateLinks, setAnimatelinks] = useState(false);

    const toggleLinks = () => {
        setAnimatelinks(!animateLinks);
    };

    const getTopPx = () => {
        const smallScreen = window.screen.width <= 620 ? true: false;

        if(animateLinks && smallScreen){ // mostrar links y pantalla peq
            return "59px";
        }else if(!animateLinks && smallScreen){ // ocultar links y pantalla peq
            return "-197px";
        }else if(animateLinks && !smallScreen){ // mostrar links y pantalla grande
            return "59px";
        }else{ // ocultar links y pantalla mediana
            return "0";
        }
    };

    return(
        <div className="navbar-wraper">
            <div className="navbar"/>
            <img className="logo-GyP-navbar" src={require("../imgs/logo-gyp-short.png")} alt="logo GyP blanco" />
            <div className="btn-small-screen" onClick={toggleLinks}>
                <hr />
                <hr />
                <hr />
            </div>
            <div className="container-link-navbar" style={{top: getTopPx()}}>
                <a className="link-navbar" href="#home">Inicio</a>
                <a className="link-navbar" href="#serviceList">Servicios</a>
                <a className="link-navbar" href="#usSection">Nosotros</a>
                <a className="link-navbar" href="#contactData">Contacto</a>
            </div>
            <div className="divider-reverse">
                <hr className="shine-reverse"/>
            </div>
        </div>
    );
}

export default Navbar;