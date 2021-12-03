import ReactCardFlip from "react-card-flip"
import { useTranslation } from "react-i18next"
import { Row, Col, Container, Card, Figure } from "react-bootstrap"
import fr from "../lang/fr.json"
import React, { useState } from "react";
import { Image } from "react-bootstrap";



const CreateCard = (props) => {
    const { t } = useTranslation();

    const [isFlipped, setisFlipped] = useState(new Array(fr.card.keyword.length).fill(false));

    const handleClick = (item) => {
        let newState = [...isFlipped]
        newState[item] = !newState[item]
        setisFlipped(newState);
    }


    const generateCard = () => {
        let ourViewNumber = [...Array(fr.card.keyword.length).keys()];

        let componentArray = ourViewNumber.map((item) => {
            return (
                <Col className="testCol" >
                    <ReactCardFlip className="testCardFlip" isFlipped={isFlipped[item]} key={'card' + item}>
                        {/* vue du front de la card*/}
                        <div className="testCard"   onClick={() => { handleClick(item) }}>
                            <img className="testIcon" src={t('card.icon.' + item)}  />
                            {t('card.keyword.' + item)}
                        </div>
                        {/* vue du back de la card*/}
                        <div className="testCard"  onClick={() => { handleClick(item) }}>
                            {t('card.definition.' + item)}
                        </div>
                    </ReactCardFlip>
                </Col>
            )

        })

        return componentArray
    }

    return (
     
            <Row className=" row-cols-md-3 justify-content-center  " >
                {
                    generateCard()
                }
            </Row>
      


    );

}


export default CreateCard;