import React, { Fragment } from 'react'

import { Container, Row } from 'react-bootstrap'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import Header from './components/header/Header.js'
import Welcome from './components/header/Welcome.js'
import OurViews from './components/ourviews/Ourviews.js'
import CreateCard from './components/ourviews/CreateCard.js'
import Study from './components/solution/Study.js'
import Role from './components/solution/Role.js'
import Features from './components/Features.js'
import Video from './components/Video.js'
import Footer from './components/Footer.js'
import About from './components/FAQ.js'
import Contact from './components/Contact.js'
import { Language } from './enums/Language'
import translationEN from './lang/en.json'
import translationFR from './lang/fr.json'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

import './assets/css/gaelo.css'
import { BrowserRouter } from 'react-router-dom'

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
          <OurViews />
        </Row>
        <Row>
          <CreateCard />
        </Row>
        <Row>
          <Role />
        </Row>
        <Study />
        <Row />
        <Row>
          <Features />
        </Row>
        <Row>
          <Video />
        </Row>
        <Row>
          <About />
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
