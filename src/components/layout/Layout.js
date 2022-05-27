import React, { useRef, useState } from "react";

import Seo from "../seo/Seo";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/gaelo.css";

function Layout({ children }) {
  const isBrowser = typeof window !== "undefined";

  const [isScrolled, setScrolled] = useState(false);
  if (isBrowser) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }

  return (
    <>
      <Seo />
      <Header scrolled={isScrolled} />
      {children}
      <Footer fluid className="background" />
    </>
  );
}

export default Layout;
