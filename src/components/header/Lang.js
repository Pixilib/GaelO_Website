import React from "react";

import { Link } from "gatsby";

const Lang = ({ locale, allWebsiteLocales }) => {
  return (
    <>
      <ul>
        {allWebsiteLocales.map((oneLocale, i) => {
          const hasPrefix = i !== 0 ? "/" + oneLocale + "/" : "/"; // (first locale is default (no prefix))
          return oneLocale !== locale ? (
            <li>
              <Link to={hasPrefix}>{oneLocale}</Link>
            </li>
          ) : (
            ""
          );
        })}
      </ul>
    </>
  );
};

export default Lang;
