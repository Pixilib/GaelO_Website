import React, { useEffect, useState } from "react";
import { Row, Figure, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import VideoModal from "./VideoModal";
import logoPrincipalWhite from "../../assets/images/gaelo-logo-white.svg";
import youtubePlay from "../../assets/images/youtube_play.svg";

const Header = () => {
  const { t } = useTranslation();

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container className="  d-flex text-center justify-content-center flex-column align-items-center mt-5 pt-3 mb-5">
      <Figure.Image className="w-50" src={logoPrincipalWhite} alt="GaelO" />
      <h1 className="text-white fs-4 fw-bold" style={{ marginTop: "5px" }}>
        {t("header.title")}
      </h1>

      <Row className="pt-3">
        <button
          className="btn-ytb"
          type="button"
          onClick={() => setModalShow(true)}
        >
          <img
            alt="video"
            src={youtubePlay}
            variant="primary"
            className="logoVideo"
          />
          <p className="m-0">{t("header.button")}</p>
        </button>
        <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
      </Row>
    </Container>
  );
};

export default Header;
