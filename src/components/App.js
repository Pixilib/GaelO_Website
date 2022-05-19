import React, { useRef, useState } from "react";

import { Container, Row } from "react-bootstrap";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { Language } from "../enums/Language";
import translationEN from "../lang/en.json";
import translationFR from "../lang/fr.json";

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

  const isBrowser = typeof window !== "undefined";

  if (isBrowser) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }
  return (
    <>
      <Container fluid className="background">
        <Row ref={(ref) => (refs.current[0] = ref)}>
          <h2>Gaelo</h2>
        </Row>
      </Container>
    </>
  );
}

export default App;
