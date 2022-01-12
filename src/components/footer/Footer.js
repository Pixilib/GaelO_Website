
import React from 'react'
import { Col, Button, } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import MarkdownModal from './MarkdownModal'


const Footer = () => {

  const { t } = useTranslation()
  const [url, setUrl] = React.useState(null)
console.log(url + '  ceci est l url')
console.log(setUrl)




  return (
    <footer className='background text-center' >
      <Col  >
            
          <Button onClick={() => setUrl("mkmention")} className='text-white' variant='link'    >
            {t('footer.mentions')}
          </Button>

          <Button onClick={() => setUrl("mkCGU")} className='text-white' variant='link' >
            {t('footer.CGU')}
          </Button>

          <Button onClick={()=>setUrl("mkdata")} className='text-white' variant='link'>
            {t('footer.data')}
          </Button>

          <MarkdownModal url={url} show={url !=null}  onHide={() => setUrl(null)} />
          <br />
          {t('footer.author')}
        

      </Col>

    </footer>
  )
}

export default Footer
