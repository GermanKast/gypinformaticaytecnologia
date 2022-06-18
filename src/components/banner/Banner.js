import React from "react";
import "../../css/Banner.css";
import imgBack from "../../imgs/banner/accesorios.jpg";

function Banner(){
    return(
        <div className="banner-back" style={{backgroundImage: "url("+ imgBack +")"}}>
            <div className="banner">
                <h1>TENEMOS NUEVOS ACCESORIOS PARA TI</h1>
                <h2>Ahorra más</h2>
            </div>
        </div>
    );
}

export default Banner;