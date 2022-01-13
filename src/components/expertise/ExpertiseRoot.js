import { Container, Col, Row } from 'react-bootstrap'
import { useTranslation } from "react-i18next"

import ExpertiseStat from "./ExpertiseStat"
import ExpertiseTestimonial from "./ExpertiseTestimonial"
import logoQuote from '../../assets/images/quote.svg'


const ExpertiseRoot = () => {

    const { t } = useTranslation()
    return (

        <Container>
            <Row className="text-center">
                <h1>{t('expertise.title')}</h1>
            </Row>
            <Row className="p-5" >
                <ExpertiseStat />
            </Row>
            <Row className="mt-5">
                <Col className="d-flex justify-content-center">
                <img src={logoQuote} alt='LogoQuote' className="logoQuote"/>

                    <ExpertiseTestimonial />
                </Col>
            </Row>
        </Container>
    )
}

export default ExpertiseRoot