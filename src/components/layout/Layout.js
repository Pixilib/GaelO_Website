import React, { useRef, useState } from "react";

import Seo from "../seo/Seo";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../lang/en/index.json";
import translationFR from "../../lang/fr/index.json";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/gaelo.css";

function Layout({ children, seo, pageContext }) {
  const isBrowser = typeof window !== "undefined";

  const [isScrolled, setScrolled] = useState(false);
  if (isBrowser) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }

  const resources = {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationFR,
    },
  };

  i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: pageContext.locale,

      keySeparator: ".", // to support nested translations

      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });

  return (
    <>
      <Seo seo={seo} pageContext={pageContext} />
      <Header scrolled={isScrolled} pageContext={pageContext} />
      {children}
      <Footer fluid className="background" />
    </>
  );
}

export default Layout;
