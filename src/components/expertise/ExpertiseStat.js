import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import CountUp from 'react-countup'

const ExpertiseStat = () => {

    const { t } = useTranslation()

    return (

        <Fragment>
            <Col>
                <Row className="d-flex justify-content-center">
                    {t('expertise.satisfaction.text')}
                </Row >
                <Row className="d-flex justify-content-center">
                    {t('expertise.satisfaction.value')}
                </Row >
            </Col>

            <Col>
                <Row className="d-flex justify-content-center">
                    {t('expertise.trials.text')}
                </Row>
                <Row className="text-center">
                    <CountUp end={t('expertise.trials.value')} duration="3" />
                </Row>
            </Col>

            <Col>
                <Row className="d-flex justify-content-center">
                    {t('expertise.dicom.text')}
                </Row>
                <Row className="text-center">
                    <CountUp end={t('expertise.dicom.value')} duration="3" />
                </Row>
            </Col>

            <Col>
                <Row className="d-flex justify-content-center" >
                    {t('expertise.center.text')}
                </Row>
                <Row className="text-center" >
                    <CountUp end={t('expertise.center.value')} duration="3" />
                </Row>
            </Col>

            <Col>
                <Row className="d-flex justify-content-center">
                    {t('expertise.user.text')}
                </Row>
                <Row className="text-center">
                    <CountUp end={t('expertise.user.value')} duration="3" />
                </Row>
            </Col>

        </Fragment>


    )
}

export default ExpertiseStat