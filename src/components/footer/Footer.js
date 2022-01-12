
import React, { useEffect, useState } from 'react'
import { Col, Button, } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Modal } from 'react-bootstrap'
import Markdown from "react-markdown";


const Footer = () => {

  const { t } = useTranslation()
  const [url, setUrl] = React.useState(null)

  console.log(url)


  const MarkdownModal = (props) => {

    const [content, setContent] = useState(null)

    useEffect(() => {

      fetch(url).then((response) => response.text()).then((text) =>
        setContent(text)
      )
    }, [props.url]);

    return (
      <Modal
        {...props}
        size='xl'
        fullscreen='md-down'
        aria-labelledby='contained-modal-title-vcenter'
        centered>

        <Modal.Body>
          <Markdown >
            {content}
          </Markdown>
        </Modal.Body>
      </Modal>
    )
  }


  return (
    <footer className='background text-center' >
      <Col  >
        

          <Button onClick={() => setUrl()} className='text-white' variant='link'    >
            {t('footer.mentions')}
          </Button>

          <Button onClick={() => setUrl()} className='text-white' variant='link' >
            {t('footer.CGU')}
          </Button>

          <Button className='text-white' variant='link'>

          </Button>

          <MarkdownModal show={url !=null} onHide={() => setUrl(null)} />
          <br />
          {t('footer.author')}
        

      </Col>

    </footer>
  )
}

export default Footer
