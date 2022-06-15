import React from "react";
import  "../../css/CardSlider.css";

function CardSlider({ img, title, price, description}){

    return(
        <div className="cardslider">
            <div className="cardslider-img">
                <img src={require("../../imgs/products/"+img+".jpg")} alt={img}/>
            </div>
            <div className="cardslider-info">
                <div className="cardslider-info-text">
                    <h3>{title}</h3>
                    <h4>{price}</h4>
                    <p>{description}</p>
                </div>
                <div className="cardslider-info-form">
                    <h4>Cantidad</h4>
                    <input className="cardslider-input" type="number"/>
                    <button className="btn-addToCar">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default CardSlider;