import { useTranslation } from 'react-i18next'
import { Row, Col, Container } from 'react-bootstrap'
import fr from '../../lang/fr.json'
import KeyFactorCard from './KeyFactorCard'

const KeyFactorSuccess = () => {
  const { t } = useTranslation()

  const generateCardOurViews = () => {

    let createdCard = []

    for (const [key] of Object.entries(fr.card)) {

      createdCard.push((
        <Col className='d-flex justify-content-center mt-2  ' >
          <KeyFactorCard imageUrl={t('card.' + key + '.icon')}
            textBack={t('card.' + key + '.definition')}
            textFront={t('card.' + key + '.keyword')} />
        </Col>
      ))
    }

    let finalComponent = []

    for (let i = 0; i < createdCard.length; i += 3) {
      finalComponent.push([<Row sm={3} className='  d-flex justify-content-center ' >{[createdCard[i], createdCard[i + 1], createdCard[i + 2]]}</Row>])
    }

    return finalComponent
  }


  return (
    <Container >
      <h2 className='text-center'>{t('ourviews.subtitle')}</h2>
      <Row className=' pt-5 '>
        {generateCardOurViews()}
      </Row>
    </Container>
  )
}

export default KeyFactorSuccess 
