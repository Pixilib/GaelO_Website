import React from "react";

import { Link } from "gatsby";
import flagFRA from "../../../static/icons/fra.svg";
import flagENG from "../../../static/icons/eng.svg";

const Lang = ({ locale, allWebsiteLocales }) => {
  return (
    <>
      {allWebsiteLocales.map((oneLocale, i) => {
        const hasPrefix = i !== 0 ? "/" + oneLocale + "/" : "/"; // (first locale is default (no prefix))
        const flag = oneLocale === "en" ? flagENG : flagFRA;
        return oneLocale !== locale ? (
          <Link key={i} to={hasPrefix} title="switch to">
            <img src={flag} width="20px" alt={"switch to " + oneLocale} />
          </Link>
        ) : (
          ""
        );
      })}
    </>
  );
};

export default Lang;
