import React from "react";
import { graphql, Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";
import Card from "react-bootstrap/Card";

export default function BlogMain({ data, pageContext }) {
  return (
    <Layout pageContext={pageContext} seo={data.pageBlogMain.frontmatter.seo}>
      <Container className="viewportHeight100">
        <h1>{data.pageBlogMain.frontmatter.title}</h1>
        <Row className="my-3  cardBlog">
          {data.allMarkdownRemark.edges.map((edge, i) => {
            const { slug, locale, title, subtitle } = edge.node.frontmatter;
            const path =
              edge.node.frontmatter.locale === pageContext.mainLanguage
                ? "/blog/" + slug
                : `/${locale}/blog/${slug}`;

            return (
              <Col xs={12} md={4} className="my-2">
                <Card>
                  {edge.node.frontmatter.coverImage && (
                    <Link to={path}>
                      <Card.Img
                        variant="top"
                        src={
                          edge.node.frontmatter.coverImage.childImageSharp
                            .gatsbyImageData.images.fallback.src
                        }
                      />
                    </Link>
                  )}
                  <Card.Body>
                    {edge.node.frontmatter.title && (
                      <Card.Title>
                        <Link to={path}>{title}</Link>
                      </Card.Title>
                    )}
                    <Card.Text>{subtitle}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
}

export const blogQuery = graphql`
  query ($locale: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { locale: { eq: $locale }, template: { eq: "blog" } }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            subtitle
            locale

            coverImage {
              childImageSharp {
                gatsbyImageData(width: 400)
                resize {
                  src
                }
              }
            }
          }
        }
      }
    }
    pageBlogMain: markdownRemark(
      frontmatter: { locale: { eq: $locale }, template: { eq: "blogMain" } }
    ) {
      frontmatter {
        title
        langSwitchTo
        seo {
          title
          description
        }
      }
    }
  }
`;
