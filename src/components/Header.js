import React from "react";
import '../css/Header.css';

function Header(){
    
    return(
        <div id="home" className="container-header">
            <img src={require('../imgs/banner-gyp-largo.jpg')} alt="logo gyp" />
        </div>
    );
}

export default Header;