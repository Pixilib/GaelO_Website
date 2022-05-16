import React from "react";
import { useTranslation } from "react-i18next";
import Lang from "./Lang";
import { Col, Container, Nav, Navbar } from "react-bootstrap";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import LogoPrincipal from "../../assets/images/gaelo-logo.svg";
import LogoGitHub from "../../assets/images/github.svg";

import { Link } from "gatsby";

const Header = (props) => {
  const customStyle = {
    marginLeft: "10px",
    textDecoration: "none",
  };

  const customLink = (origin) => {
    let className = props.scrolled ? "text-dark" : "text-white";

    return className;
  };

  const customNav = () =>
    props.scrolled ? "bg-white py-0 " : "bg-transparent background py-0 ";

  const { t } = useTranslation();

  const styleLogoGH = () => {
    return {
      color: "inherit",
      textdecoration: "none",
    };
  };

  return (
    <Navbar sticky="top" expand="lg" className={customNav()}>
      <Container fluid className="d-flex justify-content-around">
        <Col sm={1}>
          <Link to="/">
            <img src={LogoPrincipal} alt="GaelO" className="w-50" />
          </Link>
        </Col>
        <Col className="fw-bold d-flex justify-content-center">
          <Nav>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav "
              className="border-0 shadow-none "
            />
            <Navbar.Collapse id="basic-navbar-nav" className="navigationBar">
              <AnchorLink
                to="/#ourviews"
                title="our views"
                style={customStyle}
                className={customLink("/ourviews")}
              >
                {t("navbar.1")}
              </AnchorLink>
              <AnchorLink
                to="/#solution"
                title="solution"
                style={customStyle}
                className={customLink("/solution")}
              >
                {t("navbar.2")}{" "}
              </AnchorLink>
              <AnchorLink
                to="/#service"
                title="service"
                style={customStyle}
                className={customLink("/service")}
              >
                {t("navbar.3")}{" "}
              </AnchorLink>
              <AnchorLink
                to="/#expertise"
                title="expertise"
                style={customStyle}
                className={customLink("/expertise")}
              >
                {t("navbar.4")}{" "}
              </AnchorLink>
              {/* <a
                href="#team"
                style={customStyle}
                className={customLink("/team")}
                hidden="true"
              >
                {t("navbar.5")}{" "}
              </a> */}
              <AnchorLink
                to="/#contact"
                title="contact"
                style={customStyle}
                className={customLink("/contact")}
              >
                {t("navbar.6")}{" "}
              </AnchorLink>
            </Navbar.Collapse>
          </Nav>
        </Col>
        <Col
          sm={1}
          className="d-flex justify-content-around align-items-center"
        >
          <Lang />

          <a
            style={styleLogoGH()}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Pixilib/"
          >
            <img src={LogoGitHub} alt="GitHub" />
          </a>
        </Col>
      </Container>
    </Navbar>
  );
};
export default Header;
