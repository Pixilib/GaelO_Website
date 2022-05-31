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
    const slug =
      edge.node.frontmatter.slug === "homepage"
        ? ""
        : edge.node.frontmatter.slug;

    const isBlog = edge.node.frontmatter.template === "blog" ? "blog/" : "";

    const path =
      edge.node.frontmatter.locale === mainLanguage
        ? isBlog + slug + "/"
        : `${edge.node.frontmatter.locale}/${isBlog}${slug}`;

    let template = "";
    if (edge.node.frontmatter.template === "homepage") {
      template = indexTemplate;
    } else if (edge.node.frontmatter.template === "landing") {
      template = landingTemplate;
    } else if (edge.node.frontmatter.template === "blog") {
      template = blogTemplate;
    }

    createPage({
      path: path,
      component: template,
      context: {
        slug: edge.node.frontmatter.slug,
        locale: edge.node.frontmatter.locale,
        allWebsiteLocales: allWebsiteLocales,
        mainLanguage: mainLanguage,
      },
    });
  });

  createPage({
    path: "/blog",
    component: blogMainTemplate,
    context: {
      locale: "fr",
      allWebsiteLocales: allWebsiteLocales,
      mainLanguage: mainLanguage,
    },
  });
  createPage({
    path: "/en/blog",
    component: blogMainTemplate,
    context: {
      locale: "en",
      allWebsiteLocales: allWebsiteLocales,
      mainLanguage: mainLanguage,
    },
  });
};

// // Create Blog Main page
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const blogMainTemplate = path.resolve(`src/templates/blogMain.js`);
//   const result = await graphql(`
//     query {
//       site {
//         siteMetadata {
//           locales
//         }
//       }
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               locale
//               slug
//               template
//             }
//           }
//         }
//       }
//     }
//   `);
//   result.data.allMarkdownRemark.edges.forEach((edge) => {
//     const allWebsiteLocales = result.data.site.siteMetadata.locales;
//     const mainLanguage = result.data.site.siteMetadata.locales[0];

//     const slug =
//       edge.node.frontmatter.slug === "homepage"
//         ? ""
//         : edge.node.frontmatter.slug;

//     const isBlog = edge.node.frontmatter.template === "blog" ? "blog/" : "";

//     const path =
//       edge.node.frontmatter.locale === mainLanguage
//         ? isBlog + slug + "/"
//         : `${edge.node.frontmatter.locale}/${isBlog}${slug}`;

//     let template = "";
//     if (edge.node.frontmatter.template === "homepage") {
//       template = indexTemplate;
//     } else if (edge.node.frontmatter.template === "landing") {
//       template = landingTemplate;
//     } else if (edge.node.frontmatter.template === "blog") {
//       template = blogTemplate;
//     }

//     createPage({
//       path: path,
//       component: template,
//       context: {
//         slug: edge.node.frontmatter.slug,
//         locale: edge.node.frontmatter.locale,
//         allWebsiteLocales: allWebsiteLocales,
//       },
//     });
//   });
// };
