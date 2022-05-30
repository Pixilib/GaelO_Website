import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import logoLysa from "../../../static/partners/Lysa.svg";
import logoLysarc from "../../../static/partners/Lysarc.svg";
import logoCarnot from "../../../static/partners/carnot.svg";
import logoOvh from "../../../static/partners/ovh.svg";

const partners = [
  {
    name: "Lysa",
    logo: logoLysa,
  },
  {
    name: "Lysarc",
    logo: logoLysarc,
  },
  {
    name: "Carnot",
    logo: logoCarnot,
  },
  {
    name: "Ovh",
    logo: logoOvh,
  },
];

const Partner = () => {
  const { t } = useTranslation();

  const generatePartner = () => {
    const componentArray = partners.map((partner, i) => {
      return (
        <Col
          key={i}
          className="d-flex justify-content-center align-items-center"
          xs={3}
          md={1}
        >
          <div>
            <img alt={partner.name} src={partner.logo} width="100%" />
          </div>
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
