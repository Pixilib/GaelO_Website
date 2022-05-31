import React from "react";

import { useTranslation } from "react-i18next";

import { Row, Col, Container } from "react-bootstrap";
import fr from "../../lang/fr/index.json";
import KeyFactorCard from "./KeyFactorCard";

const KeyFactorSuccess = () => {
  const { t } = useTranslation();

  const generateCardOurViews = () => {
    let createdCard = [];

    for (const [key] of Object.entries(fr.card)) {
      createdCard.push(
        <Col className="d-flex justify-content-center mt-2  ">
          <KeyFactorCard
            imageUrl={t("card." + key + ".icon")}
            textBack={t("card." + key + ".definition")}
            textFront={t("card." + key + ".keyword")}
          />
        </Col>
      );
    }

    let finalComponent = [];

    for (let i = 0; i < createdCard.length; i += 3) {
      finalComponent.push([
        <Row sm={3} key={i} className="  d-flex justify-content-center ">
          {[createdCard[i], createdCard[i + 1], createdCard[i + 2]]}
        </Row>,
      ]);
    }

    return finalComponent;
  };

  return (
    <Container className="pt-5 mt-5 mb-5 pb-5">
      <h2 className="  dark  text-center pb-3">{t("ourviews.subtitle")}</h2>
      <Container>
        <Row className=" pt-2 ">{generateCardOurViews()}</Row>
      </Container>
    </Container>
  );
};

export default KeyFactorSuccess;
