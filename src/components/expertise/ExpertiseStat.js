import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import CountUp from 'react-countup'

const ExpertiseStat = () => {

    const { t } = useTranslation()

    const numberClass = "text-center text-info fs-1 fw-bold  "
    const textClass = "d-flex justify-content-center fw-bold fs-5"
    return (

        <Fragment>
            <Col>
                <Row className="d-flex justify-content-center text-info fs-1 fw-bold">
                    {t('expertise.satisfaction.value')}
                </Row >
                <Row className={textClass}>
                    {t('expertise.satisfaction.text')}
                </Row >
            </Col>

            <Col>
                <Row className={numberClass}>
                    <CountUp delay={1} redraw={true} className="textChiffre" end={t('expertise.trials.value')} duration="3" />
                </Row>
                <Row className={textClass}>
                    {t('expertise.trials.text')}
                </Row>
            </Col>

            <Col>
                <Row className={numberClass}>
                    <CountUp delay={1} redraw={true}  end={t('expertise.dicom.value')} duration="3" />
                </Row>
                <Row className={textClass}>
                    {t('expertise.dicom.text')}
                </Row>
            </Col>

            <Col>
                <Row className={numberClass} >
                    <CountUp delay={1} redraw={true} end={t('expertise.center.value')} duration="3" />
                </Row>
                <Row className={textClass} >
                    {t('expertise.center.text')}
                </Row>
            </Col>

            <Col>
                <Row className={numberClass}>
                    <CountUp delay={1} redraw={true} end={t('expertise.user.value')} duration="3" />
                </Row>
                <Row className={textClass}>
                    {t('expertise.user.text')}
                </Row>
            </Col>

        </Fragment>

    )
}

export default ExpertiseStat