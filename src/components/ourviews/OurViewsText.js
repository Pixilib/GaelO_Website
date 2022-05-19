import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";

const OurViewsText = () => {
  const { t } = useTranslation();

  return (
    <Container
      id="ourviews"
      className="ourView"
      style={{ backgroundImage: `url("backgroundISTOCK_small.jpg")` }}
    >
      <h1 className="d-flex justify-content-center">{t("ourviews.title")}</h1>

      <Row className="fw-bold h-75 d-flex align-items-center ">
        <Col md="5" className="">
          {t("ourviews.body1")}
          <br />
          <br />
          {t("ourviews.body2")}
        </Col>
      </Row>
    </Container>
  );
};

export default OurViewsText;
