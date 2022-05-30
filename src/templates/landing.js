import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout pageContext={pageContext}>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!, $locale: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, locale: { eq: $locale } }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
