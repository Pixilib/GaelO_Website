import React ,{Fragment} from "react";
import { Card } from "react-bootstrap";




const CardFade =(props)=>{
    console.log(props.children)
    return(
        <Fragment>
            <Card className="CardFade ">
                {props.children[0]}
            </Card>
            <Card className="CardFade">
                {props.children[1]}
            </Card>
        </Fragment>
    )
}


export default CardFade