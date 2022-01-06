import React, { Fragment } from "react";

import { Container, Col, Row } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import ExpertiseStat from "./ExpertiseStat";
import ExpertiseTestimonial from "./ExpertiseTestimonial";



const ExpertiseRoot = () => {

    const { t } = useTranslation()
    return (

        <Container className="">
            <Row>
                <h1>{t('expertise.title')}</h1>
            </Row>
            <Row className="p-5" >
                <ExpertiseStat />
            </Row>
            <Container>
                <Row>
                    <ExpertiseTestimonial />
                </Row>
            </Container>
        </Container>
    )
}

export default ExpertiseRoot