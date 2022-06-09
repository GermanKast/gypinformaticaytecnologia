import './App.css';
import Header from './components/Header.js';
import SectionCard from './components/SectionCard.js';

function App() {
  return (
    <div className="App">
    	<Header/>
		<div className='container welcome'>
			<h1>TENEMOS NUEVOS ACCESORIOS PARA TI</h1>
			<h2>Ahorra más</h2>
		</div>
		<div className='container slider-box'>
			<h2>slider productos</h2>
		</div>
		<div className="container banner-services">
			<h2>NUESTROS SERVICIOS</h2>
		</div>
		<SectionCard 
			title='Asesoría Tecnológica'
			subtitle='Tecnología en tu negocio'
			text='Te asesoramos en el proceso de actualizar tu negocio integrando nuevas tecnologías para mejorar muchos procesos, desde atraer a nuevos clientes, administrar la información de tu empresa hasta mejorar la imagen de tu negocio.'
			img='mujer-emprendedora-pensando'
			colorbckgrnd='blue-trans'/*valores soportados= blue-trans, violet-trans, violet y blue por defecto */
			/>
		<SectionCard 
			title='Diseño de Catálogos'
			subtitle='Tu catálogo digital'
			text='Exhibe tus productos o servicios de forma profesional en un formato digital, llamativo y accesible que atraiga la atención de todos tus clientes.'
			img='catalogos'
			colorbckgrnd='violet'
			invertRow={true}/* si es true el orden de los items se invierte en pantallas con width > 960px */
			/>
		<SectionCard 
			title='Reparación de Computadores'
			subtitle='Reparacion y Mantenimiento de PC´s'
			text='Contamos con profesionales a tu disposición con mas de 10 años de experiencia en el mantenimiento y reparación de equipos de computo, un amplio portafolio de servicios de soporte para hogares y empresas.'
			img='tecnico-arreglando-un-pc'
			colorbckgrnd='violet-trans'
			/>
		<SectionCard 
			title='Reparación de Celulares'
			subtitle='Servicio Técnico para Celulares'
			text='Tenemos mas de 10 años de experiencia en la reparación de celulares de muchas marcas como Samsung, Apple, Huawei, Motorola, Asus, Xiaomi, Lg, entre otras y también podemos ofrecerte todos los repuestos que necesites.'
			img='proceso-reparación-telefono'
			colorbckgrnd='blue'
			invertRow={true}
			/>
    </div>
  );
}

export default App;
