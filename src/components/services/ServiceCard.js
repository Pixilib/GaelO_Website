import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import fr from '../../lang/fr.json'

import CardFade from "./CardFade";


const ServiceCard = () => {






    const { t } = useTranslation()

    const generateCardSolution = () => {
        const solutionNumber = [...Array(fr.service.subtitle.length).keys()]
        const colorChoices =['text-primary','text-secondary','text-dark','text-success','text-info']
        const borderChoices =['border-primary','border-secondary','border-dark','border-success','border-info']
        const componentArray = solutionNumber.map((item) => {
            return ( 
                <CardFade>
                    {/* vue du front de la card */}
                    <Card className="cardServiceFront">
                        <p className="text-center fw-bold fs-4 ">{t('service.subtitle.' + item)}</p>
                        <img className="serviceIcon " src={t('service.logo.' + item)}></img>
                        <p className="text-center text-dark">{t('service.front.' + item)}</p>
                    </Card>
                    {/* vue du back de la card */}
                    <Card className="cardServiceBack " >
                        <p className="text-center text-dark ">{t('service.back.' + item)}</p>
                    </Card>

                </CardFade>

            )
        })
        return componentArray
    }

    return (


        <Row className='row-cols-md-3'>
            {generateCardSolution()}
        </Row>

    )

}

export default ServiceCard