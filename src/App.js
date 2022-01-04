import React, { useRef, useState } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'

import { Container, Row } from 'react-bootstrap'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { Language } from './enums/Language'
import translationEN from './lang/en.json'
import translationFR from './lang/fr.json'

import Header from './components/header/Header'
import Welcome from './components/header/Welcome'
import OurViewRoot from './components/ourviews/OurViewRoot'
import SolutionRoot from './components/solution/SolutionRoot'
import ServiceRoot from './components/services/ServiceRoot'
import ExpertiseRoot from './components/expertise/ExpertiseRoot'
import Partner from './components/Partner'
import Ourteam from './components/team/OurTeam'
import Footer from './components/Footer'
import Contact from './components/contact/Contact'

import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import useIntersection from './useIntersection'
import './assets/css/gaelo.css'





const defaultLanguage = Language.FR

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
}

i18next
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage,

    keySeparator: '.', // to support nested translations

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

function App() {

  const [isScrolled, setScrolled] = useState(false)

  let HomeRef = useRef()
  let OurViewsRef = useRef()
  let SolutionRef = useRef()
  let ServiceRef = useRef()
  let ExpertiseRef = useRef()
  let OurteamRef = useRef()
  let ContactRef = useRef()

  const NavBarTransparentToWhite = (event) => {
    if (window.pageYOffset >= 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  window.addEventListener('scroll', NavBarTransparentToWhite)

  const location = useLocation()

  React.useEffect(() => {
    // runs on location, i.e. route, change
    switch (location.pathname) {
      case "" : HomeRef.scrollIntoView()
      break;
      
      case "/ourviews": OurViewsRef.scrollIntoView()
        break;

      case "/solution": SolutionRef.scrollIntoView()
        break;

      case "/service": ServiceRef.scrollIntoView()
        break;

      case "/expertise": ExpertiseRef.scrollIntoView()
        break;

      case "/team": OurteamRef.scrollIntoView()
        break;

      case "/contact": ContactRef.scrollIntoView()
        break;

    }
    console.log(location.pathname)
    console.log('handle route change here', location)
  }, [location])


  console.log()
  return (
    <>

      <Header scrolled={isScrolled} />
      <Container fluid className='background'>
        <Row ref={HomeRef} >
          <Welcome />
        </Row>
      </Container>
      <Container fluid>
        <Row ref={OurViewsRef} >
          <OurViewRoot />
        </Row>
        <Row ref={SolutionRef} >
          <SolutionRoot />
        </Row>
        <Row ref={ServiceRef} >
          <ServiceRoot />
        </Row>
        <Row ref={ExpertiseRef} >
          <ExpertiseRoot />
        </Row>
        <Row>
          <Partner />
        </Row>
        <Row ref={OurteamRef}>
          <Ourteam />
        </Row>
        <Row ref={ContactRef}>
          <Contact />
        </Row>
      </Container>
      <Footer fluid className='background' />

    </>
  )
}

export default App
