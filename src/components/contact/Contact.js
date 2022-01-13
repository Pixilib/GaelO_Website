import React from 'react'
import { Row , Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import logoMail from '../../assets/images/mail.svg'


const Contact = () => {
  const { t } = useTranslation()

  return (
    <Row id='contact' className='  p-5  text-center ' >
      <h1 className='text-white'>{t('contact.title')}</h1>
      < Col className='d-flex flex-column align-items-center' >
          
            <img className='logoMail' alt='LogoMail' src={logoMail}/>
            <a className='text-white fs-4' href={'mailto:' + t('contact.mail')}>  {t('contact.mail')}</a>
          
      </Col>
      <div className="">
        <iframe title="Subscribe" height='700' width='100%' src="https://cdn.forms-content.sg-form.com/484b213d-6ca2-11ec-9aca-86faac9e4b7c" />
      </div>
    </Row>

  )
}

export default Contact

