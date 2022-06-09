import React from 'react';
import '../css/SectionCard.css';

function SectionCard(props){

    let extraClases = "section-card-wrap";

    if( props.invertRow ) extraClases += "-invert";

    switch (props.colorbckgrnd) {
        case "violet-trans":
            extraClases += " background-violet-trans";
            break;

        case 'blue-trans':
            extraClases += " background-blue-trans";
        break;

        case 'violet':
            extraClases += " background-violet-solid";
        break;
    
        default:
            extraClases += " background-blue-solid";
            break;
    }

    return(
        <div className={extraClases} >
            <div className="section-card-text">
                <h3>{props.title}</h3>
                <h4>{props.subtitle}</h4>
                <br />
                <p>{props.text}</p>
            </div>
            <div className='section-card-img'>
                <img src={require('../imgs/services/' + props.img + '.jpg')} alt={props.img} />
            </div>
        </div>
    );
}

export default SectionCard;