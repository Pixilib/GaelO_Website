import { useTranslation } from 'react-i18next'
import { Col, Row, Container } from 'react-bootstrap'

const OurViewsText = () => {

    const { t } = useTranslation()

    return (

        <Container id='ourviews' className='styleOurViews'>
            <h1 className="text-center  ">{t('ourviews.title')}</h1>
            <Row className=' d-flex justify-content-center'>
                <Col className='coltext'>
                    <p >{t('ourviews.body1')}</p>
                    <p >{t('ourviews.body2')}</p>
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default OurViewsText