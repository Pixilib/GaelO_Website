import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container, Row } from "react-bootstrap";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { Language } from "../enums/Language";
import translationEN from "../lang/en.json";
import translationFR from "../lang/fr.json";

import Header from "./header/Header";
import Welcome from "./header/Welcome";
import OurViewRoot from "./ourviews/OurViewRoot";
import SolutionRoot from "./solution/SolutionRoot";
import ServiceRoot from "./services/ServiceRoot";
import ExpertiseRoot from "./expertise/ExpertiseRoot";
import Partner from "./partner/Partner";
import Ourteam from "./team/OurTeam";
import Footer from "./footer/Footer";
import Contact from "./contact/Contact";

import "bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import "../assets/css/gaelo.css";

const defaultLanguage = Language.FR;

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage,

    keySeparator: ".", // to support nested translations

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

function App() {
  const [isScrolled, setScrolled] = useState(false);

  let refs = useRef([]);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const location = useLocation();

  React.useEffect(() => {
    // runs on location, i.e. route, change
    switch (location.pathname) {
      case "/":
        refs.current[0].scrollIntoView();
        break;

      case "/ourviews":
        refs.current[1].scrollIntoView();
        break;

      case "/solution":
        refs.current[2].scrollIntoView();
        break;

      case "/service":
        refs.current[3].scrollIntoView();
        break;

      case "/expertise":
        refs.current[4].scrollIntoView();
        break;

      case "/ourteam":
        refs.current[5].scrollIntoView();
        break;

      case "/contact":
        refs.current[6].scrollIntoView();
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <>
      <Header scrolled={isScrolled} />
      <Container fluid className="background">
        <Row ref={(ref) => (refs.current[0] = ref)}>
          <Welcome />
        </Row>
      </Container>
      <Container fluid>
        <Row ref={(ref) => (refs.current[1] = ref)}>
          <OurViewRoot />
        </Row>
        <Row className="bg-light" ref={(ref) => (refs.current[2] = ref)}>
          <SolutionRoot />
        </Row>
        <Row ref={(ref) => (refs.current[3] = ref)}>
          <ServiceRoot />
        </Row>
        <Row
          className="expertiseStyle bg-light"
          ref={(ref) => (refs.current[4] = ref)}
        >
          <ExpertiseRoot />
        </Row>
        <Row
          hidden={true}
          className="bg-light p-5"
          ref={(ref) => (refs.current[5] = ref)}
        >
          <Ourteam />
        </Row>
        <Row className="p-1">
          <Partner />
        </Row>
        <Row className="background" ref={(ref) => (refs.current[6] = ref)}>
          <Contact />
        </Row>
      </Container>
      <Footer fluid className="background" />
    </>
  );
}

export default App;
