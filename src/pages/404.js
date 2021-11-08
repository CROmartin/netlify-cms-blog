import * as React from "react"
import Seo from "../components/seo"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Style = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 84.8vh;
  overflow: hidden;
`

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <Style>
      <StaticImage
        src="../images/PDFpro-logo.svg"
        width={119}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF", "png"]}
        placeholder="blurred"
        loading="eager"
        alt="PDF logo"
      />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Style>
  </>
)

export default NotFoundPage
