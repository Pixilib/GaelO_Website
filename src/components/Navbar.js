
import { useTranslation } from "react-i18next";
import Lang from './Lang';
import { Col, Container, Figure, Nav, Navbar } from 'react-bootstrap';
import logoPrincipal from '../assets/images/logoPrincipal.png';
import { useState } from 'react';



/*
var elementGaelo = elementHeader;
var elementWork = document.getElementById("gaelo").offsetHeight + elementGaelo;
var elementFeatures = document.getElementById("work").offsetHeight + elementWork;
var elementVideos = document.getElementById("features").offsetHeight + elementFeatures;
var elementAbout = document.getElementById("videos").offsetHeight + elementVideos;
var elementContact = document.getElementById("about").offsetHeight + elementAbout;
var elementLicense = document.getElementById("contact").offsetHeight + elementContact;
if(window.pageYOffset < elementHeader){
    var navLink = document.getElementsByClassName('navbar-link');
    for(var i = 0; i < navLink.length; i++){
        navLink[i].classList.remove("navbar-active");
    }
}
if(window.pageYOffset > elementGaelo){
    activeItem("navGaelo");
}
if(window.pageYOffset > elementWork){
    activeItem("navWork");
}
if(window.pageYOffset > elementFeatures){
    activeItem("navFeatures");
}
if(window.pageYOffset > elementVideos){
    activeItem("navVideos");
}
if(window.pageYOffset > elementAbout){
    activeItem("navAbout");
}
if(window.pageYOffset > elementContact){
    activeItem("navContact");
}
if(window.pageYOffset > elementLicense){
    activeItem("navLicense");
}
 
//}); */
/* function activeItem(item) {
    var navLink = document.getElementsByClassName('navbar-link');
    for (var i = 0; i < navLink.length; i++) {
        navLink[i].classList.remove("navbar-active");
    }
    document.getElementById(item).classList.add("navbar-active");
}

var mobileMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar-menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

var closeMenu = (e) => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar-menu");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

    var navLink = document.getElementsByClassName('navbar-link');
    for (var i = 0; i < navLink.length; i++) {
        navLink[i].classList.remove("navbar-active");
    }
    e.target.classList.add("navbar-active");
} */
function NavBar(props) {
  
    
    const getColor = () => {
        let number  = Math.random()
        return number > 0.5 ? "text-white" : "" 
    }

     
    /* const NavBarTransparentToDark = (props) => {
       
       

        }    */

    const { t } = useTranslation(); 

    return (
        
            <Navbar scrolling dark expand="md" className="sticky-top">

                <Col sm={1} className="test">
                    <Nav href="#home">
                        <Figure.Image src={logoPrincipal} id="logoNavbar" alt="Image logo Principal of Gaelo" />
                    </Nav>
                </Col>

                <Col className="" >
                    <Nav  className="me-auto justify-content-center ">
                        <Nav.Link className={getColor()} href="#gaelo">{t('navbar.1')}</Nav.Link>
                        <Nav.Link className={getColor()} href="#work">{t('navbar.2')}</Nav.Link>
                        <Nav.Link className={getColor()} href="#features">{t('navbar.3')}</Nav.Link>
                        <Nav.Link className={getColor()} href="#video">{t('navbar.4')}</Nav.Link>
                        <Nav.Link className={getColor()} href="#about">{t('navbar.5')}</Nav.Link>
                        <Nav.Link className={getColor()} href="#contact">{t('navbar.6')}</Nav.Link>
                    </Nav>
                </Col>

                <Col sm={1}>
                    <Nav className="me-auto">
                        <Nav.Link><Lang /></Nav.Link>
                    </Nav>
                </Col>

            </Navbar>
    );
}

export default NavBar;

