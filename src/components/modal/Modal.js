import React from "react";
import "../../css/Modal.css";

function Modal({ modalShow, setModalShow, children }){

    let modalCssClass = modalShow ? "modal": "modal-hidden";

    return(
        <div className={modalCssClass}>
            <div className="modal-content">
                <div className="modal-header">
                    <button className="close-modal" onClick={()=>{setModalShow(false)}}>X</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer"></div>
            </div>
        </div>
    );
}

export default Modal;