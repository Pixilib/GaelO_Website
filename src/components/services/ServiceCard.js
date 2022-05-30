import React from "react";

import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import fr from "../../lang/fr/index.json";
import CardFade from "./CardFade";

const ServiceCard = () => {
  const { t } = useTranslation();

  const generateCardSolution = () => {
    let createdCard = [];

    for (const [key, value] of Object.entries(fr.service.card)) {
      createdCard.push(
        <Col className=" d-flex justify-content-center ">
          <CardFade>
            {/* vue du front de la card */}
            <Card className={"cardService center mt-3 border-" + value.color}>
              <p className={"text-center fw-bold fs-4 text-" + value.color}>
                {t("service.card." + key + ".title")}
              </p>
              <img
                alt={key}
                className="serviceIcon"
                src={t("service.card." + key + ".logo")}
              ></img>
              <p className="text-center fw-bold  text-dark">
                {t("service.card." + key + ".front")}{" "}
              </p>
            </Card>
            {/* vue du back de la card */}
            <Card className={"cardService mt-3 border-" + value.color}>
              <p className="text-center text-dark p-3 fw-bold ">
                {t("service.card." + key + ".back")}
              </p>
            </Card>
          </CardFade>
        </Col>
      );
    }

    let finalComponent = [];

    for (let i = 0; i < createdCard.length; i += 3) {
      finalComponent.push([
        <Row sm={3} className="d-flex justify-content-center">
          {" "}
          {[createdCard[i], createdCard[i + 1], createdCard[i + 2]]}{" "}
        </Row>,
      ]);
    }

    return finalComponent;
  };

  return <Row>{generateCardSolution()}</Row>;
};

export default ServiceCard;
