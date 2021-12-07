import { Row, Figure, Col, Container, Button, Modal, } from "react-bootstrap";
import useWindowDimensions from "../Fonctions/getDimension.js";

import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import VideoModal from "./VideoModal";
import logoPrincipalWhite from "../assets/images/gaelo-logo-white.svg";


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
                    <Figure.Image className="text-center logoPrincipal" src={logoPrincipalWhite} />
                    <h2 className="styleTexte">{t('header.title')}</h2>

                </Col>
            </Row>
            <Row >
                <Col >
                    <button type="button" onClick={() => setModalShow(true)} >
                        <img src="logo-video.png" variant="primary" style={{ maxWidth: '150px' }} ></img>
                    </button>
                    <VideoModal show={modalShow} onHide={() => setModalShow(false)} />

                </Col>

            </Row>
        </Container>
    );
}

export default Header;