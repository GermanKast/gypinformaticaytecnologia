import React, {useEffect, useState} from "react";
import "../../css/Slider.css";
import SliderImgCard from "./SliderImgCard.js";
import products from "../data/products.js";

function Slider(){

    const [index, setIndex] = useState(0);
    const [pause, setPause] = useState(false);
    const [items, setItems] = useState(6);//cantidad de items a mostrar

    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = products.length - 1;
        }else if(newIndex >= products.length - items){
            newIndex = 0;
        }

        setIndex(newIndex);
    };

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(!pause) updateIndex(index+1);
        }, 3000);

        const updateItems = () => {};

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
            <div className="slider-img-container" style={{transform: "translateX(-"+index*11+"%)"}}>
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