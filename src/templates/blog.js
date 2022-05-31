import React from "react";
import { graphql } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";

export default function Blog({ data, pageContext }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.coverImage);
  return (
    <Layout pageContext={pageContext}>
      <Container>
        <Row className="justify-content-md-center">
          <div>
            <GatsbyImage image={image} alt={frontmatter.title} />
          </div>
        </Row>
        <Row>
          <Col className="px-2">
            {frontmatter.title && <h1>{frontmatter.title}</h1>}
            {html && (
              <div
                className="py-2"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            )}
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
        coverImage {
          childImageSharp {
            gatsbyImageData(width: 1000)
          }
        }
      }
    }
  }
`;
