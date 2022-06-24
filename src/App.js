import "./App.css";
import Header from "./components/Header";
import Slider from "./components/slider/Slider";
import UsSection from "./components/sections/UsSection";
import ServiceSection from "./components/sections/ServiceSection";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Modal from "./components/modal/Modal"

function App() {

	// Arreglo donde se almacenará la lista de compras
	const [shoppingList, setShoppingList] = useState([ ]);
	// muestra u oculta el carrito de compras
	const [showCart, setShowCart] = useState(false);

	function deleteElement(index){
        setShoppingList(shoppingList.filter( item => item.index !== index));
    }

	function deleteAllProducts(){
		setShoppingList([]);
	}

	return (
		<div className="App">
			<Navbar showCart={showCart} setShowCart={setShowCart} />
			<Header/>
			<Banner/>
			<div className='container-wrap'>
				<Slider
					showCart={showCart}
					setShowCart={setShowCart}
					shoppingList={shoppingList}
					setShoppingList={setShoppingList}
				/>
			</div>
			<ServiceSection/>
			<div className="container-wrap">
				<UsSection/>
			</div>
			<div className="container-wrap">
				<Footer/>
			</div>
			<Modal modalShow={showCart} setModalShow={setShowCart} title="Carrito de Compras">
				<div className="cart-container">
					<div className="cart-title">
						<h3>Tu lista de compras tiene {shoppingList.length+" productos"}</h3>
					</div>
					<table  className="cart-table" style={{opacity: shoppingList.length > 0 ? "1": "0"}}>
						<thead>
							<tr>
								<th></th>
								<th>Producto</th>
								<th>Precio</th>
								<th>Cantidad</th>
								<th>Subtotal</th>
								<th>Eliminar</th>
							</tr>
						</thead>
						<tbody>
							{shoppingList.map(item =>
								<tr id={ item.index } key={item.index}>
									<td style={{background: "none"}}>
										<img className="shooping-cart-item-img" src={require("./imgs/products/" + item.img + ".jpg")} alt={item.img} />
									</td>
									<td>{ item.prodName }</td>
									<td>{ "$"+item.price }</td>
									<td>{ item.cant }</td>
									<td>{ "$"+item.subTotal }</td>
									<td>
										<img className="btn-delete-cart-item" src={require("./imgs/icons/eliminar.png")} alt="eliminar" onClick={()=>{deleteElement(item.index)}}/>
									</td>
								</tr>
							)}
						</tbody>
					</table>
					<div className="cart-btn-container">
						<button className="btn-shopping-cart back" onClick={()=>{setShowCart(false)}}>Regresar</button>
						<button className="btn-shopping-cart delete-list" onClick={deleteAllProducts}>Vaciar Carrito</button>
						<button className="btn-shopping-cart buy" >Hacer Pedido</button>
					</div>
				</div>
            </Modal>
		</div>
	);
}

export default App;
