import React from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import { useState } from "react"
import api from "../components/api"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Style = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 520px;
    height: 376px;
    background: #ffffff;
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .form-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 268px;
      width: 384px;

      .form-name {
        align-self: center;
        width: 295px;
        height: 40px;
        font-family: Work Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 40px;
        text-align: center;
        color: #111111;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 32px 0px;
      }

      label {
        align-self: flex-start;
        font-family: Work Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #111111;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 8px 0px;
      }

      input {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 16px;
        width: 384px;
        height: 51px;
        border: 1px solid #d8d8d8;
        box-sizing: border-box;
        border-radius: 5px;
        flex: none;
        align-self: stretch;
        flex-grow: 0;
        margin: 8px 0px;
      }
      .alert-fail {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 384px;
        height: 40px;
        padding: 8px 16px;
        background: #ffe4e6;
        border-radius: 4px;
        flex-grow: 1;
        margin: 0px 0px;
        margin-bottom: 0px;
        .alert-img {
          margin-right: 5px !important;
        }
      }
      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px;
        width: 384px;
        height: 50px;
        background: #00ca42;
        color: white;
        border-radius: 60px;
        border: none;
        flex: none;
        align-self: stretch;
        flex-grow: 0;
        margin: ${({ fail }) => (fail ? true : "12px 0px")};
      }
      .back {
        width: 115px;
        height: 21px;
        font-family: Work Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #007de6;
        flex: none;
        flex-grow: 0;
        margin: 24px 0px;
      }
    }
    .success-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 520px;
      height: 376px;
      background: #ffffff;
      box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
      border-radius: 10px;

      .success-name {
        width: 305px;
        height: 40px;
        font-family: Work Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 40px;
        text-align: center;
        color: #111111;
        flex: none;
        flex-grow: 0;
        margin: 24px 0px;
      }

      .success-text {
        width: 305px;
        height: 54px;
        font-family: Work Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
        color: #222222;
        flex: none;
        align-self: center;
        flex-grow: 0;
        margin: 24px 0px;
      }
    }
  }
`

function CreateAccount() {
  //state that manages if the password reset request is successfully sent
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const [fail1, setFail1] = useState(false)
  //states
  const [email, setEmail] = useState(undefined)

  //checking if window exsist - because of compiler
  if (typeof window !== "undefined") {
    if (JSON.parse(localStorage.getItem("isLogged")) === true) {
      navigate("/app/dashboard")
    }
  }

  return (
    <>
      <Seo title="Create Account" />
      <Style>
        <div className="card-container">
          {!success && (
            <div className="form-container">
              <h1 className="form-name">Create Account</h1>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
                onKeyPress={e => {
                  if (e.key === "Enter") {
                    api
                      .post("/api/v1/auth/password-reset/", {
                        email: email + "|pdfpro",
                      })
                      .then(res => {
                        console.log(res)
                        setSuccess(true)
                      })
                      .catch(err => {
                        console.log(err)
                        setFail(true)
                      })
                  }
                }}
              />
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
                  Incorrect email! Try again.
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
              <button
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
                    })
                }}
              >
                Create Account
              </button>
              <Link className="back" to="/login">
                Back to login
              </Link>
            </div>
          )}
          {success && (
            <div className="success-box">
              <StaticImage
                src="../images/success-img.png"
                width={33}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "png"]}
                loading="eager"
                placeholder="blurred"
                alt="success-img"
              />
              <h2 className="success-name">Check your inbox</h2>
              <span className="success-text">
                You will recieve your initial password!
              </span>
            </div>
          )}
        </div>
      </Style>
    </>
  )
}

export default CreateAccount
