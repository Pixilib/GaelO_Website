import React from "react";
import { graphql, Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";
import Card from "react-bootstrap/Card";

export default function BlogMain({ data, pageContext }) {
  console.log(data);
  // const image = getImage(frontmatter.coverImage);
  return (
    <Layout pageContext={pageContext}>
      <Container>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          const { slug, locale } = edge.node.frontmatter;
          const path =
            edge.node.frontmatter.locale === pageContext.mainLanguage
              ? "/blog/" + slug
              : `/${locale}/blog/${slug}`;

          return (
            <Row className=" my-5">
              <Card style={{ width: "18rem" }}>
                {edge.node.frontmatter.coverImage && (
                  <Card.Img
                    variant="top"
                    src={
                      edge.node.frontmatter.coverImage.childImageSharp
                        .gatsbyImageData.images.fallback.src
                    }
                  />
                )}
                <Card.Body>
                  {edge.node.frontmatter.title && (
                    <Card.Title>
                      <Link to={path}>{edge.node.frontmatter.title}</Link>
                    </Card.Title>
                  )}
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          );
        })}
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
  }
`;
