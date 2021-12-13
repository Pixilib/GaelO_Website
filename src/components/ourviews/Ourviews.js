
import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const OurViews = (props) => {
  const { t } = useTranslation()
  return (
    <Container className='styleOurViews'>
      <Row className='BckImage'>
        <Col className='col-md-3'>
          <h1>{t('ourviews.title')}</h1>
          <p>{t('ourviews.body1')}</p>
          <p>{t('ourviews.body2')}</p>
        </Col>
      </Row>
      <Row>
        <h2>{t('ourviews.subtitle')}</h2>
      </Row>

    </Container>
  )
}

export default OurViews
