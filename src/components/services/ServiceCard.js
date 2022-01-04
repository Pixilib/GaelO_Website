import { Container, Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useTranslation } from "react-i18next";
import fr from '../../lang/fr.json'
import CardFade from "./FactorCardService";

const ServiceCard = () => {

    const { t } = useTranslation()

    const generateCardSolution = () => {
        const solutionNumber = [...Array(fr.service.subtitle.length).keys()]

        const componentArray = solutionNumber.map((item) => {
            return (
                <Col  >
                    <CardFade>
                       
                        {/* vue du front de la card */}
                        <Card className="text-center fs-4 text-primary cardService">{t('service.subtitle.'+item)}
                         <img className="serviceIcon " src={t('service.logo.'+item)}></img>  {t('service.front.'+item)}</Card>
                        {/* vue du back de la card */}
                        <Card className="text-center">{t('service.back.'+item)}</Card>
                        <button>Read More</button>
                    </CardFade>

                </Col>
            )
        })
        return componentArray
    }

    return (

        <Container>
            <Row className='w-100 h-100 '>
                {generateCardSolution()}
            </Row>
        </Container>
    )

}

export default ServiceCard