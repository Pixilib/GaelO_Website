import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ServiceCard from "./ServiceCard";

const ServiceRoot = () => {

    const { t } = useTranslation()

    return (

        <Container fluid>
            <h1 className="text-center">{t('service.title')} </h1>
            <Row>
                <Col sm={3}>
                    <p>{t('service.intro')}</p>
                    <p>{t('service.content')}</p>
                </Col>
                <Col>
                    <ServiceCard />
                </Col>
            </Row>
            <Row className="mt-5">
                <Col sm={3} className="d-flex align-items-center">
                    <h2 className="text-center">Service Workflow </h2>
                </Col>
                <Col>
                    <img alt="service workflow" src={t('service.img')} ></img>
                </Col>
            </Row>
        </Container>
    )

}

export default ServiceRoot
