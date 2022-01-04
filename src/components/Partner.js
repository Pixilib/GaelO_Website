import React from "react";
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import logo from '../lang/logo.json'

const Partner = () => {

    const { t } = useTranslation()

    const generatePartner = () => {
       
        const componentArray = logo.partner.logo.map((url) => {
            return (
                <Col>
                    <img src={url}></img>
                </Col>
            )
        })
        return componentArray
    }


    return (
        <Row>
            <h1>{t('partner.title')}</h1>
            {generatePartner()}
        </Row>
    )
}

export default Partner