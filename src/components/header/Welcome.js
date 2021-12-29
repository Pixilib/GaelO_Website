import React, { useEffect, useState } from 'react'

import { Row, Figure, Col, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import VideoModal from './VideoModal'
import logoPrincipalWhite from '../../assets/images/gaelo-logo-white.svg'

const Header = () => {

   const getStyleRow  = (h, w) => {
    return {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: h + 'px',
      width: '100%'
    } 
  }

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height
    }
  }
  
  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  
    useEffect(() => {
      function handleResize () {
        setWindowDimensions(getWindowDimensions())
      }
  
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
    return windowDimensions
  }

  const { t } = useTranslation()

  const [modalShow, setModalShow] = React.useState(false)

  return (
    <Container id='home' style={getStyleRow(useWindowDimensions().height, useWindowDimensions().width)} className='text-center styleContainer'>
      <Row>
        <Col>
          <Figure.Image className='text-center logoPrincipal' src={logoPrincipalWhite} />
          <p className='styleTexte'>{t('header.title')}</p>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <button className='btn-ytb' type='button' onClick={() => setModalShow(true)}>
          <img src='logo-video.png' variant='primary' className='logoVideo' />
          <p className='m-0'>Présentation</p>
        </button>
        <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
      </Row>
    </Container>
  )
}

export default Header
