import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Navbar from "./navbar"

const Spacing = styled.div`
  width: 100%;
  h1 {
    padding-left: 0.5rem;
    padding-right: 1rem;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    justify-content: space-between;
    h1 {
      padding-left: 0;
      padding-right: 0;
    }
  }
`

const HeaderSpecialStyle = styled.div`
  font-family: "Work Sans", sans-serif;
  .logo {
    position: relative;
    top: 0.4rem;
    left: 0rem;
    z-index: 10;
  }
  @media (max-width: 1024px) {
    position: relative;
    top: 0.18rem;

    .logo {
      left: -3.5rem;
    }
  }
  @media (max-width: 768px) {
    position: relative;
    top: 0.15rem;
    .logo {
      left: -3.5rem;
    }
  }
  @media (max-width: 480px) {
    position: relative;
    top: 0rem;
    .logo {
      position: relative;
      left: -2rem;
      z-index: 10;
    }
  }
`
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#FFFFFF`,
      marginBottom: `0.1rem`,
      borderBottom: `1px solid gainsboro`,
      height: `fit-content`,
      width: `100%`,
      display: `flex`,
      justifyContent: `center`,
      position: `sticky`,
      top: 0,
      zIndex: `10`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `100vw`,
        paddingTop: `1rem`,
      }}
    >
      {/* Za image mozda budes trebal dodati jos formata */}
      <Spacing>
        <h1
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            margin: `0`,
            paddingBottom: `1rem`,
            position: `relative`,
            width: `80vw`,
          }}
        >
          <HeaderSpecialStyle>
            <Link
              to="/"
              style={{
                paddingTop: `0rem`,
                paddingBottom: `0`,
                position: `relative`,
                left: `1.15rem`,
              }}
            >
              <StaticImage
                src="../images/PDFpro-logo.svg"
                width={119}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "png"]}
                placeholder="blurred"
                loading="eager"
                alt="PDF Pro Logo"
                className="logo"
                style={{
                  marginRight: `1.45rem`,
                }}
              />
            </Link>
          </HeaderSpecialStyle>
          <Navbar></Navbar>
        </h1>
      </Spacing>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
