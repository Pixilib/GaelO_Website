import React from 'react'
import { Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import ModalForm from './ModalForm'

const Contact = () => {
  const { t } = useTranslation()
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <Row id='contact' className='p-5 text-center align-items-center' >
      <ModalForm show={modalShow} onHide={() => setModalShow(false)} />

      <h1>{t('contact.title')}</h1>
      <a href={'mailto:' + t('contact.mail')}>{t('contact.mail')}</a>
      <div className="border border-dark">
        <iframe title="Subscribe" height='700' width='100%' src="https://cdn.forms-content.sg-form.com/484b213d-6ca2-11ec-9aca-86faac9e4b7c" />
      </div>
    </Row>

  )
}

export default Contact
