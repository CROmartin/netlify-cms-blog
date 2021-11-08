import * as React from "react"
import Seo from "../components/seo"
import Trusted from "../components/trusted"
import Contacts from "../components/contacts"
import Faq from "../components/faq"
import Switch from "../components/switch"
import { useState, useEffect } from "react"
import { navigate } from "gatsby"

const CheckoutPage = () => {
  //temporary for the designer - remove it later
  const [isLogged, setIsLogged] = useState(undefined)
  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("isLogged")))
    if (JSON.parse(localStorage.getItem("isLogged")) === true) {
      navigate("/app/")
    }
  }, [])
  return (
    <>
      <Seo title="Checkout" />
      <Switch></Switch>
      <Faq></Faq>
      <Trusted></Trusted>
      <Contacts></Contacts>
    </>
  )
}

export default CheckoutPage
