import React, { useState } from "react"
import { Card } from "react-bootstrap";
import ReactCardFlip from "react-card-flip"

const FaqCard = (props) => {

    const [isFlipped, setisFlipped] = useState(false);

    const handleClick = () => {
        setisFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip className="justify-content-center" isFlipped={isFlipped} >
            {/* vue du front de la card*/}
            <Card className=" text-center  styleCard"onClick={handleClick}>
                <img className="justify-content-center cardIcon" src={props.imageUrl} />
                {props.textFront}
            </Card>
            {/* vue du back de la card*/}
            <Card className="text-center font-weight-bold styleCard" onClick={handleClick}>
                {props.textBack}
            </Card>
        </ReactCardFlip>
    )

}

export default FaqCard;