import React from "react"
import styled from "styled-components"
import Seo from "../components/seo"
import { useState, useEffect } from "react"
import PayButton from "../components/payButton"
import Contacts from "../components/contacts"
import DropDownButton from "../components/dropdownButton"
import { StaticImage } from "gatsby-plugin-image"
import UpgradeButton from "../components/upgradeButton"
import { Link } from "gatsby"
//global context
import { GlobalAuthContext } from "../Contexts/GlobalAuthContext"
import { useContext } from "react"

const CheckoutNewLayout = styled.section`
  display: flex;
  min-height: 60vh;
  height: max-content;
  width: auto;
  padding-bottom: 40px;
  overflow: hidden;

  //media query for mobile - quick fix for responsivness
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
  }

  .payButton-design {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: 250px;
    height: 50px;
    background: #00ca42;
    border-radius: 60px;
    flex: none;
    flex-grow: 0;
    margin: 40px 0px;
    border: 2px solid #00ca42;

    //text css
    width: 184px;
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

  .checkmark-style {
    transform: scale(0.6);
    position: relative;
    top: -3px;
    left: 3px;
  }

  .line-container {
    display: flex;
    align-items: center;
    width: fit-content;
  }

  .step3-line,
  .step2-line {
    width: 48px;
    height: 2px;
  }

  .active-text {
    width: fit-content;
    height: 36px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    color: #000000;
    flex: none;
    flex-grow: 0;
    margin: 0px 8px;
  }

  .inactive-text {
    width: fit-content;
    height: 36px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    color: #c0c0c0;
    flex: none;
    flex-grow: 0;
    margin: 0px 8px;
  }

  .info {
    align-self: flex-end;
    justify-self: flex-end;
  }

  .active {
    background: #111111;
  }

  .inactive {
    background: #e1e1e1;
  }

  .upgradePlan {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    position: static;
    width: 484px;
    height: 50px;
    margin: 24px 0;
    margin-left: -4px;
  }

  .already-have-account {
    width: 287px;
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

    .login-link {
      color: #007de6;
      text-decoration: none;
    }
  }

  label {
    margin: 0px 14px;
  }

  .formBoxIndividual {
    label {
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #111111;
      flex: none;
      flex-grow: 0;
      margin: 8px 0px;
    }

    input {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 16px;
      width: 484px;
      height: 51px;
      border: 1px solid #d8d8d8;
      box-sizing: border-box;
      border-radius: 5px;
      flex: none;
      align-self: stretch;
      flex-grow: 0;
      margin: 8px 0px;

      @media (max-width: 780px) {
        width: 324px;
      }
    }
  }

  .column1 {
    display: flex;
    flex-direction: column;
    width: 100%;

    .row1 {
      display: flex;
      flex-direction: row;
      margin: 20px 0;

      span {
        margin-left: 0.5rem;
      }

      @media (max-width: 780px) {
        transform: scale(0.85) translate(-45px);
      }
    }

    .row2 {
      form {
        display: flex;
        flex-direction: column;

        .radio {
          flex-direction: row;
          align-self: flex-start;
        }

        button {
          margin-bottom: -0.5rem;
        }
      }

      input {
        margin: 0.24rem 0;
        align-self: flex-start;
        justify-self: center;
      }
    }

    .row3 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      form {
        margin: 24px 0px;
        display: flex;
        flex-direction: column;

        .radio {
          flex-direction: column;
          align-self: center;

          .radioOne,
          .radioTwo {
            margin-bottom: 1rem;
          }
        }

        .payButton {
          display: flex;
          justify-content: center;
          margin-bottom: -0.5rem;
          width: 60%;
          align-self: center;
        }
      }
    }

    .row3-starting {
      border-bottom: 2px solid black;
    }
    .row3-4 {
      display: flex;
      flex-direction: column;
      border-top: 2px solid black;
      align-items: center;
      .text {
        margin-left: 4rem;
        margin-top: 1.5rem;
      }
      .containerBilling {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1.5rem 0rem;
        width: 60%;
      }
      input {
        width: 3rem;
        text-align: center;
      }
    }
    .row1,
    .row2,
    .row3,
    .row3-starting,
    .row4 {
      margin-left: 4rem;
    }
  }

  .formBoxIndividual,
  .formBoxCorporate {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .margin-box {
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    border-bottom: 1px solid black;
    justify-self: center;
    margin-left: 0.5rem;
  }

  #margin-box-header {
    margin-left: 0.5rem;
  }

  .column2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px;
    width: 420px;
    height: auto;
    padding-bottom: 80px;
    margin-bottom: -40px;
    background: #fbfbfb;

    #info {
      justify-self: flex-end !important;
      align-self: flex-end !important;
    }

    .contentBarIndividual,
    .contentBarCorporate {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .srow1 {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;

        span {
          display: flex;
          flex-direction: row;
          margin: 1.5rem 0;

          .PDFProLite,
          .PDFPro,
          .PDFProOCR {
            cursor: pointer;

            :hover {
              background-color: grey;
            }
          }
        }
      }
      .srow2 {
        display: flex;
        margin-top: 1.5rem;
      }
      .srow3 {
        display: flex;
        flex-direction: column;
        margin-top: 1.5rem;
        .totalCost {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          margin-left: -1.5rem;
        }
      }
      .srow1,
      .srow2 {
        .marginBox {
          margin-left: 0rem;
        }
      }
    }

    @media (max-width: 780px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .contentBarIndividual,
      .contentBarCorporate {
        width: 100%;
        align-items: center;
      }

      #info {
        align-self: center !important;
      }
    }
  }

  @media (max-width: 780px) {
    .upgradePlan {
      width: 324px;
    }
  }
`

