import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Lang from "./Lang";
import { Col, Container, Nav, Navbar } from "react-bootstrap";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import LogoPrincipal from "../../assets/images/gaelo-logo.svg";
import LogoGitHub from "../../assets/images/github.svg";

import { Link } from "gatsby";

const Header = (props) => {
  const customStyle = {
    textDecoration: "none",
    padding: "0px!important",
  };

  const customLink = () => {
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
  const [headerActive, setHeaderActive] = useState(null);
  console.log("headerActive", headerActive);

  return (
    <Navbar sticky="top" expand="lg" className={customNav()}>
      <Container fluid className="d-flex justify-content-around">
        <Col sm={1}>
          <Link to="/" onClick={() => setHeaderActive(null)}>
            <img src={LogoPrincipal} alt="GaelO" style={{ width: "60px" }} />
          </Link>
        </Col>
        <Col className="fw-bold d-flex justify-content-center">
          <Nav>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav "
              className="border-0 shadow-none "
            />
            <Navbar.Collapse id="basic-navbar-nav" className="navigationBar">
              <ul>
                <li onClick={() => setHeaderActive("ourviews")}>
                  <AnchorLink
                    to="/#ourviews"
                    title="our views"
                    style={customStyle}
                    className={
                      headerActive === "ourviews" ? "text-secondary" : ""
                    }
                  >
                    {t("navbar.1")}
                  </AnchorLink>
                </li>
                <li onClick={() => setHeaderActive("solution")}>
                  <AnchorLink
                    to="/#solution"
                    title="solution"
                    style={customStyle}
                    className={
                      headerActive === "solution" ? "text-secondary" : ""
                    }
                  >
                    {t("navbar.2")}{" "}
                  </AnchorLink>
                </li>
                <li onClick={() => setHeaderActive("service")}>
                  <AnchorLink
                    to="/#service"
                    title="service"
                    style={customStyle}
                    className={
                      headerActive === "service" ? "text-secondary" : ""
                    }
                  >
                    {t("navbar.3")}{" "}
                  </AnchorLink>
                </li>
                <li onClick={() => setHeaderActive("expertise")}>
                  <AnchorLink
                    to="/#expertise"
                    title="expertise"
                    style={customStyle}
                    className={
                      headerActive === "expertise" ? "text-secondary" : ""
                    }
                  >
                    {t("navbar.4")}{" "}
                  </AnchorLink>
                </li>
                {/*<li> <a
                href="#team"
                style={customStyle}
                className={customLink("/team")}
                hidden="true"
                >
                {t("navbar.5")}{" "}
              </a></li> */}
                <li onClick={() => setHeaderActive("contact")}>
                  <AnchorLink
                    to="/#contact"
                    title="contact"
                    style={customStyle}
                    className={
                      headerActive === "contact" ? "text-secondary" : ""
                    }
                  >
                    {t("navbar.6")}{" "}
                  </AnchorLink>
                </li>
              </ul>
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
