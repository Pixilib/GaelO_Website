import { useTranslation } from 'react-i18next'
import { Row, Col } from 'react-bootstrap'

import fr from '../../lang/fr.json'
import OurViewsCard from './OurViewsCard'

const CreateCardOurViews = (props) => {
  const { t } = useTranslation()

  const generateCardOurViews = () => {
    const ourViewNumber = [...Array(fr.card.keyword.length).keys()]

    const componentArray = ourViewNumber.map((item) => {
      return (
        <Col>
          <OurViewsCard imageUrl={t('card.icon.' + item)} textBack={t('card.definition.' + item)} textFront={t('card.keyword.' + item)} />
        </Col>
      )
    })
    return componentArray
  }

  return (
    <Row className=' row-cols-md-3  rowCard '>
      {generateCardOurViews()}
    </Row>
  )
}

export default CreateCardOurViews
