import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ServiceCard from "./ServiceCard";
import ServiceImg from "./ServiceImg";

const ServiceRoot=()=>{

    const {t}= useTranslation()

    return(

        <Container fluid>
            <h1 className="text-center">{t('service.title')} </h1>
            <Row>
                <Col sm={3}>
                    <p>{t('service.intro')}</p>
                    <p>{t('service.content')}</p>
                </Col>
                <Col>
                    <ServiceCard/>
                </Col>
            </Row>
            <ServiceImg/>
        </Container>    
    )

}

export default ServiceRoot
