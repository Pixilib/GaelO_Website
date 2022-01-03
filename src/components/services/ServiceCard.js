import { Container, Col, Row } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import fr from '../../lang/fr.json'
import FactorCardSolution from "./FactorCardSolution";

const ServiceCard = () => {

    const { t } = useTranslation()

    const generateCardSolution = () => {
        const solutionNumber = [...Array(fr.service.card.length).keys()]

        const componentArray = solutionNumber.map((item) => {
            return (
                <Col  >
                    <FactorCardSolution text={t('service.card.' + item)} />
                </Col>
            )
        })
        return componentArray
    }

    return (

        <Container>
            <Row className='row-cols-md-3 '>
                {generateCardSolution()}
            </Row>
        </Container>
    )

}

export default ServiceCard