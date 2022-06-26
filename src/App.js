import "./App.css";
import Header from "./components/Header";
import Slider from "./components/slider/Slider";
import UsSection from "./components/sections/UsSection";
import ServiceSection from "./components/sections/ServiceSection";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Modal from "./components/modal/Modal";
import { useEffect } from "react";

function App() {

	// Arreglo donde se almacenará la lista de compras
	const [shoppingList, setShoppingList] = useState( [ ] );
	// muestra u oculta el carrito de compras
	const [showCart, setShowCart] = useState( false );
	// flag - true indica que se debe actualizar los datos de la orden
	const [updateOrder, setUpdateOrder] = useState( false );

	const [order, setOrder] = useState( {
		name: "",
		address: "",
		phone: "",
		shipping: "5000",
		total: 0
	} );

	const deleteProductList = (index) => {

		if(index){
			setShoppingList(shoppingList.filter( item => item.index !== index));
		}else{
			setShoppingList([]);
		}

		setUpdateOrder(true);
    };

	// numero a formato moneda
	const toMoney = (number) => {
		return new Intl.NumberFormat("es-CO").format(number);
	};

	const updateTotalOrder = () => {
		let total = 0;
		let newOrder = order;

		if(shoppingList.length > 0){

			shoppingList.forEach(element => {
				total = total + parseInt(element.subTotal, 10);
			});
		}
		newOrder.total = total + parseInt(newOrder.shipping, 10);
		setOrder(newOrder);
		setUpdateOrder(false);
		console.log(newOrder);
	};

	useEffect(()=>{
		if(updateOrder){
			updateTotalOrder();
		}
	}, [updateOrder]);

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
					updateOrder={updateOrder}
					setUpdateOrder={setUpdateOrder}
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
						<h3>En tu lista de compras tienes {shoppingList.length} {shoppingList.length === 1 ? "producto" : "productos"}</h3>
					</div>
					<table  className="cart-table" style={{opacity: shoppingList.length > 0 ? "1": "0"}}>
						<tbody>
							{shoppingList.map(item =>
								<tr id={ item.index } key={item.index}>
									<td>
										<img className="shooping-cart-item-img" src={require("./imgs/products/" + item.img + ".jpg")} alt={item.img} />
									</td>
									<td style={{textAlign:"left"}}>
										<p>{ item.prodName }</p>
										<p style={{color: "gray"}}>{ "$"+toMoney(item.price) }</p>
									</td>
									<td style={{minWidth:"100px"}}>{ "x"+item.cant }</td>
									<td style={{minWidth:"150px"}}>{ "$"+toMoney(item.subTotal) }</td>
									<td style={{minWidth:"70px"}}>
										<img className="btn-delete-cart-item" src={require("./imgs/icons/eliminar.png")} alt="eliminar" onClick={()=>{deleteProductList(item.index)}}/>
									</td>
								</tr>
							)}
							<tr className="row-total" style={{borderBottom: "none"}}>
								<td></td>
								<td></td>
								<td>
									<p>Envío</p>
									<p>Total</p>
								</td>
								<td style={{textAlign: "left", paddingLeft: "45px"}}>
									<p>{"$"+toMoney(order.shipping)}</p>
									<p>{"$"+toMoney(order.total)}</p>
								</td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<div className="cart-btn-container">
						<button className="btn-shopping-cart back" onClick={()=>{setShowCart(false)}}>Regresar</button>
						<button className="btn-shopping-cart delete-list" onClick={()=>{deleteProductList()}}>Vaciar Carrito</button>
						<button className="btn-shopping-cart buy">Hacer Pedido</button>
					</div>
				</div>
            </Modal>
		</div>
	);
}

export default App;
