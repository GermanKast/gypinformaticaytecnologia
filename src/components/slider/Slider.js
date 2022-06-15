import React, {useEffect, useState} from "react";
import "../../css/Slider.css";
import SliderImgCard from "./SliderImgCard.js";
import products from "../data/products.js";

function Slider(){
    // numero de imagenes que se ocultan hacia la izquierda dentro del slider
    const [index, setIndex] = useState(0);
    // pausa el movimiento del slider al mouse enter / mouse leave
    const [pause, setPause] = useState(false);
    //cantidad de items a mostrar dependiendo el ancho de pantalla
    const [items, setItems] = useState(6);

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
            newIndex = products.length - 1;
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
            <button className="slider-prev-btn" onClick={() => {updateIndex(index-1)}}>-</button>
            <button className="slider-next-btn" onClick={() => {updateIndex(index+1)}}>+</button>
            <div className="slider-frame"/>
            <div className="slider-img-container" style={{transform: "translateX(-"+index*206+"px)"}}>
                {products.map((product, i) => 
                    <SliderImgCard
                        key={"slider-product"+i}
                        img={product.img}
                        title={product.name}
                        price={product.price}
                        display={true}
                    />        
                )}
            </div>
        </div>
    );
}

export default Slider;