import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const Blog = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  div {
    text-align: center;
    width: 100%;
  }
`

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Blog>
      <div>
        <h1>{post.frontmatter.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Blog>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
