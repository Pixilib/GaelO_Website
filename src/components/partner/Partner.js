import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import logo from "../../lang/logo.json";

const Partner = () => {
  const { t } = useTranslation();

  const generatePartner = () => {
    const componentArray = logo.partner.logo.map((url) => {
      return (
        <Col className="d-flex justify-content-center" sm={2}>
          <img alt="partner" className="w-75 h-75" src={url}></img>
        </Col>
      );
    });
    return componentArray;
  };

  return (
    <Container className="pt-5 mt-5 mb-5 pb-5">
      <Row>
        <h2 className="dark pb-3  text-center">{t("partner.title")}</h2>
        <Container>
          <Row className="d-flex mt-3 justify-content-center">
            {generatePartner()}
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default Partner;
