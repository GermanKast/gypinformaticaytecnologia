import React from "react";
import "../../css/SliderImgCard.css";

function SliderImgCard({ img, title, price, display }){

    const cssClass = display ? "slider-img-card-box": "slider-img-card-box-hidden";

    return(
        <div className={cssClass}>
            <div className="slider-img-card-box-img">
                <img src={require( "../../imgs/products/" + img + ".jpg" )} alt={img} />
            </div>
            
            <div className="slider-img-card-text">
                <h4>{title}</h4>
                <hr />
                <p>{price}</p>
            </div>
        </div>
    );
}

export default SliderImgCard;