import "./App.css";
import Header from "./components/Header";
import Slider from "./components/slider/Slider";
import UsSection from "./components/sections/UsSection";
import ServiceSection from "./components/sections/ServiceSection";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Navbar from "./components/Navbar";

function App() {

	return (
		<div className="App">
			<Navbar/>
			<Header/>
			<Banner/>
			<div className='container-wrap'>
				<Slider/>
			</div>
			<ServiceSection/>
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
