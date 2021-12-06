import { Row, Figure, Col, Container, Button, Modal,  } from "../../node_modules/react-bootstrap";
import useWindowDimensions from "../Fonctions/getDimension.js";

import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import VideoModal from "./VideoModal";

function getStyleRow(h, w) {

    return {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: h + 'px',
        width: "100%",
        //filter: "contrast(80%)"
    }

}



const Header = (props) => {

    const { t } = useTranslation();

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container style={getStyleRow(useWindowDimensions().height, useWindowDimensions().width)} id="styleContainer" className="text-center justify-content">
            <Row >
                <Col>
                    <Figure.Image id="logoPrincipal" className="text-center" src="/gaelo-logo-white.png" />
                    <h2 className="styleTexte">{t('header.title')}</h2>

                </Col>
            </Row>
            <Row>
                <Col>
                    <img src="logo-video.png" className="styleTexte" variant="primary" onClick={() => setModalShow(true)} style={{ maxWidth: '150px' }} ></img>
                    <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
                </Col>
            </Row>
        </Container>
    );
}

export default Header;