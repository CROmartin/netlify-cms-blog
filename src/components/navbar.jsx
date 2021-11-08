import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useState } from "react"
import Helmet from "react-helmet"
//global context
import { GlobalAuthContext } from "../Contexts/GlobalAuthContext"
import { useContext } from "react"

const MenuIcon = styled.button`
  position: fixed;
  top: 1.3rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  z-index: 5;
  margin: 0;
  outline: 0;
  align-items: center;
  @media (min-width: 769px) {
    display: none;
  }

  div {
    @supports (-webkit-touch-callout: none) {
      transform-origin: 3px;
      @media (max-width: 480px) {
        transform-origin: 1.85px;
      }
    }
    width: 1.2rem;
    height: 0.2rem;
    background: #000000;
    border-radius: 5px;
    transform-origin: 2.5px;
    position: relative;
    transition: opacity 200ms, transform 300ms;
    margin-left: ${({ nav }) => (nav ? "0.3rem" : "0rem")};

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      /* transform: ${({ nav }) =>
        nav ? "translateX(1000%)" : "translateX(0)"};
      opacity: ${({ nav }) => (nav ? "0" : "1")}; */
      display: ${({ nav }) => (nav ? "none" : "initial")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
//styled components for navbar
const NavbarStyle = styled.nav`
  font-family: "Work Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30rem;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0;
    width: 30rem;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  a {
    display: flex;
    align-items: flex-end;
    height: fit-content;
    text-decoration: none;
    font-size: 18px;
    line-height: 27px;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    padding: 0;
    margin: 0;
    color: #222222;
    :hover {
      color: gray;
    }
    div {
      display: inline-block;
      transform: rotate(-90deg);
      margin-left: 0.1rem;
      height: fit-content;
      font-size: 27px;
      color: #222222;
    }
  }

  .start {
    background-color: #e44331;
    color: white;
    border-radius: 9999px;
    font-size: 18px;
    line-height: 18px;
    font-weight: 500;
    padding: 0.6rem 1.5rem;
    position: relative;
    top: 0.3rem;
    :hover {
      color: white;
      background-color: red;
    }
  }

  .special {
    position: fixed;
    top: 2.1rem;
    right: 15rem;
  }

  .SignIn {
    font-weight: 500;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    position: relative;
    left: -1.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
    background: #fbfbfb;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 300ms;
    transform: ${({ nav }) => (nav ? "translateX(0%)" : "translateX(500%)")};
    z-index: 1;
    ul {
      height: 95%;
      //dodal si
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      text-align: center;
      list-style-type: none;
    }

    li {
      margin-top: 1rem;
      margin-right: 2.5rem;
    }

    a {
      text-decoration: none;
      color: #222222;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 27px;
      transition: color 300ms;
    }
    .pair1 {
      position: fixed;
      top: 8rem;
      left: 2rem;
    }

    .pair2 {
      position: fixed;
      top: 11.5rem;
      left: 2rem;
    }
    .SignIn,
    .start {
      position: relative;
      top: -1rem;
    }
    .different {
      margin-right: 0;
    }
  }

  @media (max-width: 280px) {
    a {
      position: relative;
      left: 1.5rem;
    }
  }
`
// End of styled components for navbar

const Navbar = () => {
  //important for production version so it can be compiled by node --> window object doesn't exist so this is a work around!
  const isBrowser = typeof window !== `undefined`

  //basic logic for special navbar
  let specialMenu
  if (isBrowser) {
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/login/" ||
      window.location.pathname === "/reset-password" ||
      window.location.pathname === "/reset-password"
    ) {
      specialMenu = false
    } else {
      specialMenu = true
    }
  }

  // Ovdje bus dodal useState za burger menu
  const [nav, showNav] = useState(false)

  //global context
  const { setComplete, setStep } = useContext(GlobalAuthContext)
  return (
    <div>
      <Helmet>
        <script
          id="fsc-api"
          src="https://d1f8f9xcsvx3ha.cloudfront.net/sbl/0.8.5/fastspring-builder.min.js"
          type="text/javascript"
          data-storefront="pdf-pro.test.onfastspring.com/popup-pdf-pro"
          async
        ></script>
      </Helmet>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
      <NavbarStyle nav={nav}>
        <ul>
          {specialMenu && (
            <li>
              <Link to="/features/" className="pair1">
                Features
              </Link>
            </li>
          )}
          {specialMenu && (
            <li>
              <a
                href="https://support.pdfpro.com/hc/en-us/requests/new"
                className="pair2"
              >
                Support <div>&#8249;</div>
              </a>
            </li>
          )}
          {specialMenu && (
            <li className="different">
              <Link
                to="/checkout"
                onClick={() => {
                  setStep(0)
                  setComplete(0)
                }}
                className="start"
              >
                Checkout
              </Link>
            </li>
          )}
          {specialMenu && (
            <li className="different">
              <Link to="/login" className="SignIn">
                Sign In
              </Link>
            </li>
          )}
          {!specialMenu && (
            <li>
              <Link to="/create-account" className="special">
                Register
              </Link>
            </li>
          )}
        </ul>
      </NavbarStyle>
    </div>
  )
}

export default Navbar
