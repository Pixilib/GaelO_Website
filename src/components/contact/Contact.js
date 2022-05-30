import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import logoMail from "../../assets/images/mail.svg";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Container className="pt-5 mt-5 mb-5 pb-5">
      <Row id="contact" className="text-center ">
        <h2 className="text-white">{t("contact.title")}</h2>
        <Col className="d-flex flex-column align-items-center">
          <img className="logoMail" alt="email" src={logoMail} />
          <a className="text-white fs-4" href={"mailto:" + t("contact.mail")}>
            {" "}
            {t("contact.mail")}
          </a>
        </Col>
        <div className="">
          <iframe
            title="Subscribe"
            height="700"
            width="100%"
            src="https://cdn.forms-content.sg-form.com/484b213d-6ca2-11ec-9aca-86faac9e4b7c"
          />
        </div>
      </Row>
    </Container>
  );
};

export default Contact;
