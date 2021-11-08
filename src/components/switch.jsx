import React from "react"
import styled from "styled-components"
import { useState } from "react"
import { Helmet } from "react-helmet"
import Monthly from "./monthly"
import Annual from "./annual"

const SwitchStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .row1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
    margin-top: 3.5rem;
  }

  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 52px;
    line-height: 58px;
    text-align: center;
    color: #111111;

    .headline {
      font-weight: 500;
    }
  }

  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #222222;
  }

  .dual-button {
    display: flex;
    box-sizing: border-box;
    border-radius: 60px;
    width: 280px;
    height: 42px;
    margin: 2rem 0;
    margin-bottom: 6rem;

    .annual {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      width: 140px;
      border-right: 2px solid #666666;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      border-top-left-radius: 60px;
      border-bottom-left-radius: 60px;
      border: 2px solid #666666;
      cursor: pointer;
    }
    .monthly {
      display: flex;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      width: 140px;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      border: 2px solid #666666;
      border-top-right-radius: 60px;
      border-bottom-right-radius: 60px;
      cursor: pointer;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    color: #111111;
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
      line-height: 45px;
    }

    h2 {
      font-size: 18px;
      line-height: 27px;
    }

    .dual-button {
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 4rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 32px;
      line-height: 36px;
    }
    h2 {
      font-size: 16px;
      line-height: 24px;
    }

    .dual-button {
      width: 128px;
      height: 36px;

      .annual {
        width: 64px;
        height: 32px;
        font-size: 16px;
        line-height: 27px;
      }
      .monthly {
        width: 63px;
        height: 32px;
        font-size: 16px;
        line-height: 27px;
      }
    }
  }
`

const Switch = () => {
  const [mySubscription, setMySubscription] = useState("Annual")

  return (
    <div>
      <SwitchStyle>
        <Helmet>
          <script
            id="fsc-api"
            src="https://d1f8f9xcsvx3ha.cloudfront.net/sbl/0.8.5/fastspring-builder.min.js"
            type="text/javascript"
            data-storefront="pdf-pro.test.onfastspring.com/popup-pdf-pro"
            defer
          ></script>
        </Helmet>
        <div className="container">
          <div className="row1">
            <h1>
              <span className="headline">PDF Pro</span> Plans and Pricing
            </h1>
            <h2>Choose the All-in-One PDF Solution for Windows</h2>
            <div className="dual-button" role="group" ariaLabel="Subscriptions">
              <button
                type="button"
                aria-label="Annual subscription"
                className="annual"
                onClick={() => {
                  setMySubscription("Annual")
                }}
                style={{
                  backgroundColor:
                    mySubscription === "Annual" ? "#666666" : "white",
                  color: mySubscription === "Annual" ? "white" : "#666666",
                }}
              >
                Annual
              </button>
              <button
                type="button"
                ariaLabel="Annual subscription"
                className="monthly"
                onClick={() => {
                  setMySubscription("Monthly")
                }}
                style={{
                  backgroundColor:
                    mySubscription === "Monthly" ? "#666666" : "white",
                  color: mySubscription === "Monthly" ? "white" : "#666666",
                }}
              >
                Monthly
              </button>
            </div>
            <p>{mySubscription === "Annual" && <Annual></Annual>}</p>
            <p>{mySubscription === "Monthly" && <Monthly></Monthly>}</p>
          </div>
        </div>
      </SwitchStyle>
    </div>
  )
}

export default Switch
