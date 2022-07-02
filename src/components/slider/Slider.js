import React, {useEffect, useState} from "react";
import "../../css/Slider.css";
import Item from "./Item.js";
import ItemDescription from "./ItemDescription.js";
import Modal from "../modal/Modal.js";
import products from "../data/products.js";

function Slider(){

    // numero de imagenes que se ocultan hacia la izquierda dentro del slider
    const [index, setIndex] = useState(0);
    // pausa el movimiento del slider al mouse enter / mouse leave
    const [pause, setPause] = useState(false);
    //cantidad de items a mostrar en slider dependiendo el ancho de pantalla
    const [items, setItems] = useState(6);
    // mostrar ocultar el modal que muestra la descripcion del producto
    const [modal, setModal] = useState(false);
    // item que se mostrará en el modal
    const [itemToShow, setItemToShow] = useState(0);

    // se establece el producto a mostrar en el modal y se abre el modal 
    const showModal = (itemNumber) => {
        setItemToShow(itemNumber);
        setModal(true);
    }

    // establece la cantidad de items a mostrar en el slider segun el tamaño de la pantalla
    const updateItems = () => {
        let wScreen = window.screen.width;
        let itemsToShow = 1;
        if(wScreen >= 1300){
            itemsToShow = 6;
        }else if(wScreen >= 1130 && wScreen <= 1299){
            itemsToShow = 5;
        }else if(wScreen >= 930 && wScreen <= 1129){
            itemsToShow = 4;
        }else if(wScreen >= 730 && wScreen <= 929){
            itemsToShow = 3;
        }else if(wScreen >= 530 && wScreen <= 729){
            itemsToShow = 2;
        }
        setItems(itemsToShow);
    };

    // hace que los productos se muestren en bucle (cuando se terminan los productos vuelve al inicio)
    const updateIndex = (newIndex) => {
        
        updateItems();
        if(newIndex < 0){
            newIndex = products.length - items;
        }else if(newIndex > products.length - items){
            newIndex = 0;
        }
        setIndex(newIndex);
        
    };

    // ejecuta la animacion del slider cada 2.5 s
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(!pause) updateIndex(index+1);
        }, 2500);

        return () => {
            if(interval){
                clearInterval(interval);
            }
        };
    });

    return(
        <div className="slider-box" onMouseEnter={() => {setPause(true)}} onMouseLeave={() => {setPause(false)}}>
            <div className="wraper-slider-prev-btn">
                <button className="slider-prev-btn" onClick={() => {updateIndex(index-1)}}>
                    <img src={require("../../imgs/icons/icon-left-row-black.png")} alt="Icono flecha izquierda" />
                </button>
            </div>
            <div className="wraper-slider-next-btn">
                <button className="slider-next-btn" onClick={() => {updateIndex(index+1)}}>
                    <img src={require("../../imgs/icons/icon-right-row-black.png")} alt="Icono flecha derecha" />
                </button>
            </div>
            <div className="slider-img-container" style={{transform: "translateX(-"+index*206+"px)"}}>
                {products.map((product, i) => 
                    <Item
                        key={"slider-product"+i}
                        img={product.img}
                        title={product.name}
                        price={product.price}
                        itemKey={i}
                        handleClick={showModal}
                    />        
                )}
            </div>
            <Modal modalShow={modal} setModalShow={setModal}>
                <ItemDescription
                    img={products[itemToShow].img}
                    title={products[itemToShow].name}
                    price={products[itemToShow].price}
                    description={products[itemToShow].description}
                    setModal={setModal}
                />
            </Modal>
        </div>
    );
}

export default Slider;