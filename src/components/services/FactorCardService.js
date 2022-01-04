import React from "react";
import { Card } from "react-bootstrap";




const CardFade =(props)=>{
console.log(props.children[2])
    return(
        <Card className="CardFade ">
            {props.children}
        </Card>
    )
}








export default CardFade