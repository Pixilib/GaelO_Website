import React, { Fragment } from 'react'

import { Container} from 'react-bootstrap';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import Header from './components/Header.js';
import Gaelo from './components/Gaelo.js';
import Work from './components/Work.js';
import Features from './components/Features.js';
import Video from './components/Video.js';
import Footer from './components/Footer.js';
import About from './components/FAQ.js';
import Contact from './components/Contact.js';
import License from './components/License.js';
import ourViews from './components/Ourviews.js';
import { Language } from "./enums/Language";
import translationEN from './lang/en.json';
import translationFR from './lang/fr.json';
import NavBar from './components/Navbar.js';
import OurViews from './components/Ourviews.js';
import CreateCard from './components/CreateCard.js';

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
 
i18next
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

  
  
    return (
        <Fragment>
            <NavBar />
            <Container fluid className="background">
                <Header  />
                <OurViews />
                <CreateCard/>
                <Work />
                <Features />
                <Video />
                <About />
                <Contact />
                <Footer />
            </Container>
        </Fragment>
    )
}

export default App;