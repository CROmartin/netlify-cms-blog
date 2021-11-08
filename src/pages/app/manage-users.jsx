import React from "react"
import Seo from "../../components/seo"
import styled from "styled-components"
import { useState, useEffect } from "react"
import api from "../../components/api"
import UpgradeButton from "../../components/upgradeButton"
//Context hooks
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
  justify-content: flex-start;
  align-items: center;
  min-height: 80vh;

  //page design
  .row1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 40px;

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
    }

    .row-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 656px;
      height: 182px;
      flex: none;
      margin: 30px 0px;

      .current-number,
      .user-limit {
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
        margin: 8px 0px;
        .number {
          font-weight: 600;
          margin-left: 5px;
        }
      }

      .info-numbs {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 284px;
        height: 72px;
        font-family: Work Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 180%;
        letter-spacing: 0.5px;
        color: #111111;
        flex-grow: 0;
        margin: 16px 0px;
      }
    }

    .buttons-container {
      display: flex;
      flex-direction: row;
      display: flex;
      align-items: flex-start;
      padding: 0px;
      width: 508px;
      height: 42px;
      flex: none;
      flex-grow: 0;
      margin: 24px 0px;

      .upgradePlan {
        margin-right: 40px;
        margin-left: -5px;
      }
    }
  }

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
  }

  th,
  td {
    height: 50px;
    border: 1px solid gainsboro;
    text-align: center;
    width: max-content;
  }

  .user-th {
    text-align: left;
    width: 340px;
    height: 50px;
  }

  .device-th {
    width: 200px;
  }

  .reset-th {
    width: 152px;
  }

  .password-th {
    width: 152px;
  }

  .unassign-th {
    width: 152px;
  }

  .user-td {
    text-align: left;
    width: 340px;
    height: 50px;
  }

  .device-td {
    width: 200px;
  }

  .reset-td {
    width: 152px;
  }

  .password-td {
    width: 152px;
  }

  .unassign-td {
    width: 152px;
  }

  .user-box {
    margin-left: 20px;
    width: 316px;
    height: 19px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #000000;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }

  .user {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
  }

  tr {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
  }

  .reset-buttons {
    width: max-content;
    height: 19px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #007de6;
    flex: none;
    flex-grow: 0;
    margin: 0px 0px;
    border: none;
    background-color: transparent;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 8px;
    }
  }

  .unassign-button {
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
    margin: 0px 0px;
    border: none;
    background-color: transparent;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 8px;
    }
  }

  //assign user button

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
        font-size: 36px;
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

