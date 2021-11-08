import * as React from "react"
import Seo from "../components/seo"
import PdfSoftware from "../components/pdfSoftware"
import Organizations from "../components/organizations"
import Ocr from "../components/ocr"
import Benefits from "../components/benefits"
import Revolutionize from "../components/revolutionize"
import Contacts from "../components/contacts"
import HeroRemaster from "../components/hero2"
import { useEffect } from "react"
import { navigate } from "gatsby"
//Global context hook
import { GlobalAuthContext } from "../Contexts/GlobalAuthContext"
import { useContext } from "react"

const IndexPage = () => {
  //Context hook
  const { isLoggedIn, setIsLoggedIn } = useContext(GlobalAuthContext)
  console.log("wrong index", isLoggedIn)
  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("isLogged")))
    if (JSON.parse(localStorage.getItem("isLogged"))) {
      isAuth()
    }
  }, [isLoggedIn])

  function isAuth() {
    if (isLoggedIn) {
      navigate("/app/")
    } else {
    }
  }

  return (
    <>
      <Seo title="Home" />
      <HeroRemaster auth={isLoggedIn}></HeroRemaster>
      <PdfSoftware></PdfSoftware>
      <Organizations></Organizations>
      <Ocr></Ocr>
      <Benefits></Benefits>
      <Revolutionize auth={isLoggedIn}></Revolutionize>
      <Contacts></Contacts>
    </>
  )
}

export default IndexPage
