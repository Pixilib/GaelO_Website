const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create landing pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const indexTemplate = path.resolve(`src/templates/index.js`);
  const landingTemplate = path.resolve(`src/templates/landing.js`);
  const blogTemplate = path.resolve(`src/templates/blog.js`);
  const blogMainTemplate = path.resolve(`src/templates/blogMain.js`);

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

  const allWebsiteLocales = result.data.site.siteMetadata.locales;
  const mainLanguage = result.data.site.siteMetadata.locales[0];

  result.data.allMarkdownRemark.edges.forEach((edge) => {
    const { frontmatter } = edge.node;
    const slug = frontmatter.slug === "homepage" ? "" : frontmatter.slug;

    const isBlog = frontmatter.template === "blog" ? "blog/" : "";
    let langSwitchTo = false;

    const path =
      frontmatter.locale === mainLanguage
        ? isBlog + slug + "/"
        : `${frontmatter.locale}/${isBlog}${slug}`;

    let template = "";
    if (frontmatter.template === "homepage") {
      template = indexTemplate;
    } else if (frontmatter.template === "landing") {
      template = landingTemplate;
    } else if (frontmatter.template === "blog") {
      template = blogTemplate;

      langSwitchTo =
        frontmatter.locale === mainLanguage
          ? `/${allWebsiteLocales[1]}/blog`
          : "/blog";
    } else if (frontmatter.template === "blogMain") {
      return false;
      // Main blog page are generated later
    }

    createPage({
      path: path,
      component: template,
      context: {
        slug: edge.node.frontmatter.slug,
        locale: edge.node.frontmatter.locale,
        allWebsiteLocales: allWebsiteLocales,
        mainLanguage: mainLanguage,
        langSwitchTo: langSwitchTo,
      },
    });
  });

  // Main Blog Pages
  createPage({
    path: "/blog",
    component: blogMainTemplate,
    context: {
      locale: "fr",
      allWebsiteLocales: allWebsiteLocales,
      mainLanguage: mainLanguage,
      langSwitchTo: "/en/blog",
    },
  });
  createPage({
    path: "/en/blog",
    component: blogMainTemplate,
    context: {
      locale: "en",
      allWebsiteLocales: allWebsiteLocales,
      mainLanguage: mainLanguage,
      langSwitchTo: "/blog",
    },
  });
};
