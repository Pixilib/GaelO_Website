import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";

const ExpertiseStat = () => {
  const { t } = useTranslation();

  const numberClass = "text-center text-info fs-1 fw-bold  ";
  const textClass = "d-flex justify-content-center fw-bold fs-5 text-center";
  return (
    <Fragment>
      <Col xs={4} md={2}>
        <Row className="d-flex justify-content-center text-info fs-1 fw-bold">
          {t("expertise.satisfaction.value")}
        </Row>
        <Row className={textClass}>{t("expertise.satisfaction.text")}</Row>
      </Col>

      <Col xs={4} md={2}>
        <Row className={numberClass}>
          <CountUp
            delay={1}
            redraw={true}
            className="textChiffre"
            end={t("expertise.trials.value")}
            duration="2"
          />
        </Row>
        <Row className={textClass}>{t("expertise.trials.text")}</Row>
      </Col>

      <Col xs={4} md={2}>
        <Row className={numberClass}>
          <CountUp
            delay={1}
            redraw={true}
            end={t("expertise.dicom.value")}
            duration="2"
          />
        </Row>
        <Row className={textClass}>{t("expertise.dicom.text")}</Row>
      </Col>

      <Col xs={4} md={2}>
        <Row className={numberClass}>
          <CountUp
            delay={1}
            redraw={true}
            end={t("expertise.center.value")}
            duration="2"
          />
        </Row>
        <Row className={textClass}>{t("expertise.center.text")}</Row>
      </Col>

      <Col xs={4} md={2}>
        <Row className={numberClass}>
          <CountUp
            delay={1}
            redraw={true}
            end={t("expertise.user.value")}
            duration="2"
          />
        </Row>
        <Row className={textClass}>{t("expertise.user.text")}</Row>
      </Col>
    </Fragment>
  );
};

export default ExpertiseStat;
