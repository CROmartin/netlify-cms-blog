import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { useState } from "react"
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

const RevolutionizeStyle = styled.section`
  grid-area: 1/1;
  position: relative;
  place-items: center;
  display: grid;

  @media (max-width: 320px) {
    width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @media (max-width: 480px) {
      margin: 0.5rem;
      transform: scale(0.85);
      align-items: flex-start;
    }
    @media (max-width: 320px) {
      width: 100%;
    }

    h1 {
      text-align: center;
      font-style: normal;
      word-wrap: break-word;
      font-weight: 300;
      font-size: 36px;
      line-height: 46px;
      color: #111111;
      @media (max-width: 480px) {
        font-size: 28px;
        line-height: 36px;
        text-align: left;
      }
    }

    span {
      font-weight: 500;
    }

    h2 {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      color: #111111;
      @media (max-width: 480px) {
        font-size: 20px;
        line-height: 26px;
        text-align: left;
      }
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      color: #222222;

      @media (max-width: 480px) {
        font-size: 14px;
        line-height: 21px;
        text-align: left;
      }
    }

    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      align-items: center;

      @media (max-width: 480px) {
        flex-direction: column;
      }

      a {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
        text-decoration: none;
        color: #ffffff;
        text-align: center;
        width: 11rem;
        padding: 0.8rem 1.5rem;
        margin-right: 1rem;
        margin-bottom: 1rem;

        @media (max-width: 480px) {
          font-size: 18px;
          line-height: 27px;
          width: 13rem;
          .windowIcon {
            display: none;
          }
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
        box-sizing: border-box;
        border: 2px solid #007de6;
        color: #007de6;
        :hover {
          color: #00aeff;
          border: 2px solid #00aeff;
        }
      }
    }
  }

  .revolutionizeBG {
    @media (max-width: 480px) {
      width: 380px !important;
    }
  }
`

const Revolutionize = props => {
  const [myPopUp, setMyPopUp] = useState("hide")
  const [fail, setFail] = useState(false)
  const [fail1, setFail1] = useState(false)
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState("")
  return (
    <div style={{ display: "grid", borderBottom: `1px solid gainsboro` }}>
      <StaticImage
        src="../images/revolutionize-bg.svg"
        width={1920}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF", "PNG"]}
        alt="Organization Icon"
        className="revolutionizeBG"
        placeholder="blurred"
        style={{
          gridArea: "1/1",
          padding: `0`,
          margin: `0`,
        }}
      />
      <RevolutionizeStyle>
        <div className="container">
          <h1>
            Ready to Revolutionize <br></br> the Way You{" "}
            <span>Work with PDF</span> ?
          </h1>
          <h2>
            Get Started with <span>PDF Pro</span> Today!
          </h2>
          <p>
            You may evaluate PDF Pro for free for 15 days without any obligation
            to purchase. During the evaluation,<br></br> a watermark will be
            added to any document that was created or edited. You will need to
            upgrade to a commercial license to remove this constraint.
          </p>
          <div className="row">
            {!props.auth && (
              <Link
                to="#"
                className="green"
                role="popup"
                onClick={e => {
                  e.preventDefault()
                  setMyPopUp("show")
                }}
              >
                Try PDF Pro
                <StaticImage
                  className="windowIcon"
                  src="../images/Windows-icon.png"
                  width={25}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Window Icon"
                  placeholder="blurred"
                  style={{
                    position: `relative`,
                    left: `0.5rem`,
                  }}
                />
              </Link>
            )}
            {props.auth && (
              <Link to="/app/download" className="green">
                Download
                <StaticImage
                  className="windowIcon"
                  src="../images/Windows-icon.png"
                  width={25}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Window Icon"
                  placeholder="blurred"
                  style={{
                    position: `relative`,
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
          </div>
        </div>
      </RevolutionizeStyle>
      <PopUp myPopUp={myPopUp}>
        <div className="container-pop">
          <div
            className="close"
            role="button"
            onKeyDown={() => {
              setMyPopUp("hide")
            }}
            tabIndex={0}
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
                name="email"
                onChange={e => setEmail(e.target.value)}
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
                            console.log(res)
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

export default Revolutionize
