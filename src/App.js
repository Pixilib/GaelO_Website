import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header.js';
import Gaelo from './components/Gaelo.js';
import Work from './components/Work.js';
import Features from './components/Features.js';
import Video from './components/Video.js';
import Footer from './components/Footer.js';
import About from './components/FAQ.js';
import Contact from './components/Contact.js';
import License from './components/License.js';

import { useState } from 'react';
import Lang from "./components/Lang.tsx";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { Language } from "./enums/Language";
import translationEN from './lang/en.json';
import translationFR from './lang/fr.json';

let defaultLanguage = Language.FR;
 
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};
 
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage,
 
    keySeparator: ".",  // to support nested translations
 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
 

function App() {

    const [lang, setLang] = useState('EN');

  
    function changeLanguage(language){
      setLang(language);
      i18n.changeLanguage(language)
    }
  
    return (
        <div>
            <Container fluid>
                <Row>
                    <Container>
                        <Header />
                        <Lang onLanguageChange = {changeLanguage} language = {lang} />
                        <Gaelo />
                        <Work />
                        <Features />
                        <Video />
                        <About />
                        <Contact />
                        <License />
                        <Footer />
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default App;