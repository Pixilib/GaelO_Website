import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Lang from "./Lang";
import { Col, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import LogoPrincipal from "../../assets/images/gaelo-logo.svg";
import LogoGitHub from "../../assets/images/github.svg";

import { Link } from "gatsby";

const Header = ({ scrolled, pageContext }) => {
  const customStyle = {
    textDecoration: "none",
    padding: "0px!important",
  };

  const customLink = () => {
    let className = scrolled ? "text-dark" : "text-white";

    return className;
  };

  const customNav = () =>
    scrolled ? "bg-white py-0 " : "bg-transparent background py-0 ";

  const { t } = useTranslation();

  const styleLogoGH = () => {
    return {
      color: "inherit",
      textdecoration: "none",
    };
  };
  const [headerActive, setHeaderActive] = useState(null);

  return (
    <Navbar sticky="top" expand="md" className={customNav()}>
      <Container
        // fluid
        className="d-flex  pt-2 pb-2  "
      >
        <Navbar.Brand>
          <Link to="/" onClick={() => setHeaderActive(null)}>
            <img src={LogoPrincipal} alt="GaelO" style={{ width: "60px" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          className="border-0 shadow-none "
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="navigationBar justify-content-between"
        >
          <Nav>
            <Nav onClick={() => setHeaderActive("ourviews")}>
              <AnchorLink
                to="/#ourviews"
                title="our views"
                style={customStyle}
                className={headerActive === "ourviews" ? "text-secondary" : ""}
              >
                {t("navbar.1")}
              </AnchorLink>
            </Nav>
            <Nav onClick={() => setHeaderActive("solution")}>
              <AnchorLink
                to="/#solution"
                title="solution"
                style={customStyle}
                className={headerActive === "solution" ? "text-secondary" : ""}
              >
                {t("navbar.2")}{" "}
              </AnchorLink>
            </Nav>
            <Nav onClick={() => setHeaderActive("service")}>
              <AnchorLink
                to="/#service"
                title="service"
                style={customStyle}
                className={headerActive === "service" ? "text-secondary" : ""}
              >
                {t("navbar.3")}{" "}
              </AnchorLink>
            </Nav>
            <Nav onClick={() => setHeaderActive("expertise")}>
              <AnchorLink
                to="/#expertise"
                title="expertise"
                style={customStyle}
                className={headerActive === "expertise" ? "text-secondary" : ""}
              >
                {t("navbar.4")}{" "}
              </AnchorLink>
            </Nav>
            <Nav onClick={() => setHeaderActive("contact")}>
              <AnchorLink
                to="/#contact"
                title="contact"
                style={customStyle}
                className={headerActive === "contact" ? "text-secondary" : ""}
              >
                {t("navbar.6")}{" "}
              </AnchorLink>
            </Nav>
          </Nav>
          <Nav>
            <Nav className="align-items-center">
              <Lang
                locale={pageContext.locale}
                allWebsiteLocales={pageContext.allWebsiteLocales}
              />
            </Nav>
            <Nav className="align-items-center">
              <a
                style={styleLogoGH()}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Pixilib/"
              >
                <img src={LogoGitHub} alt="GitHub" />
              </a>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
