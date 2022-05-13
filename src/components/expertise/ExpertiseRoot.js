import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import ExpertiseStat from "./ExpertiseStat";
import ExpertiseTestimonial from "./ExpertiseTestimonial";
import logoQuote from "../../assets/images/quote.svg";

const ExpertiseRoot = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h1 className="text-center">{t("expertise.title")}</h1>
      <Row className="pb-5 pt-5">
        <ExpertiseStat />
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <img src={logoQuote} alt="quote" className="logoQuote" />

          <ExpertiseTestimonial />
        </Col>
      </Row>
    </Container>
  );
};

export default ExpertiseRoot;
