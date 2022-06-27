import React, { useState } from "react";
import  "../../css/ItemDescription.css";

function ItemDescription({ index, img, title, price, description, inputVal, shoppingList, productAdded, setProductAdded, setShoppingList, openCart, updateOrder, setUpdateOrder}){

    const [inputCant, setInputCant] = useState(1);

    const handleChange = (e) => {
        setInputCant(e.target.value);
    };

    const addToCart = () => {

        if(!productAdded){
            let item = {};
            const list = shoppingList;
            const indexItem = list.findIndex( itemList => itemList.index === index );// busca index del elemento en lista

            if(indexItem >= 0){ // item ya existe en array
                item = list[indexItem];
                item.cant = inputCant;
                item.subTotal = inputCant * item.price;
                list[indexItem] = item; // reemplazo
            }else{
                item = {
                    index: index,
                    cant: inputCant,
                    img: img,
                    prodName: title,
                    price: price,
                    subTotal: price * inputCant
                };

                list.push(item); // inserción
            }

            setProductAdded(true);

            setShoppingList( list );
            // se indica que se debe actualizar la orden
            if(!updateOrder) setUpdateOrder(true);
        }
    }

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
                <div className="cardslider-info-form">
                    <h4>Cantidad</h4>
                    <input className="cardslider-input" type="number" defaultValue={inputVal} onChange={handleChange} min="1"/>
                    <button className={productAdded ? "btn-addToCart-disabled" : "btn-addToCart"} onClick={addToCart}>{productAdded ? "Producto añadido" : "Añadir al carrito"}</button>
                    <button className="btn-show-cart" onClick={openCart} >Mostrar carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDescription;