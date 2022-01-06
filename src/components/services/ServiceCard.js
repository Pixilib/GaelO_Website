import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import fr from '../../lang/fr.json'

import CardFade from "./CardFade";


const ServiceCard = () => {

    const { t } = useTranslation()

    const generateCardSolution = () => {

        let createdCard = [];


        for (const [key, value] of Object.entries(fr.service.card)) {
       console.log(key)     

                createdCard.push((<CardFade >
                                    {/* vue du front de la card */}
                                    <Card className={"cardServiceFront  rounded border-"+value.color }>
                                        <p className={"text-center fw-bold fs-4 text-"+value.color} >{t('service.card.'+key+'.title')}</p>
                                        <img className="serviceIcon " src={t('service.card.'+key+'.logo')}></img>
                                        <p className="text-center fw-bold  text-dark">{t('service.card.'+key+'.front')}  </p>
                                    </Card>
                                    {/* vue du back de la card */}
                                    <Card className={"cardServiceFront rounded border-"+value.color } >
                                        <p className="text-center text-dark ">{t('service.card.'+key+'.back')}</p>
                                    </Card>
                                </CardFade>))

            
        }
        return createdCard
    }

    return (


        <Row className='row-cols-md-3  rowCard'>
            {generateCardSolution()}
        </Row>

    )

}

export default ServiceCard