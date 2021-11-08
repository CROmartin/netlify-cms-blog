/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  //logic that allows us to use window object - using basic logic without hooks
  let showFooter
  let showHeader

  if (typeof window !== "undefined") {
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/reset-password" ||
      window.location.pathname === "/login/" ||
      window.location.pathname === "/reset-password/" ||
      window.location.pathname === "/app/dashboard/" ||
      window.location.pathname === "/app/dashboard" ||
      window.location.pathname === "/app/download" ||
      window.location.pathname === "/app/download/" ||
      window.location.pathname === "/app/manage-subscription" ||
      window.location.pathname === "/app/manage-subscription/" ||
      window.location.pathname === "/app/administrator/" ||
      window.location.pathname === "/app/administrator" ||
      window.location.pathname === "/app/account" ||
      window.location.pathname === "/app/account/" ||
      window.location.pathname === "/app/manage-users/" ||
      window.location.pathname === "/app/manage-users" ||
      window.location.pathname === "/create-account" ||
      window.location.pathname === "/create-account/" ||
      window.location.pathname === "/404" ||
      window.location.pathname === "/404/" ||
      window.location.pathname === "/app/404" ||
      window.location.pathname === "/app/404/"
    ) {
      showFooter = false
    } else {
      showFooter = true
    }

    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/features" ||
      window.location.pathname === "/checkout" ||
      window.location.pathname === "/checkout-new1" ||
      window.location.pathname === "/login" ||
      window.location.pathname === "/reset-password" ||
      window.location.pathname === "/features/" ||
      window.location.pathname === "/checkout/" ||
      window.location.pathname === "/checkout-new1/" ||
      window.location.pathname === "/login/" ||
      window.location.pathname === "/reset-password/" ||
      window.location.pathname === "/404" ||
      window.location.pathname === "/404/" ||
      window.location.pathname === "/create-account" ||
      window.location.pathname === "/create-account/"
    ) {
      showHeader = true
    } else {
      showHeader = false
    }
  }

  return (
    <>
      {showHeader && (
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      )}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100vw`,
        }}
      >
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="gatsby-gdpr-google-analytics"
          expires={30}
          contentStyle={{
            display: `flex`,
            justifyContent: `center`,
            fontSize: `16px`,
            maxWidth: `50rem`,
            paddingRight: `0`,
            marginRight: `0`,
            color: `#222`,
          }}
          buttonStyle={{
            backgroundColor: `#00a651`,
            color: `white`,
            marginLeft: `0`,
            padding: `8px 25px`,
            borderRadius: `5px`,
          }}
          style={{
            display: `flex`,
            justifyContent: `center`,
            backgroundColor: `#f0f0f0FC`,
          }}
        >
          <span>
            This site uses{" "}
            <Link to="#" style={{ color: `#222` }}>
              technical
            </Link>{" "}
            as well as{" "}
            <Link to="#" style={{ color: `#222` }}>
              profiling
            </Link>{" "}
            cookies. Learn more by visiting our{" "}
            <Link to="#" style={{ color: `#222` }}>
              Cookie Policy
            </Link>{" "}
            and our{" "}
            <Link to="" style={{ color: `#222` }}>
              Privacy Policy
            </Link>{" "}
          </span>
        </CookieConsent>
        <main>{children}</main>

        {showFooter && (
          <footer
            style={{
              backgroundColor: `#222222`,
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              padding: `1rem 0`,
            }}
          >
            <p
              style={{
                fontStyle: `normal`,
                fontWeight: `normal`,
                fontSize: `12px`,
                lineHeight: `2px`,
                textalign: `center`,
                color: `#DCDCDC`,
                height: `fit-content`,
                margin: `0.5rem 0`,
              }}
            >
              © 2017-{new Date().getFullYear()}, Zipity Software Inc. All rights
              reserved.
            </p>
          </footer>
        )}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
