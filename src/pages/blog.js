import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { useEffect } from "react"
import { getImage } from "gatsby-plugin-image"

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

  useEffect(() => {
    posts.map(post => console.log(post.frontmatter.thumbnail))
  }, [])

  return (
    <BlogList>
      <div>
        <h1>My blog posts</h1>

        {posts.map(post => (
          <article key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <GatsbyImage
              image={getImage(post.frontmatter.thumbnail)}
              alt="thumbnail"
            />
            {/* <div> Nesto {toString(post.frontmatter.thumbnail)}</div> */}
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
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
        }
        excerpt
        id
      }
    }
  }
`
