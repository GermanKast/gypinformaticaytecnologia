import React from "react";
import "../../css/Item.css";

function Item({ img, title, price, itemKey, handleClick }){

	// numero a formato moneda
	const toMoney = (number) => {
		return new Intl.NumberFormat('es-CO').format(number);
	};

    return(
        <div className="slider-img-card-box" onClick={() => { handleClick(itemKey) }}>
            <div className="slider-img-card-box-img">
                <img src={require( "../../imgs/products/" + img + ".jpg" )} alt={img} />
            </div>
            
            <div className="slider-img-card-text">
                <h4>{title}</h4>
                <hr />
                <p>{"$"+toMoney(price)}</p>
            </div>
        </div>
    );
}

export default Item;