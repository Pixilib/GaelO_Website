import React,{Fragment} from "react";
import ServiceCard from "./ServiceCard";
import ServiceImg from "./ServiceImg";
import ServiceIntro from "./ServiceIntro";

const ServiceRoot=()=>{

    return(

        <Fragment>
            <ServiceIntro/>
            <ServiceCard/>
            <ServiceImg/>
        </Fragment>    
    )

}

export default ServiceRoot
