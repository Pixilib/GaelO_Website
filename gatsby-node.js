const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create landing pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const landingTemplate = path.resolve(`src/templates/landing.js`);
  const indexTemplate = path.resolve(`src/templates/index.js`);
  const result = await graphql(`
    query {
      site {
        siteMetadata {
          locales
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              locale
              slug
              title
              template
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach((edge) => {
    const allWebsiteLocales = result.data.site.siteMetadata.locales;
    const mainLanguage = result.data.site.siteMetadata.locales[0];

    const slug =
      edge.node.frontmatter.slug === "homepage"
        ? ""
        : edge.node.frontmatter.slug;

    const path =
      edge.node.frontmatter.locale === mainLanguage
        ? slug + "/"
        : `${edge.node.frontmatter.locale}/${slug}`;

    const template =
      edge.node.frontmatter.template === "homepage"
        ? indexTemplate
        : landingTemplate;

    createPage({
      path: path,
      component: template,
      context: {
        slug: edge.node.frontmatter.slug,
        locale: edge.node.frontmatter.locale,
        allWebsiteLocales: allWebsiteLocales,
      },
    });
  });
};
