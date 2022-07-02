import React from "react";
import  "../../css/ItemDescription.css";

function ItemDescription({ img, title, price, description, setModal}){

    // numero a formato moneda
	const toMoney = (number) => {
		return new Intl.NumberFormat("es-CO").format(number);
	};

    return(
        <div className="cardslider">
            <div className="cardslider-img">
                <img src={require("../../imgs/products/"+img+".jpg")} alt={img}/>
            </div>
            <div className="cardslider-info">
                <div className="cardslider-info-text">
                    <h3>{title}</h3>
                    <h4>{"$"+toMoney(price)}</h4>
                    {
                        description.map( (line, i) =>
                            <p key={"desc-item-"+i} className="description-item-line">{line}</p>
                        )
                    }
                </div>
                <button className="btn-return" onClick={()=>{setModal(false)}}>Regresar</button>
            </div>
        </div>
    );
}

export default ItemDescription;