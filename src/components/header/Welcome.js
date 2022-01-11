import React, { useEffect, useState } from 'react'
import { Row, Figure, Col, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import VideoModal from './VideoModal'
import logoPrincipalWhite from '../../assets/images/gaelo-logo-white.svg'
import { findByLabelText } from '@testing-library/react'

const Header = () => {

   const getStyleRow  = (h, w) => {
    return {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: h + 'px',
      width: '100%',
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
    <Container  style={getStyleRow(useWindowDimensions().height, useWindowDimensions().width)} className=''>
      
       <Row className='mt-5  d-flex text-center justify-content-center flex-column align-items-center'>
          <Row className='mt-5 d-flex text-center justify-content-center'>
          <Figure.Image className='w-50' src={logoPrincipalWhite} />
          <p className='text-white fs-4 fw-bold'>{t('header.title')}</p>
          </Row>

       <button className='mt-5 btn-ytb' type='button' onClick={() => setModalShow(true)}>
          <img alt="Presentation Video" src='logo-video.png' variant='primary' className='logoVideo' />
          <p className='m-0'>Presentation</p>
        </button> 
        <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
        </Row>
    </Container>
  )
}

export default Header
