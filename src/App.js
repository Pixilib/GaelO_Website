import React from 'react'
import { BrowserRouter } from 'react-router-dom'

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
import Footer from './components/Footer'
import Contact from './components/Contact'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

import './assets/css/gaelo.css'
import ServiceRoot from './components/services/ServiceRoot'



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
  return (
    <>
      <BrowserRouter>

        <Header />
        <Container fluid className='background'>
          <Welcome id='home' />
        </Container>
        <Container fluid>
          <Row>
            <OurViewRoot />
          </Row>
          <Row>
            <SolutionRoot/>
          </Row>
          <Row>
            <ServiceRoot/>
          </Row>
          <Row>
            <Contact />
          </Row>
        </Container>
        <Footer fluid className='background' />

      </BrowserRouter>
    </>
  )
}

export default App
