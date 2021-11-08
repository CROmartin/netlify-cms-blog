import React from "react"
import { navigate } from "gatsby"
//global context
import { GlobalAuthContext } from "../Contexts/GlobalAuthContext"
import { useContext, useLayoutEffect } from "react"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  //if global context works you don't need this state hook
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  //global context hook for managing user's login status
  const { isLoggedIn, setIsLoggedIn } = useContext(GlobalAuthContext)

  //You have to use useState for that because you can't render the component and update the global context at the same time - it has to be inside of hook!
  useLayoutEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("isLogged")))
    if (JSON.parse(localStorage.getItem("isLogged")) !== true) {
      isAuth()
    }
  }, [])

  //checking if the request is authorized and if not it redirects to login
  function isAuth() {
    if (!isLoggedIn && location.pathname !== `/login/`) {
      navigate("/login/")
      return null
    }
  }

  //we need function like this to prevent flicker while retrieving the state after the page refresh and to prevent from rendering the component if not authorized
  function Display() {
    if (isLoggedIn === true) {
      return <Component active={1} {...rest} />
    }
  }

  return <>{Display()}</>
}

export default PrivateRoute
