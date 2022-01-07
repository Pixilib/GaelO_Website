import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import ModalForm from './ModalForm'

function getStyleContact() {
  return {
    color: '#353275'

  }
}
const Contact = (props) => {
  const { t } = useTranslation()
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <Row id='contact' className='p-5 text-center align-items-center' style={getStyleContact()}>
      <Col className='text-center align-items-center w-50'>
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.body')}</p>
        <a href={'mailto:' + t('contact.mail')}>{t('contact.mail')}</a>
        <Row>
          <button type='button' onClick={() => setModalShow(true)}>
            <p className='m-0'>Mailing</p>
          </button>
          <ModalForm show={modalShow} onHide={() => setModalShow(false)} />
        </Row>
      </Col>
    </Row>
  )
}

export default Contact
