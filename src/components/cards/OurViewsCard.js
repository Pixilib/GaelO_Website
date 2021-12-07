import React, { useState } from "react"
import { Card,Col } from "react-bootstrap";
import ReactCardFlip from "react-card-flip"

const  OurviewsCard= (props) => {

    const [isFlipped, setisFlipped] = useState(false);

    const handleClick = () => {
        setisFlipped(!isFlipped);
    }

    return (

        <Col className="ColCard">
            <ReactCardFlip className="justify-content-center" role="button" isFlipped={isFlipped} >
                {/* vue du front de la card*/}
                <Card className=" text-center fs-3  styleCard" role="button" onClick={handleClick}>
                    <img className="justify-content-center cardIcon" src={props.imageUrl} />
                    {props.textFront}
                </Card>
                {/* vue du back de la card*/}
                <Card className="text-center text-white  font-weight-bold styleCard" role="button" onClick={handleClick}>
                    {props.textBack}
                </Card>
            </ReactCardFlip>
        </Col>
    )

}

export default OurviewsCard;