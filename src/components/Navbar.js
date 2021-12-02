import '../assets/css/navbar.css';
import { useTranslation } from "react-i18next";
import Lang from './Lang';
import { Col, Container, Figure, Nav, Navbar } from 'react-bootstrap';
import logoPrincipal from '../assets/images/logoPrincipal.png';


function NavBar(props) {


    
    window.addEventListener('scroll', (event) => {
       // var elementHeader = document.getElementById("Gaelo").offsetHeight * 50/100;
        /*var navbar = document.getElementById("navbar");
      
        if(window.pageYOffset > elementHeader){
            navbar.style.backgroundColor = " #ffffff ";
            navbar.style.height = "2rem";
            navbar.style.fontSize = "1.0rem";
            navbar.style.width = "100%";
        }
        if(window.pageYOffset < elementHeader){
            navbar.style.backgroundColor = "";
            navbar.style.height = "3rem";
            navbar.style.fontSize = "1.3rem";
           

        }
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
        */

       

    });
    

    function activeItem(item) {
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
    }


    const { t } = useTranslation();

    return (
        <Navbar sticky="top"  >
            
            <Col sm={1} className="test">
                <Nav href="#home">
                    <Figure.Image src={logoPrincipal} id="imageLogo" alt="Image logo Principal of Gaelo" />
                </Nav>
            </Col>

            <Col >
                <Nav className="me-auto justify-content-center">
                    <Nav.Link href="#gaelo">{t('navbar.1')}</Nav.Link>
                    <Nav.Link href="#work">{t('navbar.2')}</Nav.Link>
                    <Nav.Link href="#features">{t('navbar.3')}</Nav.Link>

                    <Nav.Link href="#video">{t('navbar.4')}</Nav.Link>
                    <Nav.Link href="#about">{t('navbar.5')}</Nav.Link>
                    <Nav.Link href="#contact">{t('navbar.6')}</Nav.Link>
                </Nav>
            </Col>
            
            <Col sm ={1}>
                <Nav className="me-auto">
                    <Nav.Link href="#pricing"><Lang /></Nav.Link>
                </Nav>
            </Col>

        </Navbar>
    );
}

export default NavBar;

