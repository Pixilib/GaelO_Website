import React from "react";
import { Card } from "react-bootstrap";




const CardFade =(props)=>{
    return(
        <Card className="CardFade ">
            {props.children}
        </Card>
    )
}








export default CardFade