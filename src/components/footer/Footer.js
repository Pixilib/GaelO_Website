
import React, { useEffect, useState } from 'react'
import { Col, Button, } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Modal } from 'react-bootstrap'
import Markdown from "react-markdown";
import CGU from '../../assets/md/cgu.md'
import ML from '../../assets/md/mentions-legales.md'

const Footer = () => {

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
  const { t } = useTranslation()
  const [modalShow, setModalShow] = React.useState(false)
  const [url , setUrl]=React.useState(null)
 console.log(url)
  const handleClick=(url)=>{
    setModalShow(true)
    setUrl(url)
  }
 

  return (
    <footer className='background text-center' >
      <Col  >
        <p>

          <Button  onClick={()=> handleClick(ML)} className='text-white' variant='link'    >
            {t('footer.mentions')}
          </Button>
          <Button  onClick={() => handleClick(CGU)} className='text-white' variant='link' >
            {t('footer.CGU')}
          </Button>
          <MarkdownModal show={modalShow}  onHide={() => setModalShow(false)} />
          <br />
          {t('footer.author')}
        </p>

      </Col>

    </footer>
  )
}

export default Footer
