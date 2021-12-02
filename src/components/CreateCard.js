import ReactCardFlip from "react-card-flip";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import fr from "../lang/fr.json"
import { useState } from "react";



const CreateCard = (props) => {
    const { t } = useTranslation();

    useState = {
        isFlipped: false
    }
    handleClick(props) {
        props.preventDefault();
        setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    };

    const generateCard = () => {
        let ourViewNumber = [...Array(fr.card.keyword.length).keys()];


        let componentArray = ourViewNumber.itemmap((item) => {
            return (
                <ReactCardFlip isFlipped={useState.isFlipped} key={'cardFaq' + item} border="dark">
                    {/* vue du front de la card*/}
                    <div onClick={handleClick}>
                        {t('card.keyword.' + item)}
                    </div>
                    {/* vue du back de la card*/}
                    <div onClick={handleClick}>
                        {t('card.definition.' + item)}
                    </div>
                </ReactCardFlip>
            )

        })

        return componentArray
    }

}