import React, { useState } from "react"
import { createContext } from "react"

//creating context
export const GlobalAuthContext = createContext({})

//creating component that will be wrapping the root element to we can use global context on all pages and components
const GlobalContextProvider = ({ children }) => {
  //global login status
  const [isLoggedIn, setIsLoggedIn] = useState(undefined)
  //username for dashboard navbar
  const [user, setUser] = useState("")
  //state that keeps track of how many licenses does user have - active ones
  const [authNumber, setAuthNumber] = useState(null)
  //state that gives information if user is primary administrator aka customer
  const [globalPrimary, setGlobalPrimary] = useState(null)
  //basic variable that stores which licence type is active - by default it has value 1 - PDF Pro
  const [activee, setActivee] = useState(1)
  //checkout process
  const [step, setStep] = useState(0)
  const [complete, setComplete] = useState(0)

  return (
    <GlobalAuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        authNumber,
        setAuthNumber,
        globalPrimary,
        setGlobalPrimary,
        activee,
        setActivee,
        complete,
        setComplete,
        step,
        setStep,
      }}
    >
      {children}
    </GlobalAuthContext.Provider>
  )
}

export default GlobalContextProvider
