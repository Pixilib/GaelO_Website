import * as React from "react";
import { Helmet } from "react-helmet";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Seo = ({ lang }) => {
  const { t } = useTranslation();
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={t("seo.title")}
      meta={[
        {
          name: `description`,
          content: t("seo.description"),
        },
        {
          property: `og:title`,
          content: t("seo.title"),
        },
        {
          property: `og:description`,
          content: t("seo.description"),
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
          content: t("seo.title"),
        },
        {
          name: `twitter:description`,
          content: t("seo.description"),
        },
      ]}
    >
      <link rel="icon" type="image/png" href="logo.ico" sizes="16x16" />
    </Helmet>
  );
};

export default Seo;
