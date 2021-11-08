import React from "react"
import GlobalContextProvider from "./src/Contexts/GlobalAuthContext"
import Layout from "./src/components/layout"

//docs you used for this logic --> https://dev.to/crock/gatsby-js-browser-apis-explained-wrappageelement-vs-wraprootelement-n4k

//gatsby docs says that wrapRootElement is for providers
export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}

//gatsby docs says that wrapPageElement is for layouts
export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
