import React, {useEffect, useState} from "react";
import "../../css/Slider.css";
import SliderImgCard from "./SliderImgCard.js";
import products from "../data/products.js";
import CardSlider from "./CardSlider.js";
import Modal from "../modal/Modal.js";

function Slider(){
    // numero de imagenes que se ocultan hacia la izquierda dentro del slider
    const [index, setIndex] = useState(0);
    // pausa el movimiento del slider al mouse enter / mouse leave
    const [pause, setPause] = useState(false);
    //cantidad de items a mostrar dependiendo el ancho de pantalla
    const [items, setItems] = useState(6);
    // mostrar ocultar el modal
    const [modalShow, setModalShow] = useState(false);
    // item que se mostrará en el modal
    const [itemToShow, setItemToShow] = useState(0);

    const showModal = (itemNumber) => {
        setItemToShow(itemNumber);
        setModalShow(true);
        console.log("mostrar modal con item N° "+itemNumber);
    }

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

    const updateIndex = (newIndex) => {
        
        updateItems();
        if(newIndex < 0){
            newIndex = products.length - items;
        }else if(newIndex > products.length - items){
            newIndex = 0;
        }
        setIndex(newIndex);
        
    };

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
                    <SliderImgCard
                        key={"slider-product"+i}
                        img={product.img}
                        title={product.name}
                        price={product.price}
                        itemKey={i}
                        handleClick={showModal}
                    />        
                )}
            </div>
            <Modal modalShow={modalShow} setModalShow={setModalShow}>
                <CardSlider
                    img={products[itemToShow].img}
                    title={products[itemToShow].name}
                    price={products[itemToShow].price}
                    description={products[itemToShow].description}
                />
            </Modal>
        </div>
    );
}

export default Slider;