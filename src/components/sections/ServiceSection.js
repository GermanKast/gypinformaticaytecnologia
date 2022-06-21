import React from "react";
import "../../css/ServiceSection.css";
import SectionCard from "./SectionCard.js";
import serviceList from "../data/services.js";

function ServiceSection(){
    return(
        <div id="serviceList" className="service-section-container">
            <div className="banner-services">
			    <h2>NUESTROS SERVICIOS</h2>
		    </div>
            <div className="service-list">
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
        </div>
    );
}

export default ServiceSection;