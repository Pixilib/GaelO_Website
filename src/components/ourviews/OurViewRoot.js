
import { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import KeyFactorSuccess from './KeyFactorSuccess'

const OurViewRoot = () => {
    const { t } = useTranslation()
    return (
        <Fragment>
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
            <Container>
                    <KeyFactorSuccess />
            </Container>
        </Fragment>
    )
}

export default OurViewRoot