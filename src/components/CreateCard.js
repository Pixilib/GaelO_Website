import { useTranslation } from "react-i18next"
import { Row, Col, Container } from "react-bootstrap"
import fr from "../lang/fr.json"
import React, { useState } from "react";
import OurViewsCard from "./cards/OurViewsCard";



const CreateCardOurViews = (props) => {
    const { t } = useTranslation();

    const generateCardOurViews = () => {
        let ourViewNumber = [...Array(fr.card.keyword.length).keys()];

        let componentArray = ourViewNumber.map((item) => {
            return (
                <Col className="" >
                    <OurViewsCard imageUrl={t('card.icon.' + item)} textBack={t('card.definition.' + item)} textFront={t('card.keyword.' + item)} />
                </Col>
            )
        })
        return componentArray
    }

    return (     
            <Row className=" row-cols-md-3  rowCard " >
                
                    {
                        generateCardOurViews()
                    }
                
            </Row>
    );
}

export default CreateCardOurViews;