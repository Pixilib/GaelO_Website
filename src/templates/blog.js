import React from "react";
import { graphql } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";

export default function Blog({ data, pageContext }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.coverImage);
  const seoData = {
    title: frontmatter.seo.title || frontmatter.title,
    description: frontmatter.seo.description || frontmatter.subtitle,
  };
  return (
    <Layout pageContext={pageContext} seo={seoData}>
      <Container className="viewportHeight100">
        <Row className="justify-content-md-center">
          <GatsbyImage image={image} alt={frontmatter.title} />
        </Row>
        <Row className="mx-3">
          <Col className="px-2">
            <article>
              {frontmatter.title && <h1>{frontmatter.title}</h1>}
              {frontmatter.subtitle && <h2>{frontmatter.subtitle}</h2>}
              {html && (
                <div
                  className="py-2"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              )}
            </article>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export const blogQuery = graphql`
  query ($slug: String!, $locale: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, locale: { eq: $locale } }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        subtitle
        seo {
          title
          description
        }
        coverImage {
          childImageSharp {
            gatsbyImageData(width: 1000)
          }
        }
      }
    }
  }
`;
