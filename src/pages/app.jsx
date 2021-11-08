import React from "react"
import { Router } from "@reach/router"
import Dashboard from "./app/dashboard"
import Download from "./app/download"
import ManageUsers from "./app/manage-users"
import PrivateRoute from "../components/privateRoute"
import Administrator from "./app/administrator"
import Header from "../components/dashHeader"
import ManageSubscription from "./app/manage-subscription"
import FeaturesPage from "./features"
import CheckoutPage from "./checkout"
import IndexPage from "."
import { CheckoutContext } from "../Contexts/CheckoutContext"
import { useState, useEffect } from "react"
import PasswordChange from "./app/password-change"
import api from "../components/api"
import Error from "./404"
import CheckoutNew from "./checkout-new1"
//Global context
import { GlobalAuthContext } from "../Contexts/GlobalAuthContext"
import { useContext } from "react"
import DasboardMenu from "../components/dashboardMenu"
import { navigate } from "gatsby"

const App = () => {
  const [checkoutDetails, setCheckoutDetails] = useState({})
  const [isLogged, setIsLogged] = useState(undefined)

  //ADD HERE FUNCTIONS FROM MANAGE-USERS AND ADMINISTRATOR SO YOU PREFETCH DATA BEFORE LOADING THE PAGE!

  //account state hooks
  const [planType, setPlanType] = useState(() => "")
  const [subscriptionPeriod, setSubscriptionPeriod] = useState(() => "")

  //manage-users state hooks - ones that need to be displayed before user interaction
  const [maxUsers, setMaxUsers] = useState(0)
  const [numUser, setNumUser] = useState(0)
  const [primary, setPrimary] = useState(null)
  const [users, setUsers] = useState("")
  const [sync, setSync] = useState(false)
  //info about license
  const [license, setLicense] = useState("")
  //info about licenses that are in use
  const [usedLicenses, setUsedLicenses] = useState("")
  //numberOfLicenses - handle that with custom attributes
  const [numberOfLicenses, setNumberOfLicenses] = useState(null)
  const [activeLicenses, setActiveLicenses] = useState(0)

  //administrator state hooks - those that change display without interaction
  const [licenseID, setLicenseID] = useState(null)
  const [admin, setAdmin] = useState("")
  const [administratorChange, setAdministratorChange] = useState(0)
  const [synchronize, setSynchronize] = useState(false)
  const [managers, setManagers] = useState([])

  //state hook used for license upgrades and quantity changes for users - shared between manage-users and manage-subscriptions
  const [subscriptionID, setSubscriptionID] = useState(undefined)
  //states that checks number of licenses
  const [number, setNumber] = useState(0)
  //Global context hook
  const { setUser, setGlobalPrimary, isLoggedIn, setIsLoggedIn } = useContext(
    GlobalAuthContext
  )

  //basic way to manage when to show dashboard menu and which tab is active
  let dash = false
  if (typeof window !== "undefined") {
    if (
      window.location.pathname === "/app/dashboard" ||
      window.location.pathname === "/app/dashboard/"
    ) {
      dash = true
    } else if (
      window.location.pathname === "/app/download" ||
      window.location.pathname === "/app/download/"
    ) {
      dash = true
    } else if (
      window.location.pathname === "/app/manage-users" ||
      window.location.pathname === "/app/manage-users/"
    ) {
      dash = true
    } else if (
      window.location.pathname === "/app/administrator" ||
      window.location.pathname === "/app/administrator/"
    ) {
      dash = true
    } else if (
      window.location.pathname === "/app/manage-subscription" ||
      window.location.pathname === "/app/manage-subscription/"
    ) {
      dash = true
    } else if (
      window.location.pathname === "/app/account" ||
      window.location.pathname === "/app/account/"
    ) {
      dash = true
    } else {
      dash = false
    }
  }
  //use effect that runs only on first render
  useEffect(() => {
    setPrimary(JSON.parse(localStorage.getItem("primary")))
    if (JSON.parse(localStorage.getItem("isLogged")) === true) {
      setUser(JSON.parse(localStorage.getItem("user")).first_name)
    }
    if (isLoggedIn === true || JSON.parse(localStorage.getItem("isLogged"))) {
      setIsLogged(true)
      api
        .get("/api/v1/licenses/")
        .then(res => {
          calculateActiveLicenses(res)
          // console.log(res)
          setSubscriptionID(res.data.results[0].subscription_id)
          localStorage.setItem("orderID", JSON.stringify(res.data.results[0]))
          //logic that checks if user is primary administrator
          //setting isLoggedIn global state
          setIsLoggedIn(true)
          if (
            JSON.parse(
              localStorage.getItem("user")
            ).true_email.toLowerCase() ===
            res.data.results[0].customer.email.toLowerCase()
          ) {
            setGlobalPrimary(true)
            localStorage.setItem("primary", JSON.stringify(true))
          }
        })
        .catch(err => {
          console.log(err)
          localStorage.clear()
          navigate("/login")
        })
    } else {
      return null
    }
  }, [isLoggedIn])

  //checking number of active licenses
  function calculateActiveLicenses(res) {
    let count = 0
    for (let i = 0; i < res.data.results.length; i++) {
      if (res.data.results[i].status.toLowerCase() === "active") {
        count++
      }
    }
    setActiveLicenses(count)
    setNumber(count)
  }

  return (
    <>
      <Header></Header>
      {dash && <DasboardMenu number={number}> </DasboardMenu>}
      <CheckoutContext.Provider
        value={{
          subscriptionID,
          setSubscriptionID,
          managers,
          setManagers,
          synchronize,
          setSynchronize,
          administratorChange,
          setAdministratorChange,
          admin,
          setAdmin,
          licenseID,
          setLicenseID,
          license,
          setLicense,
          usedLicenses,
          setUsedLicenses,
          numberOfLicenses,
          setNumberOfLicenses,
          planType,
          setPlanType,
          subscriptionPeriod,
          setSubscriptionPeriod,
          maxUsers,
          setMaxUsers,
          numUser,
          setNumUser,
          primary,
          setPrimary,
          users,
          setUsers,
          sync,
          setSync,
          checkoutDetails,
          setCheckoutDetails,
          isLogged,
          activeLicenses,
          setActiveLicenses,
          number,
          setNumber,
        }}
      >
        <Router>
          <PrivateRoute path="/app/dashboard/" component={Dashboard} />
          <PrivateRoute path="/app/download/" component={Download} />
          <PrivateRoute path="/app/manage-users/" component={ManageUsers} />
          <PrivateRoute path="/app/administrator/" component={Administrator} />
          <PrivateRoute path="/app/checkout/" component={CheckoutPage} />
          <PrivateRoute path="/app/features/" component={FeaturesPage} />
          <PrivateRoute path="/app/" component={IndexPage}></PrivateRoute>
          <PrivateRoute
            path="/app/manage-subscription/"
            component={ManageSubscription}
          />
          <PrivateRoute
            path="/app/password-change/"
            component={PasswordChange}
          />
          {/* Take all routes that have /app/ and aren't defined to 404 not found page */}
          <PrivateRoute path="/app/*" component={Error}></PrivateRoute>
          <PrivateRoute
            path="/app/checkout-new"
            component={CheckoutNew}
          ></PrivateRoute>
        </Router>
      </CheckoutContext.Provider>
    </>
  )
}

export default App
