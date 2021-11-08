import React from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { useEffect } from "react"
//Context hook
import { useContext } from "react"
import { GlobalAuthContext } from "../Contexts/GlobalAuthContext"

const DashboardMenuStyle = styled.section`
  position: fixed;
  width: 260px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  background: #444444;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  .menu-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    .img-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 127px;
    }

    .text {
      width: fit-content;
      height: 24px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.5px;
      color: #ffffff;
      margin: 0px 16px;
    }
    .links {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 72px;
      width: 100%;
      text-decoration: none;
      padding-left: 65px;
      &:hover {
        background: #e44331;
      }
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
    background-color: #444444;
    padding: 0;
    box-shadow: none;
    justify-self: end;
    height: 72px;
    width: 100%;
    padding-left: 65px;
    text-decoration: none;
    color: white;

    &:hover {
      background: #e44331;
    }

    .button-text {
      width: 83px;
      height: 24px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.5px;
      color: #ffffff;
      margin: 0px 16px;
    }
  }
`

function DasboardMenu(props) {
  //basic way to keep track which tab is open
  let active
  if (typeof window !== "undefined") {
    if (
      window.location.pathname === "/app/dashboard" ||
      window.location.pathname === "/app/dashboard/"
    ) {
      active = 1
    } else if (
      window.location.pathname === "/app/download" ||
      window.location.pathname === "/app/download/"
    ) {
      active = 2
    } else if (
      window.location.pathname === "/app/manage-users" ||
      window.location.pathname === "/app/manage-users/"
    ) {
      active = 3
    } else if (
      window.location.pathname === "/app/administrator" ||
      window.location.pathname === "/app/administrator/"
    ) {
      active = 4
    } else if (
      window.location.pathname === "/app/manage-subscription" ||
      window.location.pathname === "/app/manage-subscription/"
    ) {
      active = 5
    }
  }

  //global context hook
  const {
    authNumber,
    setAuthNumber,
    globalPrimary,
    setGlobalPrimary,
  } = useContext(GlobalAuthContext)

  //useffect hook
  useEffect(() => {
    if (authNumber === null) {
      setAuthNumber(JSON.parse(localStorage.getItem("numberOfLicenses")))
      setGlobalPrimary(JSON.parse(localStorage.getItem("primary")))
    }
  }, [authNumber])

  return (
    <DashboardMenuStyle>
      <div className="menu-container">
        <div className="img-container">
          <Link to="/app">
            <StaticImage
              src="../images/dashboard-logo.png"
              width={118}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "png"]}
              loading="eager"
              placeholder="blurred"
              alt="dashboard logo"
              className="icon-img"
            />
          </Link>
        </div>
        {active === 1 && (
          <Link
            className="links"
            style={{ backgroundColor: `#e44331` }}
            to="/app/dashboard"
          >
            <div className="holder">
              <StaticImage
                src="../images/dashboard-icon.png"
                width={18}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "png"]}
                loading="eager"
                placeholder="blurred"
                alt="dashboard icon"
                className="icon-img"
              />
              <span className="text"> Dashboard</span>
            </div>
          </Link>
        )}
        {active !== 1 && (
          <Link className="links" to="/app/dashboard">
            <div className="holder">
              <StaticImage
                src="../images/dashboard-icon-inactive.png"
                width={18}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "png"]}
                loading="eager"
                placeholder="blurred"
                alt="dashboard icon"
                className="icon-img"
              />
              <span className="text"> Dashboard</span>
            </div>
          </Link>
        )}
        {active === 2 && (
          <Link
            className="links"
            to="/app/download"
            style={{ backgroundColor: `#e44331` }}
          >
            <StaticImage
              src="../images/download-icon.png"
              width={17}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "png"]}
              loading="eager"
              placeholder="blurred"
              alt="download icon"
              className="icon-img"
            />
            <span className="text"> Download</span>
          </Link>
        )}
        {active !== 2 && (
          <Link className="links" to="/app/download">
            <StaticImage
              src="../images/download-icon.png"
              width={17}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "png"]}
              loading="eager"
              placeholder="blurred"
              alt="download icon"
              className="icon-img"
            />
            <span className="text"> Download</span>
          </Link>
        )}
        {active === 3 && props.number > 1 && (
          <Link
            className="links"
            to="/app/manage-users"
            style={{ backgroundColor: `#e44331` }}
          >
            <StaticImage
              src="../images/users-icon.png"
              width={24}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "png"]}
              loading="eager"
              placeholder="blurred"
              alt="users icon"
              className="icon-img"
            />
            <span className="text"> Users</span>
          </Link>
        )}
        {active !== 3 && props.number > 1 && (
          <Link className="links" to="/app/manage-users">
            <StaticImage
              src="../images/users-icon.png"
              width={24}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "png"]}
              loading="eager"
              placeholder="blurred"
              alt="users icon"
              className="icon-img"
            />
            <span className="text"> Users</span>
          </Link>
        )}
        {active === 4 && props.number > 1 && globalPrimary === true && (
          <Link
            className="links"
            to="/app/administrator"
            style={{ backgroundColor: `#e44331` }}
          >
            <StaticImage
              src="../images/account-icon.png"
              width={16}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "png"]}
              loading="eager"
              placeholder="blurred"
              alt="administrator icon"
              className="icon-img"
            />
            <span className="text"> Administrator</span>
          </Link>
        )}
        {active !== 4 && props.number > 1 && globalPrimary === true && (
          <Link className="links" to="/app/administrator">
            <StaticImage
              src="../images/account-icon.png"
              width={16}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "png"]}
              loading="eager"
              placeholder="blurred"
              alt="administrator icon"
              className="icon-img"
            />
            <span className="text"> Administrator</span>
          </Link>
        )}
        {active === 5 && (
          <Link
            className="links"
            to="/app/manage-subscription"
            style={{ backgroundColor: `#e44331` }}
          >
            <StaticImage
              src="../images/subscription-icon-active.png"
              width={18}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "png"]}
              loading="eager"
              placeholder="blurred"
              alt="subscription icon"
              className="icon-img"
            />
            <span className="text"> Subscription</span>
          </Link>
        )}
        {active !== 5 && (
          <Link className="links" to="/app/manage-subscription">
            <StaticImage
              src="../images/subscription-icon.png"
              width={18}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "png"]}
              loading="eager"
              placeholder="blurred"
              alt="subscription icon"
              className="icon-img"
            />
            <span className="text"> Subscription</span>
          </Link>
        )}
        {active === 6 && (
          <Link
            className="links"
            to="https://support.pdfpro.com/hc/en-us/requests/new"
            style={{ backgroundColor: `#e44331` }}
          >
            <StaticImage
              src="../images/support-icon.png"
              width={17}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "png"]}
              loading="eager"
              placeholder="blurred"
              alt="support icon"
              className="icon-img"
            />
            <span className="text"> Support</span>
          </Link>
        )}
        {active !== 6 && (
          // when you get link you will change div to Link
          <a
            className="links"
            href="https://support.pdfpro.com/hc/en-us/requests/new"
          >
            <StaticImage
              src="../images/support-icon.png"
              width={17}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "png"]}
              loading="eager"
              placeholder="blurred"
              alt="support icon"
              className="icon-img"
            />
            <span className="text"> Support</span>
          </a>
        )}
      </div>
      <button
        onClick={() => {
          localStorage.clear()
          navigate("/login/")
        }}
        type="button"
      >
        <StaticImage
          src="../images/Arrow - Left.png"
          width={18}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF", "png"]}
          loading="eager"
          placeholder="blurred"
          alt="dashboard logo"
          className="icon-img-button"
        />
        <span className="button-text"> Log out</span>
      </button>
    </DashboardMenuStyle>
  )
}

export default DasboardMenu
