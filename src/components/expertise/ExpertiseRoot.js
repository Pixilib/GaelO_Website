import React, { Fragment } from "react";

import { Container, Col, Row } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import ExpertiseStat from "./ExpertiseStat";
import ExpertiseTestimonial from "./ExpertiseTestimonial";



const ExpertiseRoot = () => {
    
    const{t}=useTranslation()
    return (

        <Container className ="bg-light">
            <Row  className="p-5">

            <Row className="text-center" >
                <h1>{t('expertise.title')}</h1>
            </Row>

                <Col className=" p-3 m-3 text-center" >
                    <ExpertiseStat />
                </Col>

                <Col className="">
                    <ExpertiseTestimonial />
                </Col>

            </Row>
        </Container>

    )
}

export default ExpertiseRoot