import React from "react";

import { Card, Row } from "react-bootstrap";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import fr from "../../lang/fr/index.json";

const StudyCard = (props) => {
  const { t } = useTranslation();

  const buildComponent = () => {
    if (!props.level) return null;
    let lignesNumber = fr.study.graph[props.level].content.length;

    let bodyArray = [];
    for (let i = 0; i < lignesNumber; i++) {
      bodyArray.push(
        <p>{t("study.graph." + props.level + ".content." + i)}</p>
      );
    }

    return (
      <Row style={{ minHeight: "255px" }}>
        <Card className="mt-4  studyCard">
          <Card.Header className=" border-bottom-0 text-primary fw-bold fs-3 text-center">
            {" "}
            {t("study.graph." + props.level + ".title")}{" "}
          </Card.Header>
          <Card.Body className=" text-dark text-center fst-italic">
            {bodyArray}
          </Card.Body>
        </Card>
      </Row>
    );
  };

  return buildComponent();
};

export default StudyCard;
