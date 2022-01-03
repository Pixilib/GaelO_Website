import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import CountUp from 'react-countup'

const ExpertiseStat =()=>{

    const{t}=useTranslation()

    return (
        <Fragment>
            <Row>
                <h1>{t('expertise.title')}</h1>
            </Row>
            <Row>
                <p>{t('expertise.satisfaction.text')}:{t('expertise.satisfaction.value')}</p>
                <p>{t('expertise.trials.text')}:<CountUp end={t('expertise.trials.value')} duration="3"/></p>
                <p>{t('expertise.dicom.text')}:<CountUp end={t('expertise.dicom.value')} duration="3"/></p>
                <p>{t('expertise.center.text')}:<CountUp end={t('expertise.center.value')} duration="3"/></p>
                <p>{t('expertise.user.text')}:<CountUp end={t('expertise.user.value')} duration="3"/></p>
            </Row>
        </Fragment>
    )
}

export default ExpertiseStat