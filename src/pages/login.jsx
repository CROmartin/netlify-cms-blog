import React from "react"
import { Link, navigate } from "gatsby"
import Seo from "../components/seo"
import { useState } from "react"
import Axios from "axios"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
//Context hook
import { useContext } from "react"
import { GlobalAuthContext } from "../Contexts/GlobalAuthContext"

//css layout for login
const LoginStyle = styled.section`
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: center;
  align-items: center;

  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 520px;
    height: 500px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .form-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 384px;

      .form-name {
        align-self: center;
        width: 95px;
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
        margin: 8px 0px;
      }

      input {
        width: 384px;
        height: 51px;
        left: 0px;
        top: 27px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #999999;
        border: 1px solid #d8d8d8;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 0px 20px;
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
        margin-bottom: 5px;
        .alert-img {
          margin-right: 5px !important;
        }
      }
      .forgot-password {
        align-self: flex-end;
        font-family: Work Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #007de6;
        text-decoration: none;
      }
      .register {
        color: #007de6;
        margin-left: 5px;
      }
    }
    button {
      color: white;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px;
      width: 384px;
      height: 50px;
      left: 0px;
      top: 226px;
      background: #00ca42;
      border-radius: 60px;
      flex: none;
      align-self: center;
      flex-grow: 0;
      margin: 16px 0px;
      border: none;
    }

    span {
      width: 286px;
      height: 21px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #222222;
      flex: none;
      flex-grow: 0;
      margin: 24px 0px;
    }
  }
`

function Login() {
  //states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //showing the user that the wrong credentials were inserted
  const [fail, setFail] = useState(false)

  //Global context hook
  const { setIsLoggedIn, setUser, setAuthNumber } = useContext(
    GlobalAuthContext
  )

  // you cant use that in server side - change it with state managment library functions or react hooks
  if (typeof window !== "undefined") {
    if (JSON.parse(localStorage.getItem("isLogged")) === true) {
      navigate("/app/dashboard")
    }
  }

  function login(user, pass) {
    //passing request - this is exception - all others go with /components/api.js
    Axios.post("https://users.licensespring.com/api/v1/auth/login/", {
      email: user + "|pdfpro",
      password: pass,
    })
      .then(response => {
        //delete console.log later in the process and add something that will show if the user is or isn't logged in
        //you can't use local storage in production version - find another solution
        // console.log(response)
        localStorage.setItem("isLogged", JSON.stringify(true))
        localStorage.setItem("isLoggedIn", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
        localStorage.setItem(
          "numberOfLicenses",
          JSON.stringify(response.data.user.number_of_licenses)
        )
        setAuthNumber(response.data.user.number_of_licenses)
        setIsLoggedIn(true)
        setUser(response.data.user.first_name)
        navigate("/app/dashboard")
      })
      .catch(error => {
        //delete console log and replace it later with the error message
        console.log(error)
        setFail(true)
      })
  }
  return (
    <>
      <Seo title="Login" />
      <LoginStyle>
        <div className="card-container">
          <div className="form-container">
            <h1 className="form-name">Login</h1>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              onChange={e => {
                setPassword(e.target.value)
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
                  style={{
                    gridArea: `1/1`,
                    padding: `0`,
                    margin: `0`,
                    justifySelf: `flex-end`,
                  }}
                />
                Incorrect email or password! Try again.
              </div>
            )}
            <Link className="forgot-password" to="/reset-password">
              Forgot password?
            </Link>
          </div>
          <button
            type="button"
            onClick={e => {
              e.preventDefault()
              login(email, password)
            }}
          >
            Log In
          </button>
          <span>
            Don't have an account?
            {/* change span to Link when you create /register route */}
            <Link
              // remove this inline style when you remove bootstrap
              style={{
                color: `#007de6`,
                marginLeft: `5px`,
                cursor: `pointer`,
                textDecoration: `none`,
              }}
              className="register"
              to="/create-account"
            >
              Register
            </Link>
          </span>
        </div>
      </LoginStyle>
    </>
  )
}

export default Login
