import "./App.css";
import Header from "./components/Header.js";
import Slider from "./components/slider/Slider.js";
import UsSection from "./components/sections/UsSection.js";
import ServiceSection from "./components/sections/ServiceSection.js";
import Footer from "./components/footer/Footer.js";
import Banner from "./components/banner/Banner.js";
import Navbar from "./components/Navbar.js";

function App() {

  return (
    <div className="App">
		<Navbar/>
    	<Header/>
		<Banner/>
		<div className='container-wrap'>
			<Slider></Slider>
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
