import * as React from "react"
import Seo from "../components/seo"
import Contacts from "../components/contacts"
import TermsOfUse from "../components/conditions"

const CheckoutPage = () => {
  return (
    <>
      <Seo title="Terms of Use" />
      <TermsOfUse></TermsOfUse>
      <Contacts></Contacts>
    </>
  )
}

export default CheckoutPage
