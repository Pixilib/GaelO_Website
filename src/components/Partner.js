import React from "react";
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import fr from '../lang/fr.json'

const Partner = () => {

    const { t } = useTranslation()

    const generatePartner = () => {
        const partnerNumero = [...Array(fr.partner.logo.length).keys()]

        const componentArray = partnerNumero.map((item) => {
            return (
                <Col>
                    <img src={t('partner.logo.' + item)}></img>
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