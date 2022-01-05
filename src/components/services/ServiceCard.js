import { Container, Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import fr from '../../lang/fr.json'
import { CSSTransition } from "react-transition-group";
import CardFade from "./CardFade";
import { useState } from "react";

const ServiceCard = () => {

    const [isFront, setIsFront] = useState(true);

    console.log(isFront, "je suis rentré")


    const { t } = useTranslation()

    const generateCardSolution = () => {
        const solutionNumber = [...Array(fr.service.subtitle.length).keys()]

        const componentArray = solutionNumber.map((item) => {
            return (
                <Col>
                    <CardFade>
                        <CSSTransition in={isFront} timeout={200}
                        onEnter={()=>setIsFront(false)}
                        onExit={()=>setIsFront(true)}
                         classNames="fade">
                            {/* vue du front de la card */}
                            <Card className="cardServiceFront" onMouseEnter={() => setIsFront(true)}>
                                <p className="text-center fw-bold fs-4 ">{t('service.subtitle.' + item)}</p>
                                <img className="serviceIcon " src={t('service.logo.' + item)}></img>
                                <p className="text-center text-dark">{t('service.front.' + item)}</p>
                            </Card>


                            {/* vue du back de la card */}
                            <Card className="cardServiceBack " onMouseLeave={() => setIsFront(false)}>
                                <p className="text-center text-dark ">{t('service.back.' + item)}</p>
                            </Card>
                        </CSSTransition>
                    </CardFade>

                </Col>
            )
        })
        return componentArray
    }

    return (


        <Row className='w-100 h-100 row-cols-md-3 d-flex rowCard'>
            {generateCardSolution()}
        </Row>

    )

}

export default ServiceCard