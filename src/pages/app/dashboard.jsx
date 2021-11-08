import React from "react"
import Seo from "../../components/seo"
import { Link, navigate } from "gatsby"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import api from "../../components/api"
import UpgradeButton from "../../components/upgradeButton"
//context hook
import { CheckoutContext } from "../../Contexts/CheckoutContext"
import { useContext } from "react"

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

    .bold {
      font-weight: bold;
    }

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
    .form {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    input {
      width: 50px;
      align-self: center;
      text-align: center;
      margin-top: 10px;
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

const DashboardStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  overflow: hidden;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 85vh;
    position: relative;
    left: 10%;

    .row1 {
      width: 740px;
      margin: 2.5rem 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      h1 {
        width: 413px;
        height: 58px;
        font-family: Work Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 52px;
        line-height: 58px;
        color: #111111;
        .username {
          font-family: Work Sans;
          font-style: normal;
          font-weight: 500;
          font-size: 52px;
          line-height: 58px;
          color: #111111;
        }
      }

      .info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-family: Work Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 180%;
        display: flex;
        letter-spacing: 0.5px;
        color: #111111;
        flex: none;
        flex-grow: 0;
        margin: 16px 0px;

        .plan-value,
        .period-value,
        .type-value {
          font-weight: 700;
          margin-left: 5px;
        }
      }
      .button-holder {
        display: flex;
      }
    }
    .row2,
    .row3 {
      display: flex;
      margin: 1rem 15px;
      justify-content: space-between;
      height: 112px;
      width: 740px;

      .box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 40px;
        width: 360px;
        height: 112px;
        background: #ffffff;
        border: 1px solid #ebebeb;
        box-sizing: border-box;
        border-radius: 12px;
        text-decoration: none;

        .text {
          width: 220px;
          height: 31px;
          font-family: Rubik;
          font-style: normal;
          font-weight: 500;
          font-size: 22px;
          line-height: 140%;
          display: flex;
          align-items: center;
          letter-spacing: 0.5px;
          color: #2a2a2a;
          flex: none;
          order: 0;
          flex-grow: 0;
          margin: 4px 0px;
          margin-left: 8px;
        }

        &:hover {
          border: 2px solid #00ca42;
          box-sizing: border-box;
          border-radius: 12px;
        }
      }
    }

    .upgradePlan {
      margin-left: -4px;
    }

    .upgradeOrganisation {
      margin-left: -4px;
    }
  }
`

function Dashboard() {
  const [user, setUser] = useState("")

  //state that regulates popup for upgrade/downgrade subscription
  const [openPopUp, setOpenPopUp] = useState(false)

  //state that manages number of licenses user wants
  const [add, setAdd] = useState(1)

  //variable that stores number of active licenses
  const {
    activeLicenses,
    setActiveLicenses,
    subscriptionID,
    number,
    setNumber,
  } = useContext(CheckoutContext)
  // useEffect kojem je drugi arg [], ovaj api call se loada samo jednom dok se stranica rendera ili rerendera!

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("user"))
    setUser(info.first_name)
  }, [])

  //Context Hooks
  const {
    planType,
    setPlanType,
    subscriptionPeriod,
    setSubscriptionPeriod,
    change,
    isLogged,
  } = useContext(CheckoutContext)

  //variable that stores license ID for which we check custom fields
  let CustomFieldsLicenseID

  // useEffect kojem je drugi arg [], ovaj api call se loada samo jednom dok se stranica rendera ili rerendera
  useEffect(() => {
    //getting user details from local storage
    const info = JSON.parse(localStorage.getItem("user"))
    //request to get license and check its type and subscription period and then displays it based on the type of the first license and its subscription period
    //it will need change in case user can buy many different plan types and subscription periods
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
  }, [planType, subscriptionPeriod, change])

  function GetCustomFields() {
    //api request that fetches custom fields values
    api
      .get(`/api/v1/license-custom-fields/?license=${CustomFieldsLicenseID}`)
      .then(response => {
        // console.log(response)
        if (response.data.results[0].value === "monthly") {
          setSubscriptionPeriod("Month")
        } else if (response.data.results[0].value === "annual") {
          setSubscriptionPeriod("Year")
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Seo title="User Dashboard" />
      {isLogged === true && (
        <DashboardStyle>
          <div className="container">
            <div className="row1">
              <h1>
                Welcome, <span className="username">{user}!</span>
              </h1>
              <div className="info-container">
                <div className="holder">
                  Account type:
                  <span className="type-value">
                    {number > 1 && <>(Company)</>}
                    {number < 2 && <>(Personal)</>}
                  </span>
                </div>
                <div className="holder">
                  Your Plan: <span className="plan-value">{planType}</span>
                </div>
                <div className="holder">
                  Subscription period:
                  <span className="period-value">{subscriptionPeriod}</span>
                </div>
              </div>
              <div className="button-holder">
                <UpgradeButton
                  className="upgradePlan"
                  name="Upgrade your plan"
                  action={() => {
                    navigate("/app/manage-subscription")
                  }}
                ></UpgradeButton>
                {number < 2 && (
                  <UpgradeButton
                    className="upgradeOrganisation"
                    name="Upgrade to organization"
                    action={() => {
                      setOpenPopUp(true)
                    }}
                  ></UpgradeButton>
                )}
              </div>
            </div>
            <div className="row2">
              <Link className="box" to="/app/download">
                <StaticImage
                  src="../../images/download-img.png"
                  width={18}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "png"]}
                  placeholder="blurred"
                  loading="eager"
                  alt="download image"
                />
                <span className="text">Download PDF Pro</span>
              </Link>
              <Link className="box" to="/app/manage-subscription">
                <StaticImage
                  src="../../images/manage-subscription-img.png"
                  width={24}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "png"]}
                  placeholder="blurred"
                  loading="eager"
                  alt="manage subscription image"
                />
                <span className="text">Manage Subscription</span>
              </Link>
            </div>
            <div className="row3">
              {number > 1 && (
                <Link className="box" to="/app/manage-users">
                  <StaticImage
                    src="../../images/manage-users-img.png"
                    width={32}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF", "png"]}
                    placeholder="blurred"
                    loading="eager"
                    alt="manage users image"
                  />{" "}
                  <span className="text">Manage Users</span>
                </Link>
              )}
              <Link className="box" to="/app/administrator">
                <StaticImage
                  src="../../images/account-img.png"
                  width={21}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "png"]}
                  placeholder="blurred"
                  loading="eager"
                  alt="account image"
                />
                <span className="text">Manage Administrators</span>
              </Link>
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
            <span className="popup-text">Increase number of licenses</span>
            <div className="current-number">
              Current number of licenses:
              <span className="bold"> {activeLicenses}</span>
            </div>
            <div className="form">
              <label htmlFor="increase">Number you want to add:</label>
              <input
                type="number"
                id="increase"
                name="increase"
                value={add}
                min={1}
                onChange={e => {
                  setAdd(e.target.value)
                }}
              />
            </div>
            <button
              className="green"
              onClick={() => {
                api
                  .post(`/api/v1/fastspring/subscriptions/`, {
                    subscriptions: [
                      {
                        subscription: subscriptionID,
                        quantity: parseInt(add) + parseInt(activeLicenses),
                      },
                    ],
                  })
                  .then(res => {
                    // console.log(res)
                    setActiveLicenses(parseInt(add) + parseInt(activeLicenses))
                    setNumber(number + 1)
                  })
                  .catch(err => {
                    console.log(err)
                  })
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

export default Dashboard
