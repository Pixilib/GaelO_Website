import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import ReactPlayer from "react-player";
import ServiceCard from "./ServiceCard";

const ServiceRoot = () => {
  const { t } = useTranslation();

  return (
    <Container id="service" className="pt-5 mt-5 mb-5 pb-5">
      <h2 className="pb-3 dark text-center">{t("service.title")} </h2>
      <Container>
        <Row className=" d-flex justify-content-center align-items-center">
          <Col xl={4}>
            <Row className="d-flex justify-content-center align-items-center">
              <img
                alt={"Pixilib Logo"}
                style={{ "max-width": "250px" }}
                src={t("pixilib.jpg")}
              ></img>
            </Row>
            <Row className="d-flex justify-content-center align-items-center fw-bold text-info fs-5 text-center pb-5">
              {t("service.pixilib.intro")}
            </Row>
          </Col>
          <Col
            xl={8}
            className=" servicePlayer d-flex justify-content-center align-items-right"
          >
            <ReactPlayer
              height="100%"
              controls="true"
              url={t("service.pixilib.video")}
            />
          </Col>
        </Row>
        <Row className="mt-5 d-flex justify-content-center align-items-center">
          <Col xl={4} className="fw-bold">
            <p>{t("service.intro")}</p>
            <p>{t("service.content")}</p>
          </Col>
          <Col xl={8}>
            <ServiceCard />
          </Col>
        </Row>
        <Row className="mt-5 serviceSeparator">
          <Col
            sm={3}
            className="d-flex justify-content-center align-items-center "
          >
            <h3>Service Workflow </h3>
          </Col>
          <Col>
            <img alt="service workflow" src={t("service.img")}></img>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ServiceRoot;
