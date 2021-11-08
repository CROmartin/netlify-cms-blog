import * as React from "react"
import Seo from "../components/seo"
import Trusted from "../components/trusted"
import Contacts from "../components/contacts"
import Glance from "../components/glance"
import Slider from "../components/slider"
import { useEffect, useState } from "react"
import { navigate } from "gatsby"

const FeaturesPage = () => {
  const [isLogged, setIsLogged] = useState(undefined)
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isLogged")) === true) {
      navigate("/app/features")
    }
  }, [])

  return (
    <>
      <Seo title="Features" />
      <Glance></Glance>
      <Slider></Slider>
      <Trusted></Trusted>
      <Contacts></Contacts>
    </>
  )
}

export default FeaturesPage
