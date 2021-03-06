import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Lang from "./Lang";
import { Col, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import LogoPrincipal from "../../assets/images/gaelo-logo.svg";
import LogoGitHub from "../../assets/images/github.svg";

import { Link } from "gatsby";

const Header = ({ pageContext }) => {
  const isBrowser = typeof window !== "undefined";

  const customStyle = {
    textDecoration: "none",
    padding: "0px!important",
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    if (isBrowser) {
      const onScroll = () => {
        if (window.pageYOffset >= 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const customLink = () => {
    let className = isScrolled ? "text-dark" : "text-white";

    return className;
  };

  const customNav = () =>
    isScrolled ? "bg-white py-0 " : "bg-transparent background py-0 ";

  const { t } = useTranslation();

  const styleLogoGH = () => {
    return {
      color: "inherit",
      textdecoration: "none",
    };
  };
  const [headerActive, setHeaderActive] = useState(null);

  const path =
    pageContext.mainLanguage === pageContext.locale
      ? ""
      : `/${pageContext.locale}`;

  return (
    <Navbar sticky="top" expand="md" className={customNav()}>
      <Container
        // fluid
        className="d-flex  pt-2 pb-2  "
      >
        <Navbar.Brand>
          <Link to={path + "/"} onClick={() => setHeaderActive(null)}>
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
                to={path + "/#ourviews"}
                title="our views"
                style={customStyle}
                className={headerActive === "ourviews" ? "text-secondary" : ""}
              >
                {t("navbar.1")}
              </AnchorLink>
            </Nav>
            <Nav onClick={() => setHeaderActive("solution")}>
              <AnchorLink
                to={path + "/#solution"}
                title="solution"
                style={customStyle}
                className={headerActive === "solution" ? "text-secondary" : ""}
              >
                {t("navbar.2")}{" "}
              </AnchorLink>
            </Nav>
            <Nav onClick={() => setHeaderActive("service")}>
              <AnchorLink
                to={path + "/#service"}
                title="service"
                style={customStyle}
                className={headerActive === "service" ? "text-secondary" : ""}
              >
                {t("navbar.3")}{" "}
              </AnchorLink>
            </Nav>
            <Nav onClick={() => setHeaderActive("expertise")}>
              <AnchorLink
                to={path + "/#expertise"}
                title="expertise"
                style={customStyle}
                className={headerActive === "expertise" ? "text-secondary" : ""}
              >
                {t("navbar.4")}{" "}
              </AnchorLink>
            </Nav>
            <Nav onClick={() => setHeaderActive("contact")}>
              <AnchorLink
                to={path + "/#contact"}
                title="contact"
                style={customStyle}
                className={headerActive === "contact" ? "text-secondary" : ""}
              >
                {t("navbar.6")}{" "}
              </AnchorLink>
            </Nav>
            <Nav onClick={() => setHeaderActive(null)}>
              <Link to={path + "/blog"}>{t("navbar.7")}</Link>
            </Nav>
          </Nav>
          <Nav>
            <Nav className="align-items-center">
              <Lang
                locale={pageContext.locale}
                allWebsiteLocales={pageContext.allWebsiteLocales}
                langSwitchTo={pageContext.langSwitchTo}
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
