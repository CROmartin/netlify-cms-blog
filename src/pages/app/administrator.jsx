import React from "react"
import Seo from "../../components/seo"
import styled from "styled-components"
import { useState, useEffect } from "react"
import Alert from "react-bootstrap/Alert"
import Api from "../../components/api"
//Context hook
import { CheckoutContext } from "../../Contexts/CheckoutContext"
import { useContext } from "react"
import UpgradeButton from "../../components/upgradeButton"

const DashboardStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 80vh;

  .row2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
  }
  table {
    width: 996px;
    align-self: center;
  }

  th {
    background: #444444;
    color: white;
    border: 1px solid #444444;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
    height: 50px;
    width: 249px;
  }

  td {
    height: 50px;
    width: 249px;
    border: 1px solid gainsboro;
    text-align: center;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
  }

  .row1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    margin-bottom: 40px;

    .row-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
    }

    h1 {
      width: 656px;
      height: 36px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 36px;
      color: #000000;
      flex: none;
      flex-grow: 0;
      margin: 16px 0px;
      justify-self: flex-start;
    }

    h3 {
      width: 480px;
      height: 31.5px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 180%;
      display: flex;
      align-items: center;
      letter-spacing: 0.5px;
      color: #111111;
      flex: none;
      flex-grow: 0;
      margin: 0;
      margin-top: 16px;
    }

    .info-text {
      width: 480px;
      height: 31.5px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28.8px;
      display: flex;
      align-items: center;
      letter-spacing: 0.5px;
      color: #111111;
      flex: none;
      flex-grow: 0;
      margin: 0;
      margin-bottom: 16px;
    }

    .upgradePlan {
      margin-left: -4px;
    }
  }

  .displayPopUp {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
    background-color: rgb(34, 34, 34, 0.6);

    .assignUserContainer {
      height: 700px;
      width: 800px;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        margin-bottom: 2.5rem;
      }
      form {
        display: flex;
        flex-direction: column;
        label,
        input {
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  .container-buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .make-primary {
    position: static;
    width: max-content;
    height: 19px;
    left: 8px;
    top: 29.5px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #007de6;
    flex: none;
    flex-grow: 0;
    margin: 0px 8px;
    border: none;
    background: transparent;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 8px;
    }
  }

  .or {
    width: 17px;
    height: 19px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #222222;
    flex: none;
    flex-grow: 0;
    margin: 0px 8px;
  }

  .remove {
    width: max-content;
    height: 19px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #e44331;
    flex: none;
    flex-grow: 0;
    margin: 0px 8px;
    border: none;
    background: transparent;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 8px;
    }
  }
  .displayPopUp {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
    background-color: rgb(34, 34, 34, 0.6);

    .assignUserContainer {
      padding: 54px;
      width: 598.92px;
      height: 695px;
      background: #ffffff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        width: 458px;
        height: 40px;
        font-family: Work Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 40px;
        text-align: center;
        color: #111111;
        flex: none;
        flex-grow: 0;
        margin: 32px 0px;
      }
      form {
        display: flex;
        flex-direction: column;

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
          margin-bottom: 0.5rem;
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

        .special {
          width: 384px;
          height: 50px;
          margin: 16px 0px;
        }
      }
    }
  }
