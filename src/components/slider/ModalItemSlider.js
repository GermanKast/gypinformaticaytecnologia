import React from "react";
import  "../../css/ModalItemSlider.css";

function ModalItemSlider({modalShow, setModalShow, img, title, price, description}){

    let modalCssClass = modalShow ? "modal-item-slider": "modal-item-slider-hidden";

    return(
        <div className={modalCssClass}>
            <div className="modal-item-slider-content">
                <button onClick={()=>{setModalShow(false)}} className="btn-close-modal">X</button>
                <div className="modal-item-slider-content-img">
                    <img src={require("../../imgs/products/"+img+".jpg")} alt={img}/>
                </div>
                <div className="modal-item-slider-content-info">
                    <div className="modal-item-slider-content-info-text">
                        <h3>{title}</h3>
                        <h4>{price}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="modal-item-slider-content-info-form">
                        <h4>Cantidad</h4>
                        <input className="modal-item-slider-input-number" type="number"/>
                        <button className="btn-modal-item-slider-addToCar">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalItemSlider;