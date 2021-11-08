import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { useState } from "react"
import "./layout.css"
import api from "../components/api"

const PopUp = styled.div`
  font-family: "Work Sans", sans-serif;
  display: ${({ myPopUp }) => (myPopUp === "show" ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 15;
  background-color: rgb(34, 34, 34, 0.6);

  .alert-fail {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 384px;
    height: fit-content;
    padding: 8px 16px;
    background: #ffe4e6;
    border-radius: 4px;
    margin: 0px 0px;
    margin-bottom: 0px;
    .alert-img {
      margin-right: 5px !important;
    }
  }

  .alert-success {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 384px;
    height: fit-content;
    padding: 8px 16px;
    background: #00ca42;
    border-radius: 4px;
    margin: 0px 0px;
    margin-bottom: 0px;
    .alert-img {
      margin-right: 5px !important;
    }
  }

  .container-pop {
    /* height: 390px; */
    height: max-content;
    width: 600px;
    background: #ffffff;
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .close {
    position: absolute;
    right: 1rem;
    height: 20px;
    width: 20px;
    z-index: 999;
    top: 1rem;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .text {
    display: flex;
    height: 325px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 36px;
    text-align: center;
    color: #111111;
    position: relative;
    top: 1rem;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 36px;
      text-align: center;
      color: #111111;
    }
  }
  p {
    height: 81px;
    width: 400px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #222222;
    position: relative;
    top: 1rem;
  }

  form {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  input {
    height: 60px;
    width: 350px;
    padding-left: 2.5rem;
    text-align: left;
    background: #ffffff;
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 9999px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #999999;
    outline: none;
    margin-right: 1rem;
    position: relative;
    top: 1rem;
  }
  //dodano

  .newsletter {
    font-size: 14px;
    position: absolute;
    left: 1rem;
    top: -1rem;
    display: inline-block;
    color: #222222;
    cursor: pointer;
  }
  .checkbox {
    height: 18px;
    width: 18px;
    position: absolute;
    top: -0.8rem;
    left: 14.5rem;
    outline: none;
    cursor: pointer;
  }
  //kraj dodanog
  button {
    width: 144px;
    height: 60px;
    background: #00ca42;
    border-radius: 60px;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    justify-content: center;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #ffffff;
    position: relative;
    top: 1rem;
    cursor: pointer;
  }

  .red {
    background: #e44331;
    height: 65px;
    width: 600px;
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 10px 10px;
  }

  @media (max-width: 760px) {
    .container-pop {
      height: 481px;
      width: 334px;
    }

    h1 {
      width: 180px;
      height: 72px;
      font-style: normal;
      font-weight: 300;
      font-size: 32px;
      line-height: 36px;
      text-align: center;
      color: #111111;
      position: relative;
      top: 2rem;

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 36px;
        text-align: center;
        color: #111111;
      }
    }
    p {
      width: 278px;
      height: 96px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #222222;
      position: relative;
      top: 2rem;
    }

    .red {
      width: 334px;
    }

    form {
      display: flex;
      flex-direction: column;
      position: relative;
      top: 3rem;
    }

    input {
      width: 300px;
      height: 50px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      color: #999999;
      margin-bottom: 1rem;
      margin-right: 0;
    }

    button {
      width: 300px;
      height: 50px;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #ffffff;
    }
  }
  @media (max-width: 580px) {
    h1 {
      transform: scale(0.9);
    }
    p {
      top: 3.5rem;
    }
    form {
      top: 4rem;
    }
  }
  @media (max-width: 480px) {
    .checkbox {
      left: 16.2rem;
    }
  }

  @media (max-width: 320px) {
    .container-pop {
      transform: scale(0.8);
    }
  }
`

const HeroStyleRemaster = styled.section`
  font-family: "Work Sans", sans-serif;
  grid-area: 1/1;
  position: relative;
  place-items: center;
  display: grid;
  height: 100%;
  overflow: hidden;
  border-bottom: 1px solid gainsboro;

  .container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "a b";
    height: 80vh;
    width: 100%;

    .a {
      grid-area: a;
      justify-self: flex-end;
      align-self: center;
      position: relative;
    }
    .b {
      grid-area: b;
      align-self: center;
    }
  }
  .main-title {
    width: fit-content;
  }
  .pcIcon {
    transform: scale(1.3);
    pointer-events: none;
  }
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 52px;
    line-height: 58px;
    color: #111111;
  }

  .title-third-line {
    color: #e44331;
  }
  .title-second-line {
    font-weight: 300;
  }

  p {
    display: block;
    color: #222222;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }
  .compatibility {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 27px;
    margin-top: 2rem;
  }

  a {
    box-sizing: border-box;
    border-radius: 9999px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    text-decoration: none;
    text-align: center;
    color: #ffffff;
    width: 11rem;
    padding: 0.8rem 1.5rem;
    margin-right: 1rem;

    &:hover {
      color: white;
    }
  }
  .green {
    background-color: #00ca42;
    border: 3px solid #00ca42;
    :hover {
      background-color: limegreen;
      border: 3px solid limegreen;
    }
  }

  .blue {
    border: 2px solid #007de6;
    box-sizing: border-box;
    color: #007de6;
    :hover {
      color: #00aeff;
      border: 2px solid #00aeff;
    }
  }

  @media (max-width: 2600px) {
    .pcIcon {
      margin-top: 3rem;
    }
  }
  @media (max-width: 1650px) {
    .main-title {
      position: relative;
      left: 5rem;
      transform: scale(0.9);
    }
  }
  @media (max-width: 1500px) {
    .pcIcon {
      margin-top: 0;
    }
    .main-title {
      position: relative;
      left: 3rem;
      transform: scale(0.9);
    }
  }

  @media (max-width: 1300px) {
    overflow-x: hidden;
    .main-title {
      position: relative;
      left: -3.5rem;
      transform: scale(0.9);
    }
    .container {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a b";
      width: fit-content;
    }

    .pcIcon {
      position: relative;
      left: -2rem;
    }
  }
  @media (max-width: 1300px) {
    overflow-x: hidden;
    .main-title {
      position: relative;
      left: -1rem;
    }
  }
  @media (max-width: 1024px) {
    .main-title {
      position: relative;
      top: 3rem;
      left: -1rem;
      transform: scale(0.75);
      width: 500px;
    }
    .container {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a b";
      width: fit-content;
      height: fit-content;
    }

    .pcIcon {
      position: relative;
      left: -3rem;
      transform: scale(2);
    }
  }
  @media (max-width: 768px) {
    .main-title {
      position: relative;
      left: -2.2rem;
      transform: scale(0.6);
      width: 450px;
    }

    .pcIcon {
      position: relative;
      left: -6rem;
      width: 400px;
    }

    p {
      word-wrap: break-word;
    }

    .container {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a b";
      width: fit-content;

      .a {
        z-index: 2px;
      }
    }
  }

  @media (max-width: 640px) {
    .container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0px 0px;
      height: 100%;
      margin-bottom: -15rem;
      grid-template-areas:
        "a"
        "b";
      .a {
        grid-area: a;
        justify-self: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        position: relative;
        top: -10rem;
        left: -2rem;
      }
      .b {
        grid-area: b;
        height: fit-content;
      }
    }
    .pcIcon {
      position: relative;
      top: -10rem;
      left: 0;
      transform: scale(1.2);
    }
    .main-title {
      display: flex;
      flex-direction: column;
      width: 324px;
      transform: scale(0.95);
    }
    a {
      font-size: 18px;
      line-height: 27px;
      display: flex;
      flex-direction: column;
      width: 15rem;
      margin-bottom: 0.5rem;
      transform: scale(0.8);
      margin-left: -1.5rem;
    }
    .windowIcon {
      display: none;
    }
  }
  @media (max-width: 480px) {
    .container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0px 0px;
      height: 100%;
      margin-bottom: -25rem;
      grid-template-areas:
        "a"
        "b";
      .a {
        grid-area: a;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        position: relative;
        top: -4rem;
        left: 0;
      }
      .b {
        grid-area: b;
        height: fit-content;
      }
    }

    h1 {
      font-size: 32px;
      line-height: 36px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }

    a {
      font-size: 18px;
      line-height: 27px;
    }
    .compatibility {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 27px;
    }
    .pcIcon {
      position: relative;
      top: -17rem;
      left: 0;
    }
    .main-title {
      position: relative;
      top: -10rem;
      transform: scale(0.75);
      display: flex;
      flex-direction: column;
    }
    a {
      font-size: 18px;
      line-height: 27px;
      display: flex;
      flex-direction: column;
      width: 15rem;
      margin-bottom: 0.5rem;
      transform: scale(0.8);
      margin-left: -1.5rem;
    }
    .windowIcon {
      display: none;
    }
    .pcIcon {
      width: 375px;
    }
  }
  @media (max-width: 280px) {
    .pcIcon {
      left: -1.5rem;
    }
  }
`

