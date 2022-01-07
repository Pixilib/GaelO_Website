import React, { Fragment } from "react";

import { Container, Col, Row } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import ExpertiseStat from "./ExpertiseStat";
import ExpertiseTestimonial from "./ExpertiseTestimonial";



const ExpertiseRoot = () => {

    const { t } = useTranslation()
    return (

        <Container className="">
            <Row className="text-center">
                <h1>{t('expertise.title')}</h1>
            </Row>
            <Row className="p-5" >
                <ExpertiseStat />
            </Row>
            <Container>
            <Row className="text-center">
                <h2>{t('expertise.testimonial.title')}</h2>
            </Row>
           

                <Row className="d-flex justify-content-center  ">
                    <ExpertiseTestimonial />
                </Row>
                </Container>

            
        </Container>
    )
}

export default ExpertiseRoot