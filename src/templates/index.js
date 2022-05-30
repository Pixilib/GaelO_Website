import React, { useRef, useState } from "react";
import { graphql } from "gatsby";

import { Container, Row } from "react-bootstrap";

import Layout from "../components/layout/Layout";
import Welcome from "../components/header/Welcome";
import OurViewRoot from "../components/ourviews/OurViewRoot";
import SolutionRoot from "../components/solution/SolutionRoot";
import ServiceRoot from "../components/services/ServiceRoot";
import ExpertiseRoot from "../components/expertise/ExpertiseRoot";
import Partner from "../components/partner/Partner";
// import Ourteam fr.o/componentsm "./team/OurTeam";
import Contact from "../components/contact/Contact";

const IndexPage = ({ pageContext }) => {
  let refs = useRef([]);

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