`

function Administrator() {
  const [orderInfo, setOrderInfo] = useState(null)
  const [newUser, setNewUser] = useState(false)

  //already exsists in context - probably needs to be deleted
  // const [sync, setSync] = useState(false)

  //variables that we send back to the api server when assigning user
  const [email, setEmail] = useState("")
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [numberUser, setNumberUser] = useState("")
  const [password, setPassword] = useState("")
  // const [manager, setManager] = useState(null)

  //Context hook
  const {
    managers,
    setManagers,
    licenseID,
    setLicenseID,
    setNumberOfLicenses,
    setAdmin,
    admin,
    synchronize,
    setSynchronize,
    administratorChange,
    setAdministratorChange,
    isLogged,
  } = useContext(CheckoutContext)

  // useEffect kojem je drugi arg [], ovaj api call se loada samo jednom dok se stranica rendera ili rerendera!

  useEffect(() => {
    const ID = JSON.parse(localStorage.getItem("orderID"))
    setNumberOfLicenses(JSON.parse(localStorage.getItem("numberOfLicenses")))
    setLicenseID(ID.order)
    setAdmin(ID.customer.email.toLowerCase())
    Api.get(`/api/v1/orders/${ID.order}/managers/`)
      .then(res => {
        // console.log("administrator res", res)
        Display(res)
        setOrderInfo(ID)
        setSynchronize(true)
      })
      .catch(err => {
        console.log(err)
      })
  }, [administratorChange])

  //function that return array of of managers/administrators - you gotta do it like this because for some reason directly in hook it doesn't work
  function Display(response) {
    setManagers(response.data)
  }

  function render_admin() {
    if (synchronize) {
      return (
        <tbody>
          {managers.map(manager => (
            <tr>
              <td key={manager.first_name}>{manager.first_name}</td>
              <td key={manager.last_name}>{manager.last_name}</td>
              <td key={manager.true_email}>{manager.true_email}</td>
              <td key={manager.id}>
                {admin === manager.true_email.toLowerCase() && <>(Primary)</>}
                {admin !== manager.true_email.toLowerCase() && (
                  <div className="container-buttons">
                    <button className="make-primary">Make Primary</button>
                    <span className="or">or</span>
                    <button
                      className="remove"
                      onClick={e => {
                        e.preventDefault()
                        Api.post(
                          `/api/v1/orders/${licenseID}/remove_manager/`,
                          {
                            license_user_id: manager.id,
                          }
                        )
                          .then(response => {
                            // console.log(response)
                            setAdministratorChange(administratorChange + 1)
                          })
                          .catch(error => {
                            console.log(error)
                          })
                      }}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      )
    }
  }
  return (
    <div>
      <Seo title="Administrator" />
      {isLogged === true && (
        <DashboardStyle>
          <div className="row1">
            <div className="row-container">
              <h1>Manage Administrators</h1>
              <h3>Primary Administrator: {admin} (you)</h3>
              <span className="info-text">
                There may be up to 5 administrators per account.
              </span>
              {managers.length < 5 && (
                <UpgradeButton
                  name="Add Administrator"
                  className="upgradePlan"
                  action={e => {
                    e.preventDefault()
                    setNewUser(true)
                  }}
                ></UpgradeButton>
              )}
              {managers.length >= 5 && (
                <UpgradeButton
                  className="disabledButton"
                  name="Add Administrator"
                  action={() => {
                    return
                  }}
                ></UpgradeButton>
              )}
            </div>
          </div>
          <div className="row2">
            <div className="row2-container">
              <table className="GeneratedTable">
                <thead>
                  <tr>
                    <th className="fist-th">First name</th>
                    <th className="last-th">Last name</th>
                    <th className="email-th">Email</th>
                    <th className="actions-th">Actions</th>
                  </tr>
                </thead>
                {render_admin()}
              </table>
            </div>
          </div>
          {newUser && (
            <div
              className="displayPopUp"
              role="button"
              onKeyDown={() => {
                setNewUser(false)
              }}
              tabIndex={0}
              onClick={() => {
                setNewUser(false)
              }}
            >
              <div
                className="assignUserContainer"
                role="button"
                onKeyDown={e => {
                  e.stopPropagation()
                }}
                tabIndex={0}
                onClick={e => {
                  e.stopPropagation()
                }}
              >
                <h2>Assign Administrator To The License</h2>
                <form action="#">
                  <label htmlFor="mail">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    id="mail"
                    name="mail"
                    required
                    onChange={e => {
                      setEmail(e.target.value)
                    }}
                  />
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Enter First Name"
                    required
                    onChange={e => {
                      setFname(e.target.value)
                    }}
                  />
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter Last Name"
                    required
                    onChange={e => {
                      setLname(e.target.value)
                    }}
                  />
                  <label htmlFor="number">Phone Number</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    placeholder="Enter Phone Number"
                    required
                    onChange={e => {
                      setNumberUser(e.target.value)
                    }}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="Pasword"
                    placeholder="Enter Password"
                    required
                    onChange={e => {
                      setPassword(e.target.value)
                    }}
                  />
                  <UpgradeButton
                    name="Assign"
                    className="upgradePlan special"
                    action={e => {
                      e.preventDefault()

                      Api.post(`/api/v1/orders/${licenseID}/add_manager/`, {
                        email: email,
                        first_name: fname,
                        last_name: lname,
                        phone_number: numberUser,
                        is_manager: false,
                        password: password,
                      })
                        .then(response => {
                          // console.log(response)
                          localStorage.removeItem("managers")
                          setAdministratorChange(administratorChange + 1)
                        })
                        .catch(err => {
                          console.log(err)
                        })
                    }}
                  ></UpgradeButton>
                </form>
              </div>
            </div>
          )}
        </DashboardStyle>
      )}
    </div>
  )
}

export default Administrator
