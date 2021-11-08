import React, { useContext } from "react"
import styled from "styled-components"
import { useState } from "react"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GlobalAuthContext } from "../Contexts/GlobalAuthContext"

const DropdownStyle = styled.section`
  height: 30px;
  width: fit-content;
  display: flex;
  position: relative;

  .button-text-checkout-active {
    display: flex;
    width: 300px;
    height: 51px;
    justify-content: space-between;
    align-items: center;
    align-items: center;
    padding: 16px;
    background: #ffffff;
    border: 2px solid #007de6;
    box-sizing: border-box;
    border-radius: 5px;
    flex: none;
    flex-grow: 0;
    margin: 4px 0px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  .button-text-checkout {
    display: flex;
    width: 300px;
    height: 51px;
    justify-content: space-between;
    align-items: center;
    align-items: center;
    padding: 16px;
    flex: none;
    flex-grow: 0;
    margin: 4px 0px;
    background: #ffffff;
    border: 1px solid #d8d8d8;
    box-sizing: border-box;
    border-radius: 5px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 14px 0px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  button {
    box-shadow: none;
    background-color: transparent;
    border: none;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #111111;
    flex: none;
    flex-grow: 0;
    margin: 0px 0px;

    .button-text {
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      display: flex;
      align-items: center;
      letter-spacing: 0.5px;
      color: #111111;
    }
  }

  div {
    display: inline-block;
  }
  .symbol-down {
    transform: rotate(-90deg);
    margin-left: 5px;
  }
  .symbol-up {
    transform: rotate(90deg);
    margin-left: 10px;
  }

  .container-checkout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #d8d8d8;
    box-sizing: border-box;
    border-radius: 5px;
    flex: none;
    flex-grow: 0;
    margin: 4px 0px;
    position: absolute;
    top: 45px;
    bottom: -30px;
    left: 5px;
    width: 300px;
    right: 0px;
    height: 176px;
    z-index: 999;

    .on,
    .off {
      margin: 5px 0px;
    }

    .on {
      margin-left: -4px;
      margin-right: 5px;
      padding: 0;
    }

    .off {
      margin-right: 10px;
    }
    .checkout-container,
    .checkout-button {
      margin: 10px 0px;
      height: 32px;
      width: 250px;
      display: flex;
      justify-content: flex-start;
    }
    .inactivee {
      margin-left: 8px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      flex: none;
      flex-grow: 0;
      margin: 0px 12px;
    }
    .activee {
      font-family: Work Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      flex: none;
      flex-grow: 0;
      margin: 0px 12px;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #d8d8d8;
    box-sizing: border-box;
    border-radius: 5px;
    flex: none;
    flex-grow: 0;
    margin: 4px 0px;
    position: absolute;
    top: 35px;
    left: -110px;
    right: 0px;
    width: max-content;
    height: fit-content;
    z-index: 999;

    .logout {
      box-shadow: none;
      border: none;
      background-color: transparent;
      padding: 0;
    }

    .links {
      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      width: fit-content;
      line-height: 19px;
      color: #000000;
      flex: none;
      flex-grow: 0;
      margin: 5px 8px;
      text-decoration: 0;
      width: fit-content;
      white-space: nowrap;
      margin-left: -5px;

      &:hover {
        font-weight: 600;
      }
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

function DropDownButton(props) {
  //states that handles toggle show/hide for button
  const [toggle, setToggle] = useState(false)
  //global context hook
  const { activee } = useContext(GlobalAuthContext)

  return (
    <DropdownStyle>
      <button onClick={() => setToggle(!toggle)}>
        {!props.checkout && (
          <span className="button-text">
            {props.title}
            {toggle === false && <div className="symbol-down">&#8249;</div>}
            {toggle === true && <div className="symbol-up">&#8249;</div>}
          </span>
        )}
        {props.checkout && toggle === true && (
          <span className="button-text-checkout-active">
            {props.title}
            {toggle === false && <div className="symbol-down">&#8249;</div>}
            {toggle === true && <div className="symbol-up">&#8249;</div>}
          </span>
        )}
        {props.checkout && toggle === false && (
          <span className="button-text-checkout">
            {props.title}
            {toggle === false && <div className="symbol-down">&#8249;</div>}
            {toggle === true && <div className="symbol-up">&#8249;</div>}
          </span>
        )}
      </button>
      {toggle === true && !props.checkout && (
        <div className="container">
          {!props.checkout && (
            <Link className="links" to="/app/dashboard">
              Dashboard
            </Link>
          )}
          {!props.checkout && (
            <Link className="links" to="/app/password-change">
              Change Password
            </Link>
          )}
          {!props.checkout && (
            <button
              className="links logout"
              onClick={() => {
                localStorage.clear()
                navigate("/login/")
              }}
            >
              Sign Out
            </button>
          )}
        </div>
      )}
      {toggle === true && props.checkout && (
        <div className="container-checkout">
          {props.checkout && (
            <div className="checkout-container">
              <button onClick={props.action} className="checkout-button">
                {activee === 0 && (
                  <StaticImage
                    src="../images/radio-on.png"
                    width={32}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF", "png"]}
                    placeholder="blurred"
                    loading="eager"
                    className="on"
                    alt="radio button on"
                  />
                )}
                {activee !== 0 && (
                  <StaticImage
                    src="../images/radio-off.png"
                    width={24}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF", "png"]}
                    placeholder="blurred"
                    loading="eager"
                    className="off"
                    alt="radio button off"
                  />
                )}
                {activee === 0 && <span className="activee">PDF Pro Lite</span>}
                {activee !== 0 && (
                  <span className="inactivee">PDF Pro Lite</span>
                )}
              </button>
            </div>
          )}
          {props.checkout && (
            <div className="checkout-container">
              <button onClick={props.action1} className="checkout-button">
                {activee === 1 && (
                  <StaticImage
                    src="../images/radio-on.png"
                    width={32}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF", "png"]}
                    placeholder="blurred"
                    loading="eager"
                    className="on"
                    alt="radio button on"
                  />
                )}
                {activee !== 1 && (
                  <StaticImage
                    src="../images/radio-off.png"
                    width={24}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF", "png"]}
                    placeholder="blurred"
                    loading="eager"
                    className="off"
                    alt="radio button off"
                  />
                )}
                {activee === 1 && <span className="activee">PDF Pro</span>}
                {activee !== 1 && <span className="inactivee">PDF Pro</span>}
              </button>
            </div>
          )}
          {props.checkout && (
            <div className="checkout-container">
              <button onClick={props.action2} className="checkout-button">
                {activee === 2 && (
                  <StaticImage
                    src="../images/radio-on.png"
                    width={32}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF", "png"]}
                    placeholder="blurred"
                    loading="eager"
                    className="on"
                    alt="radio button on"
                  />
                )}
                {activee !== 2 && (
                  <StaticImage
                    src="../images/radio-off.png"
                    width={24}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF", "png"]}
                    placeholder="blurred"
                    loading="eager"
                    className="off"
                    alt="radio button off"
                  />
                )}
                {activee === 2 && (
                  <span className="activee">PDF Pro + OCR</span>
                )}
                {activee !== 2 && (
                  <span className="inactivee">PDF Pro + OCR</span>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </DropdownStyle>
  )
}

DropDownButton.defaultProps = {
  checkout: false,
}
export default DropDownButton
