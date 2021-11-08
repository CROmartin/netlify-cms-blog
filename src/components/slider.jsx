import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"

import Annotate from "../components/annotate"
import Edit from "../components/edit"
import Create from "../components/create"
import Merge from "../components/merge"
import Secure from "../components/secure"
import Fill from "../components/fill"
import Scan from "../components/scan"

const SliderStyle = styled.section`
  font-family: "Work Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 17rem;
  overflow-x: hidden;

  .icon-img {
    cursor: pointer;
  }

  a {
    :hover {
      opacity: 1 !important;
    }
  }

  .icons-slider {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gainsboro;

    .icons {
      display: flex;
      flex-direction: row;
    }

    .column {
      height: 11rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }

  h2 {
    width: 149px;
    height: 90px;
    margin-bottom: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: rgba(17, 17, 17, 0.5);

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }

  @media (max-width: 1060px) {
    .icons {
      //firefox
      scrollbar-width: thin;
      scrollbar-color: gainsboro silver;
      :-webkit-scrollbar {
        width: 11px;
      }
      :-webkit-scrollbar-track {
        background: transparent;
      }
      :-webkit-scrollbar-thumb {
        background-color: gainsboro;
        border-radius: 10px;
        border: 3px solid transparent;
      }
      //other browsers

      /* width */
      ::-webkit-scrollbar {
        width: 20px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: gainsboro;
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: silver;
      }
      overflow-x: scroll;
    }
  }

  @media (max-width: 480px) {
    .icons {
      overflow-x: scroll;
    }
    .icons {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`

const Slider = () => {
  const [myFeature, setMyFeature] = useState("Annotate")
  return (
    <div>
      <SliderStyle>
        <div className="icons-slider">
          <div className="icons">
            <div className="column">
              <Link style={{ opacity: myFeature === "Annotate" ? "1" : "0.5" }}>
                <StaticImage
                  src="../images/Annotate.svg"
                  layout="fixed"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  placeholder="blurred"
                  className="icon-img"
                  onClick={() => {
                    setMyFeature("Annotate")
                  }}
                  style={{
                    padding: `0`,
                    margin: `0`,
                  }}
                />
              </Link>
              <h2
                style={{
                  borderBottom:
                    myFeature === "Annotate" ? "5px solid red" : "none",
                }}
              >
                Annotate &amp; Markup
              </h2>
            </div>
            <div className="column">
              <Link style={{ opacity: myFeature === "Edit" ? "1" : "0.5" }}>
                <StaticImage
                  src="../images/Edit.svg"
                  layout="fixed"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  className="icon-img"
                  placeholder="blurred"
                  onClick={() => {
                    setMyFeature("Edit")
                  }}
                  style={{
                    padding: `0`,
                    margin: `0`,
                  }}
                />
              </Link>
              <h2
                style={{
                  borderBottom: myFeature === "Edit" ? "5px solid red" : "none",
                }}
              >
                Edit PDF Files
              </h2>
            </div>
            <div className="column">
              <Link style={{ opacity: myFeature === "Create" ? "1" : "0.5" }}>
                <StaticImage
                  src="../images/Create.png"
                  layout="fixed"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  className="icon-img"
                  placeholder="blurred"
                  onClick={() => {
                    setMyFeature("Create")
                  }}
                  style={{
                    padding: `0`,
                    margin: `0`,
                  }}
                />
              </Link>
              <h2
                style={{
                  borderBottom:
                    myFeature === "Create" ? "5px solid red" : "none",
                }}
              >
                Create &amp; Convert
              </h2>
            </div>
            <div className="column">
              <Link style={{ opacity: myFeature === "Merge" ? "1" : "0.5" }}>
                <StaticImage
                  src="../images/Merge.png"
                  layout="fixed"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  className="icon-img"
                  placeholder="blurred"
                  onClick={() => {
                    setMyFeature("Merge")
                  }}
                  style={{
                    padding: `0`,
                    margin: `0`,
                  }}
                />
              </Link>
              <h2
                style={{
                  borderBottom:
                    myFeature === "Merge" ? "5px solid red" : "none",
                }}
              >
                Merge &amp; Optimize
              </h2>
            </div>
            <div className="column">
              <Link style={{ opacity: myFeature === "Secure" ? "1" : "0.5" }}>
                <StaticImage
                  src="../images/Secure.png"
                  layout="fixed"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  className="icon-img"
                  placeholder="blurred"
                  onClick={() => {
                    setMyFeature("Secure")
                  }}
                  style={{
                    padding: `0`,
                    margin: `0`,
                  }}
                />
              </Link>
              <h2
                style={{
                  borderBottom:
                    myFeature === "Secure" ? "5px solid red" : "none",
                }}
              >
                Secure &amp; Sign
              </h2>
            </div>
            <div className="column">
              <Link style={{ opacity: myFeature === "Fill" ? "1" : "0.5" }}>
                <StaticImage
                  src="../images/Forms.png"
                  layout="fixed"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  className="icon-img"
                  placeholder="blurred"
                  onClick={() => {
                    setMyFeature("Fill")
                  }}
                  style={{
                    padding: `0`,
                    margin: `0`,
                  }}
                />
              </Link>
              <h2
                style={{
                  borderBottom: myFeature === "Fill" ? "5px solid red" : "none",
                }}
              >
                Create &amp; Fill Forms
              </h2>
            </div>
            <div className="column">
              <Link style={{ opacity: myFeature === "Scan" ? "1" : "0.5" }}>
                <StaticImage
                  src="../images/OCR.png"
                  layout="fixed"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  className="icon-img"
                  placeholder="blurred"
                  onClick={() => {
                    setMyFeature("Scan")
                  }}
                  style={{
                    padding: `0`,
                    margin: `0`,
                  }}
                />
              </Link>
              <h2
                style={{
                  borderBottom: myFeature === "Scan" ? "5px solid red" : "none",
                }}
              >
                Scan &amp; OCR
              </h2>
            </div>
          </div>
        </div>
      </SliderStyle>
      <p>
        {myFeature === "Annotate" && <Annotate></Annotate>}
        {myFeature === "Edit" && <Edit></Edit>}
        {myFeature === "Create" && <Create></Create>}
        {myFeature === "Merge" && <Merge></Merge>}
        {myFeature === "Secure" && <Secure></Secure>}
        {myFeature === "Fill" && <Fill></Fill>}
        {myFeature === "Scan" && <Scan></Scan>}
      </p>
    </div>
  )
}

export default Slider
