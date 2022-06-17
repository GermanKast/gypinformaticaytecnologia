import "./App.css";
import Header from "./components/Header.js";
import SectionCard from "./components/SectionCard.js";
import serviceList from "./components/data/services.js";
import Slider from "./components/slider/Slider.js";
import UsSection from "./components/sections/UsSection.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <div className="App">
    	<Header/>
		<div className='container welcome'>
			<h1>TENEMOS NUEVOS ACCESORIOS PARA TI</h1>
			<h2>Ahorra más</h2>
		</div>
		<div className='container-wrap'>
			<Slider></Slider>
		</div>
		<div className="container banner-services">
			<h2>NUESTROS SERVICIOS</h2>
		</div>
		<div className="container-wrap">
			{serviceList.map((service, i) => 
				<SectionCard
					key={"service-"+i}
					title={service.title}
					subtitle={service.subtitle}
					text={service.text}
					img={service.img}
					colorbckgrnd={service.colorbckgrnd}
					invertRow={service.invertRow}
				/>	
			)}
		</div>
		<div className="container-wrap">
			<UsSection/>
		</div>
		<div className="container-wrap">
			<Footer/>
		</div>
    </div>
  );
}

export default App;
