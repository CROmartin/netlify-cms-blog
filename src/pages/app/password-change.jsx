import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import api from "../../components/api"
import { useState } from "react"
import Seo from "../../components/seo"
//context hook
import { CheckoutContext } from "../../Contexts/CheckoutContext"
import { useContext } from "react"

const Style = styled.section`
  font-family: "Work Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 81.1vh;
  .form-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 520px;
    height: 680px;
    background: #ffffff;
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    z-index: -2;
    margin: 40px 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      text-align: left;
      margin-bottom: 32px;
    }
    label {
      margin-bottom: 16px;
      width: max-content;
      text-align: left;
    }
    button {
      width: 100px;
    }
  }

  .change-pass-form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .title {
    width: 379px;
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
    margin: 24px 0px;
  }

  .change-pass-p {
    width: 384px;
    height: 81px;
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

  .row-pc {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    label {
      text-align: left;
      width: max-content;
      align-self: flex-start;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #111111;
    }
  }

  .hide {
    display: none;
  }

  .change-pass-link1 {
    width: 462px;
  }
  .change-pass-link2 {
    width: 462px;
    margin-bottom: 32px;
  }

  a {
    width: 462px;
    text-align: left;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-self: flex-start;
    padding: 16px;
    width: 384px;
    height: 51px;
    border: 1px solid #d8d8d8;
    box-sizing: border-box;
    border-radius: 5px;
    flex: none;
    flex-grow: 0;
    margin: 8px 0px;
  }

  .change-pass {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: 384px;
    height: 50px;
    background: #00ca42;
    border-radius: 60px;
    flex: none;
    align-self: center;
    flex-grow: 0;
    margin: 24px 0px;
    margin-left: 30px;
    border: 2px solid #00ca42;

    .change-pass-text {
      width: 141px;
      height: 18px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      color: #ffffff;
      flex: none;
      flex-grow: 0;
      margin: 0px 10px;
    }
  }
`

const ChangePass = () => {
  //user info - basic logic without state hook because you don't need to display that to the user
  let password

  //user auth context states
  const { isLogged } = useContext(CheckoutContext)

  //checking password before setting new one
  const [checkPassword, setCheckPassword] = useState(null)
  const [checkNewPassword, setCheckNewPassword] = useState(null)
  const [oldPassword, setOldPassword] = useState(null)

  return (
    <Style>
      <Seo title="Change Password" />
      {isLogged === true && (
        <div className="form-layout">
          <div className="title change-pass-title">Select New Password</div>
          <div className="change-pass-p">
            Please enter a new password. It must be a minimum of 6 character,
            and contain at least one number.
          </div>
          <form className="change-pass-form">
            <div className="row-pc">
              <label htmlFor="password-old">Old Password:</label>
              <input
                type="password"
                placeholder="Old password"
                id="password-old"
                name="password-old"
                className="new-pass"
                onChange={e => {
                  setOldPassword(e.target.value)
                }}
                required
              />
            </div>
            <div className="row-pc">
              <label htmlFor="password-new">New Password:</label>
              <input
                type="password"
                placeholder="New password"
                id="password-new"
                name="password-new"
                className="new-pass"
                onChange={e => {
                  setCheckPassword(e.target.value)
                }}
                required
              />
            </div>

            <div className="row-pc">
              <label htmlFor="password-repeat">Confirm New Password:</label>
              <input
                type="password"
                placeholder="Repeat password"
                id="password-repeat"
                name="password-repeat"
                className="repeat-pass"
                onChange={e => {
                  setCheckNewPassword(e.target.value)
                }}
                required
              />
            </div>
            <button
              className="change-pass"
              onClick={e => {
                e.preventDefault()
                if (checkPassword === checkNewPassword) {
                  password = checkNewPassword

                  api
                    .post(`/api/v1/rest-auth/password/change/`, {
                      old_password: oldPassword,
                      new_password1: password,
                      new_password2: password,
                    })
                    .then(res => {
                      return res
                    })
                    .catch(err => console.log(err))
                }
              }}
            >
              <span className="change-pass-text"> Submit</span>
            </button>
          </form>
        </div>
      )}
    </Style>
  )
}

export default ChangePass
