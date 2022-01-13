import { Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import logo from '../../lang/logo.json'

const Partner = () => {

    const { t } = useTranslation()

    const generatePartner = () => {

        const componentArray = logo.partner.logo.map((url) => {
            return (
                <Col className="d-flex justify-content-center" sm={2}>
                    <img alt="partner logo" className="w-75 h-75" src={url}></img>
                </Col>
            )
        })
        return componentArray
    }


    return (
        <Row>
            <h1 className="text-center">{t('partner.title')}</h1>
            <Row className="d-flex mt-3 justify-content-center" >{generatePartner()}</Row>
        </Row>
    )
}

export default Partner