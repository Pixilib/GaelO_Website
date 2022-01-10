
import React, { useEffect } from 'react'
import { Col, Button,  } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import MarkdownModal from './MarkdownModal'


const  Footer=(props)=>{
  


  
  const { t } = useTranslation()





  return (
    <footer className='background text-center' >
      <Col  >
        <p>
        
          <Button url={"ml"} className='text-white' variant='link'    >
            {t('footer.mentions')}
          </Button>
          <Button url={"cgu"} className='text-white' variant='link' >
            {t('footer.CGU')}
          </Button>
          
          <br />
          {t('footer.author')}
        </p>

      </Col>

    </footer>
  )
}

export default Footer
