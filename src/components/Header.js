import React from "react";
import '../css/Header.css';

function Header(){
    
    return(
        <div className="container-header">
            <img className="header-logo-gyp" src={require('../imgs/logo-gyp-500x300.png')} alt="logo gyp" />
        </div>
    );
}

export default Header;