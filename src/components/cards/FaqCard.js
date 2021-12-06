import React, { useState } from "react"
import { Card } from "react-bootstrap";
import ReactCardFlip from "react-card-flip"

const FaqCard = (props) => {

    const [isFlipped, setisFlipped] = useState(false);

    const handleClick = () => {
        setisFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} >
            {/* vue du front de la card*/}
            <Card className="testCard"onClick={handleClick}>
                <img className="testIcon" src={props.imageUrl} />
                {props.textFront}
            </Card>
            {/* vue du back de la card*/}
            <Card className="testCard" onClick={handleClick}>
                {props.textBack}
            </Card>
        </ReactCardFlip>
    )

}

export default FaqCard;