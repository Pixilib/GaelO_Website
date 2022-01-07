import { useTranslation } from 'react-i18next'
import { Col, Row, Container } from 'react-bootstrap'

const OurViewsText = () => {

    const { t } = useTranslation()

    return (
        <Container className="ourView d-flex" >
            <Col md="5" className="d-flex align-items-center">
                {t('ourviews.body1')}<br/>
                {t('ourviews.body2')}
            </Col>
        </Container>
    )
}

export default OurViewsText