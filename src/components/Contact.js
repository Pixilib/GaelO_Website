import { Row, Col } from '../../node_modules/react-bootstrap'
import { useTranslation } from 'react-i18next'

function getStyleContact () {
  return {
    color: '#353275'

  }
}
function Contact (props) {
  const { t } = useTranslation()

  return (
    <Row id='contact' className='p-5 text-center align-items-center' style={getStyleContact()}>
      <Col className='text-center align-items-center w-50'>
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.body')}</p>
        <a href={'mailto:' + t('contact.mail')}>{t('contact.mail')}</a>
      </Col>
    </Row>
  )
}

export default Contact
