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
    <Row id='contact' className='bg-light p-5 text-center align-items-center border-top' style={getStyleContact()}>
      <Col className='text-center align-items-center w-50'>
        <h3>{t('contact.title')}</h3>
        <p>{t('contact.body')}</p>
        <a href={'mailto:' + t('contact.mail')}>{t('contact.mail')}</a>
        <p>{t('contact.source')} <a href='https://github.com/pixilib/GaelO'>https://github.com/pixilib/GaelO</a></p>
      </Col>
    </Row>
  )
}

export default Contact
