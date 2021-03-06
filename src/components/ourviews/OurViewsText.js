import React from "react";
import { useTranslation } from "react-i18next";

import { Col, Container, Row } from "react-bootstrap";
import bckgImage from "../../assets/images/backgroundISTOCK_small.jpg";
const OurViewsText = () => {
  const { t } = useTranslation();

  return (
    <Container
      id="ourviews"
      className="ourView "
      style={{ backgroundImage: `url(${bckgImage})` }}
    >
      <Container className="pt-5 mt-5 mb-5 pb-5">
        <h2 className="dark d-flex justify-content-center pb-3">
          {t("ourviews.title")}
        </h2>

        <img src={bckgImage} alt="Gaelo" />

        <Row className="fw-bold h-75 d-flex align-items-center ">
          <Col md="5" className="">
            {t("ourviews.body1")}
            <br />
            <br />
            {t("ourviews.body2")}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default OurViewsText;