function CheckoutNew({ location }) {
  const [type, setType] = useState(false)
  const [next, setNext] = useState(false)
  const [changeBillingButton, setChangeBillingButton] = useState(null)

  //create global context and rename checkout-new1 to something else + app to profile!!s
  const [billingType, setBillingType] = useState("")

  //temporary for the designer - remove it later
  const [isLogged, setIsLogged] = useState(undefined)

  //number of licenses for corporate account
  const [amount, setAmount] = useState(1)

  //user info that is being passed to popup storefront
  const [email, setEmail] = useState(undefined)
  const [fname, setFname] = useState(undefined)
  const [lname, setLname] = useState(undefined)

  //getting user info
  //testno da imas live promjene - za sad je bomba ovo!!
  const [user, setUser] = useState(null)

  const [trueLocation, setTrueLocation] = useState("")

  //refereshing display data after change
  const [reset, setReset] = useState(0)
  //user info if logged
  const [data, setData] = useState(undefined)

  //checks if license is corporate or personal
  const [isUser, setIsUser] = useState(true)

  //global context hook
  const {
    activee,
    setActivee,
    step,
    setStep,
    complete,
    setComplete,
  } = useContext(GlobalAuthContext)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isLoggedIn")) !== null) {
      setEmail(JSON.parse(localStorage.getItem("user")).true_email)
      setData(JSON.parse(localStorage.getItem("user")))
      setType(true)
      setNext(true)
    }
    if (location.state !== null) {
      setTrueLocation({
        cost: location.state.cost,
        product: location.state.product,
        period: location.state.period,
        productCode: location.state.productCode,
        billing: location.state.billing,
      })
    } else {
      setTrueLocation({
        cost: 96,
        product: "PDF Pro",
        period: "Year",
        productCode: "pdf-pro-annual",
        billing: "annual",
      })
    }
  }, [])

  useEffect(() => {
    // setCheckoutDetails(trueLocation)
    setBillingType(trueLocation.billing)
    if (trueLocation.product === "PDF Pro Lite") {
      setActivee(0)
    } else if (trueLocation.product === "PDF Pro") {
      setActivee(1)
    } else if (trueLocation.product === "PDF Pro + OCR") {
      setActivee(2)
    }
    if (billingType === "annual") {
      setChangeBillingButton(true)
    } else if (billingType === "monthly") {
      setChangeBillingButton(false)
    }
    if (JSON.parse(localStorage.getItem("isLogged")) === true) {
      setUser(JSON.parse(localStorage.getItem("user")).true_email)
    }
    console.log("billingButton", changeBillingButton)
    setIsLogged(JSON.parse(localStorage.getItem("isLogged")))
    if (type === false) {
      setAmount(1)
    } else {
      setAmount(2)
    }
  }, [billingType, reset, activee])
  return (
    <>
      <Seo title="Checkout"></Seo>
      <CheckoutNewLayout>
        <div className="column1">
          <div className="row1">
            {complete > 0 && (
              <StaticImage
                src="../images/checkmark-svg.svg"
                width={42}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "png"]}
                placeholder="blurred"
                loading="eager"
                alt="Checkmark"
                className="checkmark-style"
              />
            )}
            <div className="step1 active-text">1.Create Account</div>
            <div className="line-container">
              {step < 2 && <div className="step2-line inactive"></div>}
              {step >= 2 && <div className="step2-line active"></div>}
            </div>
            {complete >= 2 && (
              <StaticImage
                src="../images/checkmark-svg.svg"
                width={42}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "png"]}
                placeholder="blurred"
                loading="eager"
                alt="Checkmark"
                className="checkmark-style"
              />
            )}
            {step >= 2 && (
              <div className="step2 active-text">2.Billing &amp; Users</div>
            )}
            {step < 2 && (
              <div className="step2 inactive-text">2.Billing &amp; Users</div>
            )}
            <div className="line-container">
              {step < 3 && <div className="step3-line inactive"></div>}
              {step >= 3 && <div className="step3-line active"></div>}
            </div>
            {complete >= 3 && (
              <StaticImage
                src="../images/checkmark-svg.svg"
                width={42}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "png"]}
                placeholder="blurred"
                loading="eager"
                alt="Checkmark"
                className="checkmark-style"
              />
            )}
            {step >= 3 && <div className="step3 active-text">3.Payment</div>}
            {step < 3 && <div className="step3 inactive-text">3.Payment</div>}
          </div>

          {/* row 2 */}
          <div className="row2">
            {!next && (
              <div className="step1-container">
                <h4 className="step1-topic">Create Account</h4>
                <form action="#">
                  <div className="radio">
                    <input
                      type="radio"
                      id="Individual"
                      name="Account Type"
                      value="Individual"
                      onClick={() => {
                        setType(false)
                        setIsUser(true)
                        setAmount(1)
                      }}
                      checked={!type}
                    />
                    <label for="Individual">Individual Account</label>
                    <input
                      type="radio"
                      id="Corporate"
                      name="Account Type"
                      value="Corporate"
                      onClick={() => {
                        setType(true)
                        setIsUser(false)
                        setAmount(2)
                      }}
                    />
                    <label for="Corporate">Corporate Account</label>
                  </div>

                  <div className="formBoxIndividual">
                    <br />
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email*"
                      onChange={e => {
                        setEmail(e.target)
                      }}
                      required
                    />
                    <br />
                    <label htmlFor="first-name">First name</label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder="Enter First Name*"
                      onChange={e => {
                        setFname(e.target.value)
                      }}
                      required
                    />
                    <br />
                    <label htmlFor="last-name">Last name</label>
                    <input
                      type="text"
                      placeholder="Enter Last Name*"
                      id="last-name"
                      name="last-name"
                      onChange={e => {
                        setLname(e.target.value)
                      }}
                      required
                    />
                    <br />
                  </div>

                  <UpgradeButton
                    name="Continue"
                    className="upgradePlan"
                    action={e => {
                      e.preventDefault()
                      if (
                        email !== null &&
                        fname !== null &&
                        lname !== null &&
                        email !== undefined
                      ) {
                        if (email.checkValidity()) {
                          setNext(true)
                          setStep(2)
                          setComplete(2)
                        }
                      }
                    }}
                  ></UpgradeButton>
                </form>
                <span className="already-have-account">
                  Already have an account?
                  <Link className="login-link" to="/login/">
                    Log in
                  </Link>
                </span>
              </div>
            )}
          </div>
          {next && (
            <div className="row3">
              <h3 className="step2-text">Choose your Billing Period</h3>
              <form action="#">
                <div className="radio">
                  <div className="radioOne">
                    <input
                      type="radio"
                      id="Individual"
                      name="Billing Period"
                      onClick={() => {
                        setBillingType("annual")
                        if (trueLocation.product === "PDF Pro Lite") {
                          setTrueLocation({
                            cost: "60",
                            product: "PDF Pro Lite",
                            period: "Year",
                            productCode: "pdf-lite-a",
                            billing: "annual",
                          })
                        } else if (trueLocation.product === "PDF Pro") {
                          setTrueLocation({
                            cost: "96",
                            product: "PDF Pro",
                            period: "Year",
                            productCode: "pdf-pro-annual",
                            billing: "annual",
                          })
                        } else {
                          setTrueLocation({
                            cost: "144",
                            product: "PDF Pro + OCR",
                            period: "Year",
                            productCode: "pdf-pro-ocr-annual",
                            billing: "annual",
                          })
                        }
                        if (billingType === "annual") {
                          setChangeBillingButton(true)
                        }
                        setReset(reset + 1)
                      }}
                      checked={changeBillingButton}
                    />
                    <label for="Individual">Annual Billing</label>
                  </div>
                  <div className="radioTwo">
                    <input
                      type="radio"
                      id="Corporate"
                      name="Billing Period"
                      onClick={() => {
                        setBillingType("monthly")
                        if (trueLocation.product === "PDF Pro Lite") {
                          setTrueLocation({
                            cost: "10",
                            product: "PDF Pro Lite",
                            period: "Month",
                            productCode: "pdf-lite-m",
                            billing: "monthly",
                          })
                        } else if (trueLocation.product === "PDF Pro") {
                          setTrueLocation({
                            cost: "15",
                            product: "PDF Pro",
                            period: "Month",
                            productCode: "pdf-pro-month",
                            billing: "monthly",
                          })
                        } else {
                          setTrueLocation({
                            cost: "20",
                            product: "PDF Pro + OCR",
                            period: "Month",
                            productCode: "pdf-pro-ocr-month",
                            billing: "monthly",
                          })
                        }
                        if (billingType === "monthly") {
                          setChangeBillingButton(false)
                        }
                        setReset(reset + 1)
                      }}
                      checked={!changeBillingButton}
                    />
                    <label for="Corporate">Monthly Billing</label>
                  </div>
                </div>
                {/* Special element only for corporate account */}
                {type && (
                  <div className="row3-4">
                    <div className="text">
                      Add users to your PDF Pro plan to allow them to use the
                      PDF Pro Application
                    </div>
                    <div className="containerBilling">
                      <span>Number of users</span>
                      <input
                        type="number"
                        min="2"
                        max="9999"
                        value={amount}
                        required
                        onChange={e => setAmount(e.target.value)}
                      />
                      <button onClick={e => e.preventDefault()}>Update</button>
                    </div>
                  </div>
                )}
                <div className="payButton">
                  {!isLogged && (
                    <PayButton
                      className="payButton-design"
                      value={trueLocation.productCode}
                      quantity={amount}
                      name="Continue"
                      email={email.value}
                      firstName={fname}
                      lastName={lname}
                      type={isUser}
                    ></PayButton>
                  )}
                  {isLogged && (
                    <PayButton
                      className="payButton-design"
                      value={trueLocation.productCode}
                      quantity={amount}
                      name="Continue"
                      email={data.true_email}
                      firstName={data.first_name}
                      lastName={data.last_name}
                      type={isUser}
                    ></PayButton>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="column2">
          <div className="contentBarIndividual">
            <div className="srow1">
              <div className="srow1-2-3">
                <div className="marginBox">
                  <span id="margin-box-header">Order Summary:</span>
                  <span>
                    <DropDownButton
                      title={trueLocation.product}
                      checkout={true}
                      className="checkout-dropdown-button"
                      action={() => {
                        if (billingType === "annual") {
                          setTrueLocation({
                            cost: "60",
                            product: "PDF Pro Lite",
                            period: "Year",
                            productCode: "pdf-lite-a",
                            billing: "annual",
                          })
                        } else {
                          setTrueLocation({
                            cost: "10",
                            product: "PDF Pro Lite",
                            period: "Month",
                            productCode: "pdf-lite-m",
                            billing: "monthly",
                          })
                        }
                        setActivee(0)
                      }}
                      action1={() => {
                        if (billingType === "annual") {
                          setTrueLocation({
                            cost: "96",
                            product: "PDF Pro",
                            period: "Year",
                            productCode: "pdf-pro-annual",
                            billing: "annual",
                          })
                        } else {
                          setTrueLocation({
                            cost: "15",
                            product: "PDF Pro",
                            period: "Month",
                            productCode: "pdf-pro-month",
                            billing: "monthly",
                          })
                        }
                        setActivee(1)
                      }}
                      action2={() => {
                        if (billingType === "annual") {
                          setTrueLocation({
                            cost: "144",
                            product: "PDF Pro + OCR",
                            period: "Year",
                            productCode: "pdf-pro-ocr-annual",
                            billing: "annual",
                          })
                        } else {
                          setTrueLocation({
                            cost: "20",
                            product: "PDF Pro + OCR",
                            period: "Month",
                            productCode: "pdf-pro-ocr-month",
                            billing: "monthly",
                          })
                        }
                        setActivee(2)
                      }}
                    ></DropDownButton>
                  </span>
                </div>
              </div>
              <div className="srow2">
                <div className="margin-box">
                  <div className="text-price">Price:</div> ${trueLocation.cost}{" "}
                  / {trueLocation.period}
                </div>
              </div>
              <div className="srow3">
                <span className="totalCost">
                  <div className="left">Total Due:</div>
                  <div className="right"> ${trueLocation.cost}</div>
                </span>
              </div>
            </div>
            <span id="info">
              Prices Shown are before taxes, and will be billed in your local
              currency
            </span>
          </div>
        </div>
      </CheckoutNewLayout>
      <Contacts></Contacts>
    </>
  )
}

export default CheckoutNew
