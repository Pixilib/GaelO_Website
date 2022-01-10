
import { useState } from 'react'
import { Row, Col, Button, CloseButton } from 'react-bootstrap'
import Markdown from 'react-markdown'
import { useTranslation } from 'react-i18next'

import mentionLegales from '../assets/md/mentions-legales.md'
import cgu from '../assets/md/cgu.md'

function Footer(props) {
  const [content, setContent] = useState(null)
 

  
  const { t } = useTranslation()

  const loadMentionsLegales = () => {
    fetch(mentionLegales).then((response) => response.text()).then((text) => {
      setContent(text)
    })
  }

  const loadCGU = () => {
    fetch(cgu).then((response) => response.text()).then((text) => {
      setContent(text)
    })
  }



  return (
    <footer className='background text-center'  onMouseLeave={() => setContent(null)}>
      <Col  >
        <p>
        
          <Button className='text-white' variant='link'  onClick={() => loadMentionsLegales()}   >
            {t('footer.mentions')}
          </Button>
          <Button className='text-white' variant='link' onClick={() => loadCGU()}>
            {t('footer.CGU')}
          </Button>
          <br />
          {t('footer.author')}
        </p>

      </Col>
      <Row className="mw-100">
     
        <Markdown   >
          {content}
        </Markdown>



      </Row>
    </footer>
  )
}

export default Footer
