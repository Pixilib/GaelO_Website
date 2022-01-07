import { Container, Col, Row } from 'react-bootstrap'
import { useTranslation } from "react-i18next"

import ExpertiseStat from "./ExpertiseStat"
import ExpertiseTestimonial from "./ExpertiseTestimonial"

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
            <Row className="mt-5">
                <Col className="d-flex justify-content-center">
                    <ExpertiseTestimonial />
                </Col>
            </Row>
        </Container>
    )
}

export default ExpertiseRoot