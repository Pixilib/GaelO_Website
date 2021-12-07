
import { useTranslation } from "react-i18next";
import Lang from './Lang';
import { Col, Container, Figure, Nav, Navbar } from 'react-bootstrap';
import logoPrincipal from '../assets/images/logoPrincipal.png';
import { useState } from 'react';




function Header (props) {
    const [isScrolled, setScrolled] = useState(false);

    const NavBarTransparentToWhite = (event) => {
        if (window.pageYOffset >= 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    window.addEventListener('scroll', NavBarTransparentToWhite);

    const { t } = useTranslation();

    return (

            
            <Navbar sticky="top" className={isScrolled ? 'bg-white' : 'bg-transparent background'}>
                <Col sm={1}>
                    <Nav href="#home">
                        <Figure.Image href="#home" src={logoPrincipal} alt="Image logo Principal of Gaelo" />
                    </Nav>
                </Col>
                <Col>
                    <Nav className="me-auto justify-content-center ">
                        <Nav.Link className={isScrolled ? 'text-dark' : 'text-white'} href="#Ourviews">{t('navbar.1')}</Nav.Link>
                        <Nav.Link className={isScrolled ? 'text-dark' : 'text-white'} href="#work">{t('navbar.2')}</Nav.Link>
                        <Nav.Link className={isScrolled ? 'text-dark' : 'text-white'} href="#features">{t('navbar.3')}</Nav.Link>
                        <Nav.Link className={isScrolled ? 'text-dark' : 'text-white'} href="#video">{t('navbar.4')}</Nav.Link>
                        <Nav.Link className={isScrolled ? 'text-dark' : 'text-white'} href="#about">{t('navbar.5')}</Nav.Link>
                        <Nav.Link className={isScrolled ? 'text-dark' : 'text-white'} href="#contact">{t('navbar.6')}</Nav.Link>
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

export default Header;

