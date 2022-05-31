import React from "react";
import { graphql } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout pageContext={pageContext} seo={frontmatter.seo}>
      <Container>
        <Row>
          <Col>
            {frontmatter.title && <h1>{frontmatter.title}</h1>}
            {html && (
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            )}
          </Col>
        </Row>
        {frontmatter.sections &&
          frontmatter.sections.items?.map((item, i) => (
            <Row className="pt-3 pb-3">
              <Col
                xs={12}
                sm={7}
                md={i % 2 === 0 ? { order: "last" } : ""}
                className="mb-3"
              >
                {item.content}
              </Col>
              <Col xs={12} sm={5}>
                <GatsbyImage image={getImage(item.image)} className="mb-3" />
              </Col>
            </Row>
          ))}
      </Container>
    </Layout>
  );
}

export const landingQuery = graphql`
  query ($slug: String!, $locale: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, locale: { eq: $locale } }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        seo {
          title
          description
        }
        sections {
          items {
            content
            image {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    }
  }
`;
