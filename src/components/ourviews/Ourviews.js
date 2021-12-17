
import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import CreateCardOurViews from './CreateCard'

const OurViews = (props) => {
  const { t } = useTranslation()
  return (
    <Container className='styleOurViews'>
      <Row>
        <Col className=''>
          <h1>{t('ourviews.title')}</h1>
          <p className="fw-bold">{t('ourviews.body1')}</p>
          <p className="fw-bold">{t('ourviews.body2')}</p>
        </Col>
      </Row>
      <Row>
        <h2>{t('ourviews.subtitle')}</h2>
      </Row>

    </Container>
  )
}

export default OurViews
