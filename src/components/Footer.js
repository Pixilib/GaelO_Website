
import { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Markdown from 'react-markdown'
import { useTranslation } from 'react-i18next'

import mentionLegales from '../assets/md/mentions-legales.md'
import cgu from '../assets/md/cgu.md'

function Footer(props) {
  const [content, setContent] = useState()
  
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
    <footer className='background text-center'>
      <Col>
        <p>
          <Button variant='link' onClick={() => loadMentionsLegales()}>
            {t('footer.mentions')}
          </Button>
          <Button variant='link' onClick={() => loadCGU()}>
            {t('footer.CGU')}
          </Button>
          <br />
          {t('footer.author')}
        </p>
      </Col>
      <Row>
        <Markdown>
          {content}
        </Markdown>
      </Row>
    </footer>
  )
}

export default Footer
