import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const BenefitsStyle = styled.section`
  font-family: "Work Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 6rem;
    margin-bottom: 2.5rem;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    color: #111111;
    span {
      font-weight: 500;
    }

    @media (max-width: 480px) {
      font-size: 28px;
      line-height: 36px;
    }
  }

  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    margin-bottom: 1rem;
  }
  .row1 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.5rem;
    @media (max-width: 1024px) {
      flex-direction: column;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  .columns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 2rem;

    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 24px;
      text-align: center;
      color: #111111;
      @media (max-width: 480px) {
        font-size: 24px;
        line-height: 24px;
      }
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #222222;
      @media (max-width: 480px) {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
`

const Benefits = () => {
  return (
    <div
      style={{
        borderBottom: `1px solid gainsboro`,
      }}
    >
      <BenefitsStyle>
        <h1>
          Our <span>Benefits</span>
        </h1>
        <div className="row1">
          <div className="column1 columns">
            <div className="img-container">
              <StaticImage
                src="../images/benefits-icon1.png"
                layout="fixed"
                width={72}
                height={65}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                alt="Organization Icon"
                placeholder="blurred"
                style={{
                  padding: `0`,
                  margin: `0`,
                  marginRight: `1rem`,
                }}
              />
            </div>

            <h2>Available in 8 Languages</h2>
            <p>
              Use PDF Pro in your local language:<br></br>EN, FR, DE, IT, ES,
              BR, NL, SWE.
            </p>
          </div>
          <div className="column2 columns">
            <div className="img-container">
              <StaticImage
                src="../images/benefits-icon2.png"
                layout="fixed"
                width={60}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                alt="Organization Icon"
                placeholder="blurred"
                style={{
                  padding: `0`,
                  margin: `0`,
                  marginRight: `1rem`,
                }}
              />
            </div>
            <h2>Online Help Center</h2>
            <p>
              Step-by-step tutorials on all our features, <br></br> whenever you
              need them.
            </p>
          </div>
          <div className="column3 columns">
            <div className="img-container">
              <StaticImage
                src="../images/benefits-icon3.png"
                layout="fixed"
                width={60}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                alt="Organization Icon"
                placeholder="blurred"
                style={{
                  padding: `0`,
                  margin: `0`,
                  marginRight: `1rem`,
                }}
              />
            </div>

            <h2>Designed for Windows</h2>
            <p>
              Our applications are compatible with <br></br>
              Windows 10 / 8 / 7.
            </p>
          </div>
        </div>
      </BenefitsStyle>
    </div>
  )
}

export default Benefits