const HeroRemaster = props => {
  const [myPopUp, setMyPopUp] = useState("hide")
  const [fail, setFail] = useState(false)
  const [fail1, setFail1] = useState(false)
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState("")
  return (
    <div
      className="remaster"
      style={{
        display: "grid",
        width: `100%`,
        height: `100%`,
        overflow: `hidden`,
      }}
    >
      <StaticImage
        src="../images/WaveBG.svg"
        width={577}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF", "png"]}
        placeholder="blurred"
        loading="eager"
        className="bg"
        alt="Wave Background"
        style={{
          gridArea: `1/1`,
          padding: `0`,
          margin: `0`,
          justifySelf: `flex-end`,
        }}
      />
      <HeroStyleRemaster>
        <div className="container">
          <div className="a">
            <div className="main-title">
              <h1>
                <span className="title-first-line">PDF PRO:</span> <br></br>
                <span className="title-second-line">The All-In-One</span>
                <br></br>
                <span className="title-third-line">PDF Solution</span>
              </h1>
              <p>
                Working with PDF files has never been easier, from <br></br>
                editing PDF files, to merging, to exporting to Word.
              </p>
              <p>
                We offer an elegant and affordable alternative to Adobe{" "}
                <br></br>
                Acrobat for Windows users, that is trusted by customers{" "}
                <br></br>
                worldwide.
              </p>
              {!props.auth && (
                <Link
                  to="#"
                  className="green"
                  onClick={e => {
                    e.preventDefault()
                    setMyPopUp("show")
                  }}
                >
                  Try PDF Pro
                  <StaticImage
                    src="../images/Windows-icon.png"
                    width={25}
                    quality={95}
                    loading="eager"
                    formats={["AUTO", "WEBP", "AVIF", "png"]}
                    alt="Window Icon"
                    className="windowIcon"
                    placeholder="tracedSVG"
                    style={{
                      position: `relative`,
                      top: `0.3rem`,
                      left: `0.5rem`,
                    }}
                  />
                </Link>
              )}

              {props.auth && (
                <Link to="/app/download" className="green">
                  Download
                  <StaticImage
                    src="../images/Windows-icon.png"
                    width={25}
                    quality={95}
                    loading="eager"
                    formats={["AUTO", "WEBP", "AVIF", "png"]}
                    alt="Window Icon"
                    className="windowIcon"
                    placeholder="tracedSVG"
                    style={{
                      position: `relative`,
                      top: `0.3rem`,
                      left: `0.5rem`,
                    }}
                  />
                </Link>
              )}
              {!props.auth && (
                <Link to="/checkout" className="blue">
                  Get PDF Pro
                </Link>
              )}

              <p className="compatibility">
                Compatible with Windows 10/8/7/XP/Vista
              </p>
            </div>
          </div>
          <div className="b">
            <StaticImage
              src="../images/PC-icon.png"
              placeholder="blurred"
              layout="constrained"
              quality={95}
              loading="eager"
              formats={["AUTO", "WEBP", "AVIF", "png"]}
              alt="PC icon"
              className="pcIcon"
            />
          </div>
        </div>
      </HeroStyleRemaster>
      <PopUp myPopUp={myPopUp}>
        <div className="container-pop">
          <div
            className="close"
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              setMyPopUp("hide")
            }}
            onClick={() => {
              setMyPopUp("hide")
            }}
          >
            <div
              style={{
                background: `rgb(0, 0, 0)`,
                position: `absolute`,
                height: `20px`,
                width: `2px`,
                zIndex: `10`,
                transform: `rotate(45deg)`,
              }}
            ></div>
            <div
              style={{
                background: `rgb(0, 0, 0)`,
                position: `absolute`,
                height: `20px`,
                width: `2px`,
                zIndex: `10`,
                transform: `rotate(-45deg)`,
              }}
            ></div>
          </div>
          <div className="text">
            <h1>
              Try <span>PDF Pro</span> for Free for 15 days!
            </h1>
            <p>
              You will receive a link to download a copy of PDF Pro as well as
              your initial password at the email address provided.
            </p>
            <form action="#">
              <label className="newsletter" htmlFor="checkbox">
                Sign up to the PDF Pro Newsletter
              </label>
              <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                name="subscribe"
              />
              <input
                type="email"
                placeholder="Email Adress"
                id="email"
                name="email"
                onChange={e => {
                  setEmail(e.target.value)
                }}
              />
              <button
                type="button"
                onClick={() => {
                  api
                    .get(
                      `/api/v1/pdfpro/email-on-product/?email=${email}|pdfpro&product_code=pdf`
                    )
                    .then(res => {
                      console.log(res)
                      if (res.data.user_on_product === false) {
                        api
                          .post("/api/v1/pdfpro/trial-license/", {
                            email: email,
                            product_code: "pdf-pro-month",
                            company_code: "pdfpro",
                          })
                          .then(res => {
                            // console.log(res)
                            setSuccess(true)
                          })
                          .catch(err => {
                            console.log(err)
                            setFail1(false)
                            setFail(true)
                          })
                      } else {
                        setFail(false)
                        setFail1(true)
                      }
                    })
                    .catch(err => {
                      console.log(err)
                      setFail(true)
                    })
                }}
              >
                Get Trial
              </button>
            </form>
            {success && (
              <div className="alert-fail">
                <StaticImage
                  src="../images/alert-fail.png"
                  width={17}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "png"]}
                  loading="eager"
                  placeholder="blurred"
                  alt="fail-alert"
                  className="alert-img"
                />
                Successfully sent!
              </div>
            )}
            {fail && (
              <div className="alert-fail">
                <StaticImage
                  src="../images/alert-fail.png"
                  width={17}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "png"]}
                  loading="eager"
                  placeholder="blurred"
                  alt="fail-alert"
                  className="alert-img"
                />
                Incorrect email!Try again!
              </div>
            )}
            {fail1 && (
              <div className="alert-fail">
                <StaticImage
                  src="../images/alert-fail.png"
                  width={17}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "png"]}
                  loading="eager"
                  placeholder="blurred"
                  alt="fail-alert"
                  className="alert-img"
                />
                Email is already in use!
              </div>
            )}
          </div>
          <div className="red"></div>
        </div>
      </PopUp>
    </div>
  )
}

export default HeroRemaster
