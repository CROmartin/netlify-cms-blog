import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useState } from "react"

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

  .container-pop {
    height: 390px;
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

const GlanceStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  border-bottom: 1px solid gainsboro;
  padding: 4rem 0;

  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 52px;
    line-height: 58px;
    text-align: center;
    word-wrap: break-word;
  }

  .bold {
    font-style: normal;
    font-weight: 500;
    font-size: 52px;
    line-height: 58px;
    text-align: center;
  }

  .buttons {
    display: flex;
    flex-direction: row;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 210px;
    height: 60px;
  }

  .full {
    background: #007de6;
    box-shadow: 0px 4px 16px #d6dbe3;
    border-radius: 60px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
    margin-right: 1rem;
    cursor: pointer;
    :hover {
      background-color: #00aeff;
    }
  }

  .empty {
    border: 2px solid #007de6;
    box-sizing: border-box;
    border-radius: 60px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #007de6;
    :hover {
      color: #00aeff;
      border: 2px solid #00aeff;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 45px;
      text-align: center;
      color: #111111;
    }

    .empty,
    .full {
      font-weight: 500;
      font-size: 20px;
      line-height: 27px;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 36px;
      text-align: center;
      color: #111111;
      display: flex;
      flex-direction: column;
      margin-bottom: 3rem;
    }

    .empty,
    .full {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      display: flex;
      align-items: center;
      text-align: center;
    }

    .buttons {
      display: flex;
      flex-direction: column;
    }

    .full {
      margin-bottom: 1rem;
    }
  }
`

const Glance = () => {
  const [myPopUp, setMyPopUp] = useState("hide")
  return (
    <div>
      <GlanceStyle>
        <h1>
          <span className="bold">PDF Pro: </span> Features at Glance
        </h1>
        <div className="buttons">
          <Link
            to="#"
            className="full"
            role="popup"
            onClick={() => {
              setMyPopUp("show")
            }}
          >
            Start Free Trial
          </Link>
          <Link className="empty" to="/checkout/">
            Pricing
          </Link>
        </div>
      </GlanceStyle>
      <PopUp myPopUp={myPopUp}>
        <div className="container-pop">
          <div
            className="close"
            role="button"
            tabIndex={0}
            //dodano
            onKeyDown={() => {
              setMyPopUp("hide")
            }}
            //dodano
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
              <input type="email" placeholder="Email Adress" name="email" />
              <button
                type="button"
                onsubmit="return false"
                onClick={() => {
                  const email = document.getElementById("email")
                  console.log(email.value)
                  let d = email.value
                  var xhr = new XMLHttpRequest()

                  xhr.open(
                    "POST",
                    "https://joxergoestopoland.ie/EmailSending/mailPDF.php",
                    true
                  )
                  xhr.setRequestHeader(
                    "Content-type",
                    "application/x-www-form-urlencoded"
                  )

                  xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                      console.log("done.")
                    }
                  }

                  var data = "emailData=" + d

                  xhr.send(data)
                  setMyPopUp("hide")
                }}
              >
                Get Trial
              </button>
            </form>
          </div>
          <div className="red"></div>
        </div>
      </PopUp>
    </div>
  )
}

export default Glance
