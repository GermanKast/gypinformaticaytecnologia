import React from 'react';
import '../../css/SectionCard.css';
import PropTypes from "prop-types";

/**************************************************************************************************
 * Funcion que toma dos parametros invert y color y devuelve una cadena con
 * la clase css a usar en el div principal del componente SectionCard
 * 
 * @param {boolean} invert Indica si se invierte el contenido del div
 * @param {string} color Establece el color de fondo
 * @returns String con la clase css a usar en el div principal del componente
 **************************************************************************************************/
function getCssClass( invert, color ){

    let cssClass = "section-card-wrap";

    if( invert ) cssClass += "-invert";

    switch (color) {
        case "violet-trans":
            cssClass += " background-violet-trans";
            break;

        case 'blue-trans':
            cssClass += " background-blue-trans";
        break;

        case 'violet':
            cssClass += " background-violet-solid";
        break;
    
        default:
            cssClass += " background-blue-solid";
            break;
    }

    return cssClass;
}

/******************************************************************************************************************
 * Función principal del componente SectionCard
 * @param {object} - objeto js con las siguientes propiedades
 *  - {string} title : titulo
 *  - {string} subtitle : subtitulo
 *  - {string} text : texto explicativo
 *  - {string} img : nombre de la imagen a mostrar sin extencion y sin path
 *  - {string} colorbckgrnd : color de fondo a establecer - valores posibles (blue, blue-trans, violet, violet-trans)
 *  - {boolean} invertRow : mostrar contenido invertido
 * @returns Componente SectionCard
 ******************************************************************************************************************/
export default function SectionCard({ title, subtitle, text, img, colorbckgrnd, invertRow }){

    const cssClass = getCssClass( invertRow, colorbckgrnd );

    return(
        <div className={cssClass} >
            <div className="section-card-text">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <br />
                <p>{text}</p>
            </div>
            <div className='section-card-img'>
                <img src={require('../../imgs/services/' + img + '.jpg')} alt={img} />
            </div>
        </div>
    );
}

/******************************************************************************************************************
 * Validación de props
 ******************************************************************************************************************/
SectionCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    colorbckgrnd: PropTypes.string.isRequired,
    invertRow: PropTypes.bool.isRequired,
}