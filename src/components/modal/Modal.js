import React, {useState} from "react";
import  "../../css/Modal.css";

function Modal(){

    const [modalItem, setModalItem] = useState(false);


    return(
        <div className="modal">
            <div className="modal-content">
                <button className="btn-close-modal">X</button>
                <div className="modal-content-img">
                    <img src={require("../../imgs/products/cable-usb-tipo-b.jpg")} alt="Imagen de cable usb tipo c" />
                </div>
                <div className="modal-content-info">
                    <div className="modal-content-info-text">
                        <h3>Cable de Datos Tipo C</h3>
                        <h4>$15.000</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="modal-content-info-form">
                        <h4>Cantidad</h4>
                        <input className="modal-input-number" type="number" value={1}/>
                        <button className="btn-modal-addToCar">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;