import * as React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import favicon from "../../../static/logo.ico";

const Seo = ({ pageContext, seo }) => {
  const htmlattr = pageContext.locale;
  const titleDefault =
    "GaelO, plateforme de gestion de l'imagerie des essais cliniques";
  const descriptionDefault =
    "Plateforme de collection et interpretation centralisée en temps réel de l'imagerie des essais cliniques";
  return (
    <Helmet
      htmlAttributes={{ htmlattr }}
      title={seo?.title || titleDefault}
      meta={[
        {
          name: `description`,
          content: seo?.description || descriptionDefault,
        },
        {
          property: `og:title`,
          content: seo?.title || titleDefault,
        },
        {
          property: `og:description`,
          content: seo?.description || descriptionDefault,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: ``,
        },
        {
          name: `twitter:title`,
          content: seo?.title || titleDefault,
        },
        {
          name: `twitter:description`,
          content: seo?.description || descriptionDefault,
        },
      ]}
    >
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </Helmet>
  );
};

export default Seo;
