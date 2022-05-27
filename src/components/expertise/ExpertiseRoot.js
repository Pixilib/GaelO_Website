import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

import ExpertiseStat from "./ExpertiseStat";
import ExpertiseTestimonial from "./ExpertiseTestimonial";
import logoQuote from "../../assets/images/quote.svg";

const ExpertiseRoot = () => {
  const { t } = useTranslation();
  return (
    <Container id="expertise" className="pt-5 mt-5 mb-5 pb-5">
      <h2 className="pb-3 dark text-center">{t("expertise.title")}</h2>
      <Container>
        <Row className="pb-2 pt-2 justify-content-center">
          <ExpertiseStat />
        </Row>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <img src={logoQuote} alt="quote" className="logoQuote" />

            <ExpertiseTestimonial />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ExpertiseRoot;