function ManageUsers() {
  //states
  const [newUser, setNewUser] = useState(false)
  const [change, setChange] = useState(0)

  //variables that we send back to the api server when assigning user
  const [email, setEmail] = useState("")
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [numberr, setNumberr] = useState("")
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  //making api request callable every time we need it
  // useEffect kojem je drugi arg [], ovaj api call se loada samo jednom dok se stranica rendera ili rerendera!
  const [accountType, setAccountType] = useState(null)

  //variable that stores number of active licenses
  const { activeLicenses, setActiveLicenses } = useContext(CheckoutContext)

  //state that regulates popup for upgrade/downgrade subscription
  const [openPopUp, setOpenPopUp] = useState(false)

  //state that manages number of licenses user wants
  const [add, setAdd] = useState(1)

  // useEffect kojem je drugi arg [], ovaj api call se loada samo jednom dok se stranica rendera ili rerendera!

  //Context hooks
  const {
    setUsers,
    setNumUser,
    setMaxUsers,
    setPrimary,
    setSync,
    sync,
    users,
    numUser,
    license,
    usedLicenses,
    setLicense,
    setUsedLicenses,
    setNumberOfLicenses,
    isLogged,
    subscriptionID,
  } = useContext(CheckoutContext)

  //function that goes through all the licenses in the order and checks if user is assigned to the license and displays that user to the monitor
  //this function can also be used to show used licenses
  function display(response) {
    let assignedUsers = []
    let isUsed = []
    for (let i = 0; i < response.data.count; i++) {
      //checks if license has assigned users and if it has adds that user to the list
      if (response.data.results[i].license_users.length !== 0) {
        assignedUsers.push(response.data.results[i].license_users[0])
        isUsed.push(response.data.results[i])
      }
      //remove that after you are done testing
      // console.log("assignedUsers", assignedUsers)
      // console.log("isUsed", isUsed)
    }
    setUsedLicenses(isUsed)
    setUsers(assignedUsers)
  }

  //function that returns the list of licenses that doesn't have assigned users to them
  function showAvailableLicenses(response) {
    let availableLicenses = []
    for (let i = 0; i < response.data.count; i++) {
      //checks if the license is available
      if (response.data.results[i].license_users.length === 0) {
        availableLicenses.push(response.data.results[i].id)
      }
      // console.log(availableLicenses)
    }
    setLicense(availableLicenses)
  }

  //function that calculates current number of users
  function currentUsers(response) {
    let count = 0
    for (let i = 0; i < response.data.count; i++) {
      //checks if there is users in license
      if (response.data.results[i].license_users.length !== 0) {
        count++
      }
    }
    setNumUser(count)
  }

  //function that calculates number of active licenses
  function calculateActiveLicenses(response) {
    let count = 0
    for (let i = 0; i < response.data.results.length; i++) {
      if (response.data.results[i].status.toLowerCase() === "active") {
        count++
      }
    }
    setActiveLicenses(count)
  }

  useEffect(() => {
    //getting all user login data from the local storage
    const info = JSON.parse(localStorage.getItem("user"))
    setAccountType(info.is_manager)
    setNumberOfLicenses(JSON.parse(localStorage.getItem("numberOfLicenses")))
    //using instance for api requests - it is reusable - code is in /components/api.js
    api
      .get("/api/v1/licenses/")
      .then(response => {
        //delete console.log later in the process and add something that will show if the user is or isn't logged in
        // console.log(response)
        // current number of users assigned to the licenses
        // setNumUser(response.data.results[0].license_users.length)
        currentUsers(response)
        //setting max users based on count of licenses - one user per license
        setMaxUsers(response.data.count)
        localStorage.setItem(
          "orderID",
          JSON.stringify(response.data.results[0])
        )
        //You are changing that to lower case just to be 100% sure that there isn't trivial error as capital letter
        if (
          info.true_email.toLowerCase() ===
          response.data.results[0].customer.email.toLowerCase()
        ) {
          setPrimary(true)
          localStorage.setItem("primary", JSON.stringify(true))
        }

        //calling calculate number of active licenses function
        calculateActiveLicenses(response)

        //calling display function
        display(response)

        //calling the available licensens function
        showAvailableLicenses(response)

        //checking that everything is in sync before stuff on display renders - render functions(custom we wrote)
        setSync(true)
      })
      .catch(error => {
        //delete console log and replace it later with the error message
        console.log(error)
      })
  }, [change])

  //displays license users on the screen
  function render_admin() {
    if (sync === true) {
      return (
        <tbody>
          {users.map(user => (
            <tr>
              <td key={Math.random() * 999} className="user-td">
                <div className="user-box">{user.true_email}</div>
              </td>
              <td key={Math.random() * 999} className="device-td"></td>
              <td key={Math.random() * 999} className="reset-td">
                <button
                  className="reset-buttons"
                  onClick={() => {
                    api
                      //add license id - it is missing
                      .post(`/api/v1/devices/${user.id}/reset/`)
                      .then(response => response)
                      .catch(err => console.log(err))
                  }}
                >
                  Reset Device
                </button>
              </td>
              <td key={Math.random() * 999} className="password-td">
                <button
                  className="reset-buttons"
                  onClick={() => {
                    api
                      .post(`/api/v1/users/${user.id}/set_password/`, {
                        password: newPassword,
                      })
                      .then(response => response)
                      .catch(err => console.log(err))
                  }}
                >
                  Reset Password
                </button>
              </td>
              <td key={Math.random() * 999} className="unassign-td">
                {
                  <button
                    className="unassign-button"
                    onClick={() => {
                      console.log("isUsed", usedLicenses)
                      let unassignLicense
                      // goes through used licenses list and checks if that matches this users license id
                      for (let i = 0; i < usedLicenses.length; i++) {
                        //comparing user license to used licensens list - if users id is equal to used license user id then it sends request to that license id
                        if (user.id === usedLicenses[i].license_users[0].id)
                          unassignLicense = usedLicenses[i].id
                      }
                      api
                        .post(
                          `/api/v1/licenses/${unassignLicense}/unassign_user/`,
                          {
                            license_user_id: user.id,
                          }
                        )
                        .then(response => {
                          // console.log(response)
                          setChange(change + 1)
                        })
                        .catch(error => {
                          console.log(error)
                        })
                    }}
                  >
                    Unassign
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      )
    }
  }

  //main function
  return (
    <div>
      <Seo title="Manage Users" />
      {isLogged === true && (
        <DashboardStyle>
          <div className="row1">
            <div className="row-container">
              <h1>Manage Users</h1>
              <div className="info-numbs">
                <div className="current-number">
                  Current Number of Users:
                  <span className="number">{numUser}</span>
                </div>
                <div className="user-limit">
                  User Limit: <span className="number">{activeLicenses}</span>
                </div>
              </div>
              <div className="buttons-container">
                {numUser < activeLicenses && (
                  <UpgradeButton
                    className="upgradePlan"
                    name="Assign New User"
                    action={() => {
                      if (numUser < activeLicenses) {
                        setNewUser(true)
                      } else {
                        return
                      }
                    }}
                  ></UpgradeButton>
                )}
                {numUser === activeLicenses && (
                  <UpgradeButton
                    className="disabledButton"
                    name="Assign New User"
                    action={() => {
                      return
                    }}
                  ></UpgradeButton>
                )}
                <UpgradeButton
                  className="upgradeOrganisation"
                  name="Upgrade to increase user limit"
                  action={() => {
                    setOpenPopUp(true)
                  }}
                ></UpgradeButton>
              </div>
            </div>
          </div>
          {/* new table */}
          <div className="row2">
            <div className="row2-container">
              <table className="GeneratedTable">
                <thead>
                  <tr>
                    <th className="user-th">
                      <div className="user-box user">User</div>
                    </th>
                    <th className="device-th">Devices Activated</th>
                    <th className="reset-th">Reset Device</th>
                    <th className="password-th">Reset Password</th>
                    <th className="unassign-th">Unassign</th>
                  </tr>
                </thead>
                {render_admin()}
              </table>
            </div>
          </div>
          {/* end of new table */}
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
                <h2>Assign user to the license</h2>
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
                      setNumberr(e.target.value)
                    }}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="Pasword"
                    placeholder="Enter Password"
                    minLength="8"
                    required
                    onChange={e => {
                      setPassword(e.target.value)
                    }}
                  />
                  <UpgradeButton
                    className="upgradePlan special"
                    name="Assign"
                    action={e => {
                      e.preventDefault()
                      if (numUser < activeLicenses) {
                        //instead of csrf token in cookies and header you sent auth token - reason is cross-domain requests
                        api
                          .post(`/api/v1/licenses/${license[0]}/assign_user/`, {
                            email: email,
                            first_name: fname,
                            last_name: lname,
                            phone_number: numberr,
                            is_manager: false,
                            password: password,
                          })
                          .then(response => {
                            //delete console.log after testing
                            // console.log(response)
                            //live update data without refreshing the page
                            setChange(change + 1)
                          })
                          .catch(err => {
                            console.log(err)
                          })
                      } else {
                        return
                      }
                    }}
                  ></UpgradeButton>
                </form>
              </div>
            </div>
          )}
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

export default ManageUsers
