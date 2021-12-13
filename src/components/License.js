import { Row, Col } from '../../node_modules/react-bootstrap'
import { useTranslation } from 'react-i18next'

function getStyleLicense () {
  return {
    color: '#353275'

  }
}
function License (props) {
  const { t } = useTranslation()

  return (
    <Row id='license' className='bg-light p-5 text-center align-items-center border-top' style={getStyleLicense()}>
      <Col className='text-center align-items-center w-50'>
        <h3>{t('license.title')}</h3>
        <p>{t('license.body')}</p>
      </Col>
      <h4>{t('contact.subtitle')}</h4>
      <p>
        <p>{t('contact.contributors.0')}</p>
        <p>{t('contact.contributors.1')}</p>
      </p>
    </Row>
  )
}

export default License
