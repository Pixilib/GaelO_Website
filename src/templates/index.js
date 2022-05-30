import React, { useRef, useState } from "react";
import { graphql } from "gatsby";

import { Container, Row } from "react-bootstrap";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { Language } from "../enums/Language";
import translationEN from "../lang/en/index.json";
import translationFR from "../lang/fr/index.json";

import Layout from "../components/layout/Layout";
import Welcome from "../components/header/Welcome";
import OurViewRoot from "../components/ourviews/OurViewRoot";
import SolutionRoot from "../components/solution/SolutionRoot";
import ServiceRoot from "../components/services/ServiceRoot";
import ExpertiseRoot from "../components/expertise/ExpertiseRoot";
import Partner from "../components/partner/Partner";
// import Ourteam fr.o/componentsm "./team/OurTeam";
import Contact from "../components/contact/Contact";

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

const IndexPage = ({ pageContext }) => {
  let refs = useRef([]);

  i18next
    .use(LanguageDetector)
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
      <Layout pageContext={pageContext}>
        <Container fluid className="background">
          <Row ref={(ref) => (refs.current[0] = ref)}>
            <Container>
              <Welcome />
            </Container>
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
          {/* <Row
          hidden={true}
          className="bg-light p-5"
          ref={(ref) => (refs.current[5] = ref)}
          >
          <Ourteam />
        </Row> */}
          <Row className="p-1">
            <Partner />
          </Row>
          <Row className="background" ref={(ref) => (refs.current[6] = ref)}>
            <Contact />
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default IndexPage;

// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(
//       filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }
//     ) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;
