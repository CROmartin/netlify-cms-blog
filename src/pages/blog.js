import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const BlogList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  article {
    margin-left: 10%;
    margin-right: 10%;
  }

  h1 {
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`
export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <BlogList>
      <div>
        <h1>My blog posts</h1>

        {posts.map(post => (
          <article key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <StaticImage
              src={post.frontmatter.thumbnail}
              width={588}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Thumbnail"
              placeholder="blurred"
            />
            <small>
              {post.frontmatter.author}, {post.frontmatter.date}
            </small>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </BlogList>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`
