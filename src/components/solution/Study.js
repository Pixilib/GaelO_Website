import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import StudyCard from "./StudyCard";

const Study = () => {
  const { t } = useTranslation();

  const [currentData, setCurrentData] = React.useState(null);

  const Study = "study";
  const NPatient = "nPatient";
  const NVisite = "nVisite";
  const NReviews = "nReviews";
  const Conclusion = "conclusion";

  return (
    <Container className="studySeparator  pb-5">
      <Row>
        <Col
          md="3"
          className="d-flex justify-content-center align-items-center"
        >
          <h2> {t("study.subtitle")} </h2>
        </Col>
        <Col>
          <Row>
            <div
              className="position-relative mb-3"
              onMouseLeave={() => setCurrentData(null)}
            >
              <img className="w-100" src={t("study.img")} alt="data model" />
              <div
                onMouseEnter={() => setCurrentData(Study)}
                style={{
                  left: "0%",
                  top: "0%",
                  width: "16%",
                  borderRadius: "50%",
                }}
                className="studyOverflow"
              />
              <div
                onMouseEnter={() => setCurrentData(NPatient)}
                style={{
                  left: "16%",
                  top: "0%",
                  width: "18.5%",
                }}
                className="studyOverflow"
              />
              <div
                onMouseEnter={() => setCurrentData(NVisite)}
                style={{
                  left: "33.5%",
                  top: "0%",
                  width: "23%",
                }}
                className="studyOverflow"
              />
              <div
                onMouseEnter={() => setCurrentData(NReviews)}
                style={{
                  left: "55%",
                  top: "0%",
                  width: "26%",
                }}
                className="studyOverflow"
              />
              <div
                onMouseEnter={() => setCurrentData(Conclusion)}
                style={{
                  left: "77%",
                  top: "0%",
                  width: "23%",
                }}
                className="studyOverflow"
              />
            </div>
          </Row>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <StudyCard level={currentData} />
      </Row>
    </Container>
  );
};
export default Study;
