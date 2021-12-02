import { Row, Figure, Col, Container, Button, Modal } from "../../node_modules/react-bootstrap";
import useWindowDimensions from "../Fonctions/getDimension.js";
import Background from '../assets/images/backgroundblue.png';
import '../assets/css/header.css';
import { useTranslation } from "react-i18next";
import logoPrincipal from '../assets/images/gaelo-logo-white.png';
import Navbar from './Navbar.js';
//import Modal from "react-responsive-modal";
import ReactPlayer from "react-player";
import { render } from "@testing-library/react";
import React, { useState } from "react";

function getStyleRow(h, w) {

    return {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: h + 'px',
        width: "100%",
        //filter: "contrast(80%)"
    }

}

function VideoModal(props) {
    const { t } = useTranslation();
    return (
        <Modal
          {...props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
         
          <Modal.Body>
            <ReactPlayer url={t('header.linkVideo')} width="100%"/>
          </Modal.Body>

        </Modal>
      );
    }

const Header = (props) => {

    const { t } = useTranslation();

    const [modalShow, setModalShow] = React.useState(false);

    return (  
        <Container style={getStyleRow(useWindowDimensions().height, useWindowDimensions().width)} id="styleContainer" className="text-center justify-content">
            <Row >
                <Col>
                    <Figure.Image id="styleLogo" className="text-center" src="/gaelo-logo-white.png" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="styleTexte">{t('header.title')}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src="logo-video.png" className="styleTexte" variant ="primary" onClick={()=>setModalShow(true)} style={{ maxWidth: '250px' }} ></img>
                    <VideoModal show={modalShow} onHide={()=>setModalShow(false)}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;