import React from "react"
import Seo from "../../components/seo"
import styled from "styled-components"
//context hook
import { CheckoutContext } from "../../Contexts/CheckoutContext"
import { useContext } from "react"

const DashboardStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

function Download() {
  //user auth context states
  const { isLogged } = useContext(CheckoutContext)

  return (
    <>
      <Seo title="Download" />
      {/* {isLogged && <DashboardStyle></DashboardStyle>} */}
    </>
  )
}

export default Download
