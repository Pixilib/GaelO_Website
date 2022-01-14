import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ServiceCard from "./ServiceCard";

const ServiceRoot = () => {

    const { t } = useTranslation()

    return (

        <Container >
            <h1 className="text-center">{t('service.title')} </h1>
            <Row className="d-flex justify-content-center align-items-center" >
                <Col xl={4 } className="fw-bold">
                    <p>{t('service.intro')}</p>
                    <p>{t('service.content')}</p>
                </Col>
                <Col xl={8}>
                    <ServiceCard />
                </Col>
            </Row>
            <Row className="mt-5 serviceSeparator">
                <Col className="d-flex align-items-center">
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
