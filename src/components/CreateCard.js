import ReactCardFlip from "react-card-flip";
import { useTranslation } from "react-i18next";
import { Row, Col, Container, Card } from "react-bootstrap";
import fr from "../lang/fr.json"
import React,{ useState } from "react";



const CreateCard = (props) => {
    const { t } = useTranslation();

    const [ isFlipped , setisFlipped ] = useState (false);

   const handleClick =(event) => {
        event.preventDefault();
        setisFlipped(!isFlipped);
    }

    const generateCard = () => {
        let ourViewNumber = [...Array(fr.card.keyword.length).keys()];


        let componentArray = ourViewNumber.map((item) => {
            return (
                <ReactCardFlip isFlipped={isFlipped}  key={'card'+item} >
                    {/* vue du front de la card*/}
                    <Card   onClick={handleClick }>
                        {t('card.keyword.' + item)}
                    </Card>
                    {/* vue du back de la card*/}
                    <Card  onClick={handleClick }> 
                        {t('card.definition.' + item)}
                    </Card>
                </ReactCardFlip>
            )

        })

        return componentArray
    }

    return( 
    <Container className="bg-light p-1 text-center align-items-center ">
        <Col className="p-1">
        {generateCard()}
        </Col>
    </Container>


    );

}


export default CreateCard;