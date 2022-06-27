/*************************************************************************************************************
 * Componente : SectionCard
 * Array que contiene los servicios a mostrar y su contenido
 * cada objeto es un servicio y cada servicio contiene las siguientes propiedades
 * 
 * title : String - titulo de el servicio
 * subtitle : String - subtitulo del servicio
 * text : String - texto explicativo del servicio
 * img : String - nombre del archivo de la imagen que se mostrará si ruta ni extención ( La extencion por defecto es .jpg y su ruta es "root/src/imgs/services/")
 * colorbckgrnd : String - valores soportados "blue-trans", "violet-trans", "violet" y "blue" por defecto, cambia el color de fondo por colores preestablecidos
 * invertRow : Boolean - por defecto false, si es true el orden de los items se invierte en pantallas con width > 960px
 *************************************************************************************************************/

const services = [
    {
        title : "Asesoría Tecnológica",
        subtitle : "Tecnología en tu negocio",
        text : "Te asesoramos en el proceso de actualizar tu negocio integrando nuevas tecnologías para mejorar muchos procesos, desde atraer a nuevos clientes, administrar la información de tu empresa hasta mejorar la imagen de tu negocio.",
        img : "mujer-emprendedora-pensando",
        colorbckgrnd : "blue-trans",
        invertRow : false
    },
    {
        title : "Diseño de Catálogos",
        subtitle : "Tu catálogo digital",
        text : "Exhibe tus productos o servicios de forma profesional en un formato digital, llamativo y accesible que atraiga la atención de todos tus clientes.",
        img : "catalogos",
        colorbckgrnd : "violet",
        invertRow : true,
    },
    {
        title : "Desarrollo Web",
        subtitle : "Tu negocio en internet",
        text : "Creamos tu sitio web, vitrina virtual o tienda digital con un diseño profesional y adaptativo, lo cual hace que para tus clientes sea mas ameno su visualización en diferentes dispositivos como celulares, tablets y computadores. Este sitio web es un ejemplo de ello, intenta visualizarlo en otros dispositivos.",
        img : "desarrollo-web-adaptativo",
        colorbckgrnd : "violet-trans",
        invertRow : false
    },
    {
        title : "Campañas Publicitarias Digitales",
        subtitle : "Tu publicidad en internet",
        text : "Creamos estrategias digitales para exibir tu empresa, productos y servicios ante clientes potenciales ya sea en redes sociales como Facebook e instagram o a traves de Google usando una pagina web.",
        img : "redes-sociales",
        colorbckgrnd : "blue",
        invertRow : true
    },
    {
        title : "Edición de Video",
        subtitle : "Videos profesionales",
        text : "Editamos videos de toda clase, desde pequeños clips personales, hasta producciones independientes para compartirlas en familia, redes sociales o usarlas para la promoción de tu empresa, productos o servicios.",
        img : "edicion-video",
        colorbckgrnd : "blue-trans",
        invertRow : false
    },
    {
        title : "Edición Fotográfica",
        subtitle : "Retoque y montaje fotográfico",
        text : "Nos encargamos de mejorar la calidad de tus fotografias, eliminar detalles que no quieres que se vean o personalizarlas a tu gusto para cambiar su aspecto final y se adapten mejor a tus necesidades ya sea para redes sociales o alguna ocasion especial.",
        img : "edicion-fotos",
        colorbckgrnd : "violet",
        invertRow : true
    },
    {
        title : "Reparación de Computadores",
        subtitle : "Reparacion y Mantenimiento de PC´s",
        text : "Contamos con profesionales a tu disposición con mas de 10 años de experiencia en el mantenimiento y reparación de equipos de computo, un amplio portafolio de servicios de soporte para hogares y empresas.",
        img : "tecnico-arreglando-un-pc",
        colorbckgrnd : "violet-trans",
        invertRow : false,
    },
    {
        title : "Reparación de Celulares",
        subtitle : "Servicio Técnico para Celulares",
        text : "Tenemos mas de 5 años de experiencia en la reparación de celulares de muchas marcas como Samsung, Apple, Huawei, Motorola, Asus, Xiaomi, Lg, entre otras y también podemos ofrecerte todos los repuestos que necesites.",
        img : "proceso-reparación-telefono",
        colorbckgrnd : "blue",
        invertRow : true
    },
    {
        title : "Diseño de Mugs y Pads",
        subtitle : "Articulos perzonalizados",
        text : "Creamos diseños unicos y personalizados para la sublimación(impresión) en pocillos mugs y tapetes para mouse, ya sea para darle un regalo especial a esa persona querida o para la promoción de eventos y empresas.",
        img : "sublimacion-de-mugs",
        colorbckgrnd : "blue-trans",
        invertRow : false
    }
    
]

export default services;