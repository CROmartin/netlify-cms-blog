import React from "react"
import Seo from "../../components/seo"
import { Link, navigate } from "gatsby"
import styled from "styled-components"
import { useState, useEffect } from "react"
import PayButton from "../../components/payButton"
import api from "../../components/api"
import { StaticImage } from "gatsby-plugin-image"
//Context hook
import { CheckoutContext } from "../../Contexts/CheckoutContext"
import { useContext } from "react"

//popup design
const OpenPopUpStyle = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgb(34, 34, 34, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  .popup-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 520px;
    height: 376px;
    background: #ffffff;
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .popup-text {
      width: 395px;
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

    .green {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 12px 24px;
      width: 160px;
      height: 42px;
      background: rgb(0, 202, 66);
      border-radius: 60px;
      border: 2px solid rgb(0, 202, 66);
      margin-bottom: 20px;
      cursor: pointer;
      text-decoration: none;
      margin: 12px 0px;

      .green-text {
        width: 112px;
        height: 18px;
        font-family: Work Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        text-align: center;
        color: white;
        flex: none;
        flex-grow: 0;
      }

      :hover {
        background-color: rgb(50, 205, 50);
      }
    }
  }
`

//main design CSS
const DashboardStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  overflow: hidden !important;

  .alert-success {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 384px;
    height: fit-content;
    padding: 8px 16px;
    background: rgba(0, 202, 66, 0.8);
    border-radius: 4px;
    margin: 0px 0px;
    margin-bottom: 0px;
    align-self: center;
    justify-self: center;
    color: white;
    margin-top: -30px;
    margin-bottom: 15px;
    .alert-img {
      margin-right: 5px !important;
    }
  }

  .holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    width: 99vw;
  }

  .current {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 24px;
    width: 160px;
    height: 42px;
    background: #c9c9c9;
    border-radius: 60px;
    border: 2px solid #c9c9c9;
    margin: 12px 0px;

    cursor: pointer;
    text-decoration: none;

    .current-text {
      width: 112px;
      height: 18px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      color: #111111;
      flex: none;
      flex-grow: 0;
    }
  }

  .cancel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    width: 210px;
    height: 42px;
    background-color: transparent;
    border: 2px solid #007de6;
    box-sizing: border-box;
    border-radius: 60px;

    &:hover {
      border: 2px solid #005fe6;

      .cancel-text {
        color: #005fe6;
      }
    }

    .cancel-text {
      width: 178px;
      height: 18px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      color: #007de6;
      flex: none;
      flex-grow: 0;
      margin: 0px 10px;
    }
  }

  .row1 {
    align-self: flex-end;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 73%;
    height: 90px;
    margin-top: -1rem;
    margin-bottom: -1.3rem;
    .dual-button {
      position: relative;
      top: -5px;
      margin-right: 15%;
      width: 280px;
      height: 42px;
      border-radius: 60px 0px 0px 60px;
      z-index: 5;
    }

    .component-name {
      width: 656px;
      height: 36px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 36px;
      color: #000000;
    }
  }
  .green {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 24px;
    width: 160px;
    height: 42px;
    background: rgb(0, 202, 66);
    border-radius: 60px;
    border: 2px solid rgb(0, 202, 66);
    margin-bottom: 20px;
    cursor: pointer;
    text-decoration: none;
    margin: 12px 0px;

    .green-text {
      width: 112px;
      height: 18px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      color: white;
      flex: none;
      flex-grow: 0;
    }

    :hover {
      background-color: rgb(50, 205, 50);
    }
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

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    transform: translateX(20%);
    width: 1075px;
    height: fit-content;
  }

  .row2 {
    display: flex;
    transform: translate(-10%, -5%);
    width: 100%;
    height: fit-content;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: -75px;
  }

  .columns {
    transform: scale(0.7);
    width: 384px;
    height: fit-content;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    border-radius: 10px;
    margin-right: -5rem;
    position: relative;
    z-index: 2;

    :last-of-type {
      margin-right: 0;
    }
  }

  .columnMP {
    :after {
      content: "Your Current Plan";
      position: absolute;
      display: flex;
      justify-content: center;
      top: -3rem;
      left: 3rem;
      right: 3rem;
      bottom: 99%;
      background-color: #e44331;
      z-index: -1;
      background: #e44331;
      border-radius: 10px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
  .top {
    background-color: #fbfbfb;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 61px;
  }

  .column-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #222222;
    margin-bottom: 0;
  }

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #222222;
    margin-bottom: 0.5rem;
  }

  .price {
    padding: 1rem 0;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 36px;
    text-align: center;
    color: #111111;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .tick {
    color: #00ca42;
    font-weight: 700;
    margin: 0px 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }

  .pcross {
    color: rgba(34, 34, 34, 0.3);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }
  .cross {
    color: rgba(34, 34, 34, 0.3);
    font-weight: 700;
    margin: 0px 10px;
  }

  p {
    :last-of-type {
      margin-bottom: 2rem;
    }
  }

  .row3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    transform: translate(-10%, -10%);
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  @media (max-width: 1024px) {
    .row2 {
      flex-direction: column;
    }
    .columns {
      margin-right: 0;
      margin-bottom: 2rem;
      :first-of-type {
        margin-bottom: 6rem;
      }

      :last-of-type {
        margin-bottom: 0rem;
      }
    }
  }

  @media (max-width: 480px) {
    .columns {
      width: 311px;
      margin-right: 0;
      margin-bottom: 2rem;

      :first-of-type {
        margin-bottom: 6rem;
      }

      :last-of-type {
        margin-bottom: 0rem;
      }
    }

    p,
    .tick,
    .pcross,
    .cross {
      font-size: 15px;
      line-height: 27px;
    }
  }

  @media (max-width: 320px) {
    .columns {
      width: 220px;
    }
  }
`

function ManageSubscription() {
  const [accountType, setAccountType] = useState(null)
  const [plan, setPlan] = useState(null)
  //switch between annual and monthly
  const [mySwitch, setMySwitch] = useState(undefined)

  //state that regulates popup for upgrade/downgrade subscription
  const [openPopUp, setOpenPopUp] = useState(false)
  //manages the product to which we are switching
  const [switchProduct, setSwitchProduct] = useState("")
  //manages path to the product
  const [switchPath, setSwitchPath] = useState("")
  //tracks whether current plan has changed
  const [currentPlan, setCurrentPlan] = useState(0)
  //state that manages if subscription is canceled or something went wrong
  const [success, setSuccess] = useState(false)

  //context hook
  const {
    subscriptionID,
    isLogged,
    activeLicenses,
    planType,
    setPlanType,
    subscriptionPeriod,
    setSubscriptionPeriod,
    number,
    setNumber,
  } = useContext(CheckoutContext)
  //all user info
  const [data, setData] = useState(undefined)

  //variable that stores license ID for which we check custom fields
  let CustomFieldsLicenseID

  useEffect(() => {
    if (planType === "") {
      function GetCustomFields() {
        //api request that fetches custom fields values
        api
          .get(
            `/api/v1/license-custom-fields/?license=${CustomFieldsLicenseID}`
          )
          .then(response => {
            // console.log(response)
            if (response.data.results[0].value === "monthly") {
              setSubscriptionPeriod("Month")
            } else if (response.data.results[0].value === "annual") {
              setSubscriptionPeriod("Year")
            }
            setCurrentPlan(currentPlan + 1)
          })
          .catch(err => console.log(err))
      }

      api
        .get("/api/v1/licenses/")
        .then(response => {
          // console.log(response)
          CustomFieldsLicenseID = response.data.results[0].id
          if (response.data.results[0].product_features.length === 2) {
            setPlanType("PDF Pro + OCR")
          } else if (response.data.results[0].product_features.length === 1) {
            setPlanType("PDF Pro")
          } else if (response.data.results[0].product_features.length === 0) {
            setPlanType("PDF Pro Lite")
          }
          localStorage.setItem(
            "plan",
            JSON.stringify(response.data.results[0].product.product_name)
          )
          //calling GetCustomFields function
          GetCustomFields()
        })
        .catch(err => {
          console.log(err.detail)
          localStorage.clear()
          navigate("/login")
        })
    }
  }, [planType, subscriptionPeriod])

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("user"))
    setAccountType(info.is_manager)
    setData(info)

    if (planType === "PDF Pro + OCR" && subscriptionPeriod === "Month") {
      setMySwitch("Monthly")
      setPlan(6)
    } else if (planType === "PDF Pro" && subscriptionPeriod === "Month") {
      setMySwitch("Monthly")
      setPlan(5)
    } else if (planType === "PDF Pro Lite" && subscriptionPeriod === "Month") {
      setMySwitch("Monthly")
      setPlan(4)
    } else if (planType === "PDF Pro + OCR" && subscriptionPeriod === "Year") {
      setMySwitch("Annual")
      setPlan(3)
    } else if (planType === "PDF Pro" && subscriptionPeriod === "Year") {
      setMySwitch("Annual")
      setPlan(2)
    } else if (planType === "PDF Pro Lite" && subscriptionPeriod === "Year") {
      setMySwitch("Annual")
      setPlan(1)
    }
  }, [planType, subscriptionPeriod])

  return (
    <div>
      <Seo title="Manage Subscription" />
      {isLogged === true && planType !== "" && plan !== null && (
        <DashboardStyle>
          <div className="holder">
            <div className="row1">
              <h1 className="component-name">Manage Subscription</h1>
              <div
                className="dual-button"
                role="group"
                aria-label="Subscriptions"
              >
                <button
                  type="button"
                  aria-label="Annual subscription"
                  className="annual"
                  onClick={() => {
                    setMySwitch("Annual")
                  }}
                  style={{
                    backgroundColor:
                      mySwitch === "Annual" ? "#666666" : "white",
                    color: mySwitch === "Annual" ? "white" : "#666666",
                  }}
                >
                  Annual
                </button>
                <button
                  type="button"
                  aria-label="Annual subscription"
                  className="monthly"
                  onClick={() => {
                    setMySwitch("Monthly")
                  }}
                  style={{
                    backgroundColor:
                      mySwitch === "Monthly" ? "#666666" : "white",
                    color: mySwitch === "Monthly" ? "white" : "#666666",
                  }}
                >
                  Monthly
                </button>
              </div>
            </div>
            <div className="container">
              {mySwitch === "Annual" && (
                <div className="row2">
                  {plan === 1 && (
                    <div className="columns columnMP">
                      <div className="top">
                        <h2>PDF Pro Lite</h2>
                      </div>

                      <div className="column-container">
                        <span className="price">$5</span>
                        <h4>per month</h4>
                        <h3>$60 annualy</h3>
                        {activeLicenses !== 0 && (
                          <button className="current">
                            <span className="current-text">Current</span>
                          </button>
                        )}
                        {number < 2 && activeLicenses === 0 && (
                          <PayButton
                            className="green"
                            name="Current"
                            value="pdf-lite-a"
                            email={data.true_email}
                            firstName={data.first_name}
                            lastName={data.last_name}
                          ></PayButton>
                        )}
                        {number > 1 && activeLicenses === 0 && (
                          <Link
                            to="/app/checkout-new1"
                            state={{
                              product: "PDF Pro Lite",
                              cost: 60,
                              period: "Year",
                              productCode: "pdf-lite-a",
                              billing: "annual",
                            }}
                            className="current"
                          >
                            <span className="current-text">Current</span>
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className="tick">&#128504;</span> Create and Merge
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Export to Word,
                        Excel, Powerpoint
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Secure &amp;
                        Sign PDF Files
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Scan to PDF
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Compress,
                        flatten, optimize
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Add Bates
                        Numbering
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Archive with
                        PDF/A
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Edit Text
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Edit Images
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Optical Character
                        Recognition (OCR)
                      </p>
                    </div>
                  )}
                  {plan !== 1 && (
                    <div className="columns">
                      <div className="top">
                        <h2>PDF Pro Lite</h2>
                      </div>

                      <div className="column-container">
                        <span className="price">$5</span>
                        <h4>per month</h4>
                        <h3>$60 annualy</h3>
                        {activeLicenses !== 0 && (
                          <button
                            className="green"
                            onClick={() => {
                              setSwitchProduct("PDF Pro Lite")
                              setSwitchPath("pdf-lite-a")
                              setOpenPopUp(true)
                            }}
                          >
                            <span className="green-text">Switch</span>
                          </button>
                        )}
                        {number < 2 && activeLicenses === 0 && (
                          <PayButton
                            className="green"
                            name="Switch"
                            value="pdf-lite-a"
                            email={data.true_email}
                            firstName={data.first_name}
                            lastName={data.last_name}
                          ></PayButton>
                        )}
                        {number > 1 && activeLicenses === 0 && (
                          <Link
                            to="/app/checkout-new1"
                            state={{
                              product: "PDF Pro Lite",
                              cost: 60,
                              period: "Year",
                              productCode: "pdf-lite-a",
                              billing: "annual",
                            }}
                            className="green"
                          >
                            <span className="green-text">Switch</span>
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className="tick">&#128504;</span> Create and Merge
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Export to Word,
                        Excel, Powerpoint
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Secure &amp;
                        Sign PDF Files
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Scan to PDF
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Compress,
                        flatten, optimize
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Add Bates
                        Numbering
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Archive with
                        PDF/A
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Edit Text
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Edit Images
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Optical Character
                        Recognition (OCR)
                      </p>
                    </div>
                  )}

                  {plan === 2 && (
                    <div className="columns columnMP">
                      <div className="top">
                        <h2>PDF Pro</h2>
                      </div>

                      <div className="column-container">
                        <span className="price">$8</span>
                        <h4>per month</h4>
                        <h3>$96 annualy</h3>
                        {activeLicenses !== 0 && (
                          <button className="current">
                            <span className="current-text">Current</span>
                          </button>
                        )}
                        {number < 2 && activeLicenses === 0 && (
                          <PayButton
                            className="green"
                            name="Current"
                            value="pdf-pro-annual"
                            email={data.true_email}
                            firstName={data.first_name}
                            lastName={data.last_name}
                          ></PayButton>
                        )}
                        {number > 1 && activeLicenses === 0 && (
                          <Link
                            to="/app/checkout-new1"
                            state={{
                              product: "PDF Pro",
                              cost: 96,
                              period: "Year",
                              productCode: "pdf-pro-annual",
                              billing: "annual",
                            }}
                            className="current"
                          >
                            <span className="current-text">Current</span>
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className="tick">&#128504;</span> Create and Merge
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Export to Word,
                        Excel, Powerpoint
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Secure &amp;
                        Sign PDF Files
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Scan to PDF
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Compress,
                        flatten, optimize
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Add Bates
                        Numbering
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Archive with
                        PDF/A
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Text
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Images
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Optical Character
                        Recognition (OCR)
                      </p>
                    </div>
                  )}

                  {plan !== 2 && (
                    <div className="columns">
                      <div className="top">
                        <h2>PDF Pro</h2>
                      </div>

                      <div className="column-container">
                        <span className="price">$8</span>
                        <h4>per month</h4>
                        <h3>$96 annualy</h3>
                        {activeLicenses !== 0 && (
                          <button
                            className="green"
                            onClick={() => {
                              setSwitchProduct("PDF Pro")
                              setSwitchPath("pdf-pro-annual")
                              setOpenPopUp(true)
                            }}
                          >
                            <span className="green-text">Switch</span>
                          </button>
                        )}
                        {number < 2 && activeLicenses === 0 && (
                          <PayButton
                            className="green"
                            name="Switch"
                            value="pdf-pro-annual"
                            email={data.true_email}
                            firstName={data.first_name}
                            lastName={data.last_name}
                          ></PayButton>
                        )}
                        {number > 1 && activeLicenses === 0 && (
                          <Link
                            to="/app/checkout-new1"
                            state={{
                              product: "PDF Pro",
                              cost: 96,
                              period: "Year",
                              productCode: "pdf-pro-annual",
                              billing: "annual",
                            }}
                            className="green"
                          >
                            <span className="green-text">Switch</span>
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className="tick">&#128504;</span> Create and Merge
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Export to Word,
                        Excel, Powerpoint
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Secure &amp;
                        Sign PDF Files
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Scan to PDF
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Compress,
                        flatten, optimize
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Add Bates
                        Numbering
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Archive with
                        PDF/A
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Text
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Images
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Optical Character
                        Recognition (OCR)
                      </p>
                    </div>
                  )}

                  {plan !== 3 && (
                    <div className="columns">
                      <div className="top">
                        <h2>PDF Pro + OCR</h2>
                      </div>

                      <div className="column-container">
                        <span className="price">$12</span>
                        <h4>per month</h4>
                        <h3>$144 annualy</h3>
                        {activeLicenses !== 0 && (
                          <button
                            className="green"
                            onClick={() => {
                              setSwitchProduct("PDF Pro + OCR")
                              setSwitchPath("pdf-pro-ocr-annual")
                              setOpenPopUp(true)
                            }}
                          >
                            <span className="green-text">Switch</span>
                          </button>
                        )}
                        {number < 2 && activeLicenses === 0 && (
                          <PayButton
                            className="green"
                            name="Switch"
                            value="pdf-pro-ocr-annual"
                            email={data.true_email}
                            firstName={data.first_name}
                            lastName={data.last_name}
                          ></PayButton>
                        )}
                        {number > 1 && activeLicenses === 0 && (
                          <Link
                            to="/app/checkout-new1"
                            state={{
                              product: "PDF Pro + OCR",
                              cost: 144,
                              period: "Year",
                              productCode: "pdf-pro-ocr-annual",
                              billing: "annual",
                            }}
                            className="green"
                          >
                            <span className="green-text">Switch</span>
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className="tick">&#128504;</span> Create and Merge
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Export to Word,
                        Excel, Powerpoint
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Secure &amp;
                        Sign PDF Files
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Scan to PDF
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Compress,
                        flatten, optimize
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Add Bates
                        Numbering
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Archive with
                        PDF/A
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Text
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Images
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Optical
                        Character Recognition (OCR)
                      </p>
                    </div>
                  )}

                  {plan === 3 && (
                    <div className="columns columnMP">
                      <div className="top">
                        <h2>PDF Pro + OCR</h2>
                      </div>

                      <div className="column-container">
                        <span className="price">$12</span>
                        <h4>per month</h4>
                        <h3>$144 annualy</h3>
                        {activeLicenses !== 0 && (
                          <button className="current">
                            <span className="current-text">Current</span>
                          </button>
                        )}
                        {number < 2 && activeLicenses === 0 && (
                          <PayButton
                            className="green"
                            name="Current"
                            value="pdf-pro-ocr-annual"
                            email={data.true_email}
                            firstName={data.first_name}
                            lastName={data.last_name}
                          ></PayButton>
                        )}
                        {number > 1 && activeLicenses === 0 && (
                          <Link
                            to="/app/checkout-new1"
                            state={{
                              product: "PDF Pro + OCR",
                              cost: 144,
                              period: "Year",
                              productCode: "pdf-pro-ocr-annual",
                              billing: "annual",
                            }}
                            className="current"
                          >
                            <span className="current-text">Current</span>
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className="tick">&#128504;</span> Create and Merge
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Export to Word,
                        Excel, Powerpoint
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Secure &amp;
                        Sign PDF Files
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Scan to PDF
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Compress,
                        flatten, optimize
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Add Bates
                        Numbering
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Archive with
                        PDF/A
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Text
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Images
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Optical
                        Character Recognition (OCR)
                      </p>
                    </div>
                  )}
                </div>
              )}

              {mySwitch === "Monthly" && (
                <div className="row2">
                  {plan === 4 && (
                    <div className="columns columnMP">
                      <div className="top">
                        <h2>PDF Pro Lite</h2>
                      </div>

                      <div className="column-container">
                        <span className="price">$10</span>
                        <h4>per month</h4>
                        {activeLicenses !== 0 && (
                          <button className="current">
                            <span className="current-text">Current</span>
                          </button>
                        )}
                        {number < 2 && activeLicenses === 0 && (
                          <PayButton
                            className="green"
                            name="Current"
                            value="pdf-lite-m"
                            email={data.true_email}
                            firstName={data.first_name}
                            lastName={data.last_name}
                          ></PayButton>
                        )}
                        {number > 1 && activeLicenses === 0 && (
                          <Link
                            to="/app/checkout-new1"
                            state={{
                              product: "PDF Pro Lite",
                              cost: 10,
                              period: "Month",
                              productCode: "pdf-lite-m",
                              billing: "monthly",
                            }}
                            className="current"
                          >
                            <span className="current-text">Current</span>
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className="tick">&#128504;</span> Create and Merge
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Export to Word,
                        Excel, Powerpoint
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Secure &amp;
                        Sign PDF Files
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Scan to PDF
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Compress,
                        flatten, optimize
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Add Bates
                        Numbering
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Archive with
                        PDF/A
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Edit Text
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Edit Images
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Optical Character
                        Recognition (OCR)
                      </p>
                    </div>
                  )}
                  {plan !== 4 && (
                    <div className="columns">
                      <div className="top">
                        <h2>PDF Pro Lite</h2>
                      </div>

                      <div className="column-container">
                        <span className="price">$10</span>
                        <h4>per month</h4>
                        {activeLicenses !== 0 && (
                          <button
                            className="green"
                            onClick={() => {
                              setSwitchProduct("PDF Pro Lite")
                              setSwitchPath("pdf-lite-m")
                              setOpenPopUp(true)
                            }}
                          >
                            <span className="green-text">Switch</span>
                          </button>
                        )}
                        {number < 2 && activeLicenses === 0 && (
                          <PayButton
                            className="green"
                            name="Switch"
                            value="pdf-lite-m"
                            email={data.true_email}
                            firstName={data.first_name}
                            lastName={data.last_name}
                          ></PayButton>
                        )}
                        {number > 1 && activeLicenses === 0 && (
                          <Link
                            to="/app/checkout-new1"
                            state={{
                              product: "PDF Pro Lite",
                              cost: 10,
                              period: "Month",
                              productCode: "pdf-lite-m",
                              billing: "monthly",
                            }}
                            className="green"
                          >
                            <span className="green-text">Switch</span>
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className="tick">&#128504;</span> Create and Merge
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Export to Word,
                        Excel, Powerpoint
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Secure &amp;
                        Sign PDF Files
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Scan to PDF
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Compress,
                        flatten, optimize
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Add Bates
                        Numbering
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Archive with
                        PDF/A
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Edit Text
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Edit Images
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Optical Character
                        Recognition (OCR)
                      </p>
                    </div>
                  )}

                  {plan === 5 && (
                    <div className="columns columnMP">
                      <div className="top">
                        <h2>PDF Pro</h2>
                      </div>

                      <div className="column-container">
                        <span className="price">$15</span>
                        <h4>per month</h4>
                        {activeLicenses !== 0 && (
                          <button className="current">
                            <span className="current-text">Current</span>
                          </button>
                        )}
                        {number < 2 && activeLicenses === 0 && (
                          <PayButton
                            className="green"
                            name="Current"
                            value="pdf-pro-month"
                            email={data.true_email}
                            firstName={data.first_name}
                            lastName={data.last_name}
                          ></PayButton>
                        )}
                        {number > 1 && activeLicenses === 0 && (
                          <Link
                            to="/app/checkout-new1"
                            state={{
                              product: "PDF Pro",
                              cost: 15,
                              period: "Month",
                              productCode: "pdf-pro-month",
                              billing: "monthly",
                            }}
                            className="current"
                          >
                            <span className="current-text">Current</span>
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className="tick">&#128504;</span> Create and Merge
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Export to Word,
                        Excel, Powerpoint
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Secure &amp;
                        Sign PDF Files
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Scan to PDF
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Compress,
                        flatten, optimize
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Add Bates
                        Numbering
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Archive with
                        PDF/A
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Text
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Images
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Optical Character
                        Recognition (OCR)
                      </p>
                    </div>
                  )}

                  {plan !== 5 && (
                    <div className="columns">
                      <div className="top">
                        <h2>PDF Pro</h2>
                      </div>

                      <div className="column-container">
                        <span className="price">$15</span>
                        <h4>per month</h4>
                        {activeLicenses !== 0 && (
                          <button
                            className="green"
                            onClick={() => {
                              setSwitchProduct("PDF Pro")
                              setSwitchPath("pdf-pro-month")
                              setOpenPopUp(true)
                            }}
                          >
                            <span className="green-text">Switch</span>
                          </button>
                        )}
                        {number < 2 && activeLicenses === 0 && (
                          <PayButton
                            className="green"
                            name="Switch"
                            value="pdf-pro-month"
                            email={data.true_email}
                            firstName={data.first_name}
                            lastName={data.last_name}
                          ></PayButton>
                        )}
                        {number > 1 && activeLicenses === 0 && (
                          <Link
                            to="/app/checkout-new1"
                            state={{
                              product: "PDF Pro",
                              cost: 15,
                              period: "Month",
                              productCode: "pdf-pro-month",
                              billing: "monthly",
                            }}
                            className="green"
                          >
                            <span className="green-text">Switch</span>
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className="tick">&#128504;</span> Create and Merge
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Export to Word,
                        Excel, Powerpoint
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Secure &amp;
                        Sign PDF Files
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Scan to PDF
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Compress,
                        flatten, optimize
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Add Bates
                        Numbering
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Archive with
                        PDF/A
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Text
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Images
                      </p>
                      <p className="pcross">
                        <span className="cross">&times;</span> Optical Character
                        Recognition (OCR)
                      </p>
                    </div>
                  )}

                  {plan !== 6 && (
                    <div className="columns">
                      <div className="top">
                        <h2>PDF Pro + OCR</h2>
                      </div>

                      <div className="column-container">
                        <span className="price">$20</span>
                        <h4>per month</h4>
                        {activeLicenses !== 0 && (
                          <button
                            className="green"
                            onClick={() => {
                              setSwitchProduct("PDF Pro + OCR")
                              setSwitchPath("pdf-pro-ocr-month")
                              setOpenPopUp(true)
                            }}
                          >
                            <span className="green-text">Switch</span>
                          </button>
                        )}
                        {number < 2 && activeLicenses === 0 && (
                          <PayButton
                            className="green"
                            name="Switch"
                            value="pdf-pro-ocr-month"
                            email={data.true_email}
                            firstName={data.first_name}
                            lastName={data.last_name}
                          ></PayButton>
                        )}
                        {number > 1 && activeLicenses === 0 && (
                          <Link
                            to="/app/checkout-new1"
                            state={{
                              product: "PDF Pro + OCR",
                              cost: 20,
                              period: "Month",
                              productCode: "pdf-pro-ocr-month",
                              billing: "monthly",
                            }}
                            className="green"
                          >
                            <span className="green-text">Switch</span>
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className="tick">&#128504;</span> Create and Merge
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Export to Word,
                        Excel, Powerpoint
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Secure &amp;
                        Sign PDF Files
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Scan to PDF
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Compress,
                        flatten, optimize
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Add Bates
                        Numbering
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Archive with
                        PDF/A
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Text
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Images
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Optical
                        Character Recognition (OCR)
                      </p>
                    </div>
                  )}

                  {plan === 6 && (
                    <div className="columns columnMP">
                      <div className="top">
                        <h2>PDF Pro + OCR</h2>
                      </div>

                      <div className="column-container">
                        <span className="price">$20</span>
                        <h4>per month</h4>
                        {activeLicenses !== 0 && (
                          <button className="current">
                            <span className="current-text">Current</span>
                          </button>
                        )}
                        {number < 2 && activeLicenses === 0 && (
                          <PayButton
                            className="green"
                            name="Current"
                            value="pdf-pro-ocr-month"
                            email={data.true_email}
                            firstName={data.first_name}
                            lastName={data.last_name}
                          ></PayButton>
                        )}
                        {number > 1 && activeLicenses === 0 && (
                          <Link
                            to="/app/checkout-new1"
                            state={{
                              product: "PDF Pro + OCR",
                              cost: 20,
                              period: "Month",
                              productCode: "pdf-pro-ocr-month",
                              billing: "monthly",
                            }}
                            className="current"
                          >
                            <span className="current-text">Current</span>
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className="tick">&#128504;</span> Create and Merge
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Export to Word,
                        Excel, Powerpoint
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Secure &amp;
                        Sign PDF Files
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Scan to PDF
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Compress,
                        flatten, optimize
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Add Bates
                        Numbering
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Archive with
                        PDF/A
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Text
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Edit Images
                      </p>
                      <p>
                        <span className="tick">&#128504;</span> Optical
                        Character Recognition (OCR)
                      </p>
                    </div>
                  )}
                </div>
              )}
              <div className="row3">
                {success && (
                  <div className="alert-success">
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
                    Subscription successfully canceled!
                  </div>
                )}
                <button
                  className="cancel"
                  onClick={() => {
                    // api
                    setSuccess(true)
                    //   .delete(
                    //     `/api/v1/fastspring/subscriptions/${subscriptionID}`
                    //   )
                    //   .then(res => {
                    //     // console.log(res)
                    //     setSuccess(true)
                    //   })
                    //   .catch(err => {
                    //     console.log(err)
                    //   })
                  }}
                >
                  <span className="cancel-text">Cancel Subscription</span>
                </button>
              </div>
            </div>
          </div>
        </DashboardStyle>
      )}
      {openPopUp && (
        <OpenPopUpStyle
          onClick={() => {
            setOpenPopUp(false)
          }}
        >
          <div onClick={e => e.stopPropagation()} className="popup-container">
            <span className="popup-text">
              Are you sure you want to switch to {switchProduct}?
            </span>
            <button
              className="green"
              onClick={() => {
                api
                  .post(`/api/v1/fastspring/subscriptions/`, {
                    subscriptions: [
                      {
                        subscription: subscriptionID,
                        product: switchPath,
                      },
                    ],
                  })
                  .then(res => {
                    // console.log(res)
                    if (switchPath === "pdf-lite-m") {
                      setPlan(4)
                      setPlanType("PDF Pro Lite")
                      setSubscriptionPeriod("Month")
                    } else if (switchPath === "pdf-lite-a") {
                      setPlan(1)
                      setPlanType("PDF Pro Lite")
                      setSubscriptionPeriod("Year")
                    } else if (switchPath === "pdf-pro-annual") {
                      setPlan(2)
                      setPlanType("PDF Pro")
                      setSubscriptionPeriod("Year")
                    } else if (switchPath === "pdf-pro-month") {
                      setPlan(5)
                      setPlanType("PDF Pro")
                      setSubscriptionPeriod("Month")
                    } else if (switchPath === "pdf-pro-ocr-month") {
                      setPlan(6)
                      setPlanType("PDF Pro + OCR")
                      setSubscriptionPeriod("Month")
                    } else if (switchPath === "pdf-pro-ocr-annual") {
                      setPlan(3)
                      setPlanType("PDF Pro + OCR")
                      setSubscriptionPeriod("Year")
                    }
                    setCurrentPlan(currentPlan + 1)
                  })
                  .catch(err => console.log(err))
              }}
            >
              <span className="green-text">Confirm</span>
            </button>
          </div>
        </OpenPopUpStyle>
      )}
    </div>
  )
}

export default ManageSubscription
