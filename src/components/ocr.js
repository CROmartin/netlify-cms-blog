import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const OcrStyle = styled.section`
  font-family: "Work Sans", sans-serif;
  display: flex;
  justify-content: center;
  color: #ffffff;
  position: relative;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    transform: scale(0.9);
  }
  @media (max-width: 320px) {
    width: 100%;
  }

  .columns {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 3.5rem;
    padding-bottom: 6rem;
    @media (max-width: 480px) {
      padding-top: 0.5rem;
      padding-bottom: 2rem;
    }

    h1 {
      font-style: normal;
      font-weight: 300;
      font-size: 36px;
      line-height: 46px;
      @media (max-width: 480px) {
        font-size: 28px;
        line-height: 36px;
        transform: scale(0.9);
      }

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 46px;
      }
    }

    p {
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 27px;
      color: #ffffff;
      @media (max-width: 480px) {
        font-size: 16px;
        line-height: 24px;
        transform: scale(0.9);
        :first-of-type {
          margin: 2rem 0;
        }
      }
    }
  }
  .row1 {
    display: flex;
    justify-content: center;
    position: relative;
    top: 1.5rem;
    width: 100%;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .column1 {
    @media (max-width: 1024px) {
      padding-bottom: 0;
    }
    @media (max-width: 768px) {
      padding-bottom: 0;
    }
  }
  .column2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1024px) {
      padding-top: 0;
    }

    @media (max-width: 768px) {
      padding-top: 0;
    }
  }
  .row2 {
    display: flex;
    position: relative;
    justify-content: center;
    width: 40rem;
    top: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      width: auto;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      width: auto;
    }
  }

  .row2 div {
    margin: 0;
    width: 10rem;
  }

  .row2 p {
    text-align: center;
    margin-top: 0.5rem;
  }

  .column-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-right: 0.5rem;
  }
`

const Ocr = () => {
  return (
    <div
      style={{
        backgroundColor: ` #444444`,
      }}
    >
      <OcrStyle>
        <div className="column1 columns">
          <h1>
            Use the best{" "}
            <span>
              Optical <br></br>Character Recognition
            </span>{" "}
            <br></br>
            Technology
          </h1>
          <p>
            We have partnered with I.R.I.S. S.A., a leading OCR <br></br>
            provider, to power PDF Pro’s text recognition capabilities.<br></br>
            Now our customers can apply state-of-the-art, accurate OCR<br></br>
            to their PDF files to make scanned documents<br></br> searchable,
            and exportable.
          </p>
        </div>

        <div className="column2 columns">
          <div className="row1">
            <StaticImage
              src="../images/iris-logo.svg"
              layout="fixed"
              width={170}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Organization Icon"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
                transform: `scale(1)`,
                display: `block`,
              }}
            />
          </div>
          <div className="row2">
            <div className="column-inner-one column-inner">
              {" "}
              <StaticImage
                src="../images/ocr-icon1.svg"
                layout="fixed"
                width={70}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                alt="Organization Icon"
                placeholder="blurred"
                style={{
                  padding: `0`,
                  margin: `0`,
                  transform: `scale(1.22)`,
                  position: `relative`,
                  top: `0.5rem`,
                }}
              />
              <p>
                Scanned document, <br></br> Image with text
              </p>
            </div>
            <div className="column-inner-two column-inner">
              {" "}
              <StaticImage
                src="../images/ocr-icon2.svg"
                layout="fixed"
                width={70}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                alt="Organization Icon"
                placeholder="blurred"
                style={{
                  padding: `0`,
                  margin: `0`,
                  transform: `scale(1)`,
                }}
              />
              <p>
                Powered by <br></br> IRIS OCR
              </p>
            </div>
            <div className="column-inner-three column-inner">
              {" "}
              <StaticImage
                src="../images/ocr-icon3.svg"
                layout="fixed"
                width={70}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                alt="Organization Icon"
                placeholder="blurred"
                style={{
                  padding: `0`,
                  margin: `0`,
                  transform: `scale(1)`,
                }}
              />
              <p>
                Selectable <br></br>text
              </p>
            </div>
          </div>
        </div>
      </OcrStyle>
    </div>
  )
}

export default Ocr
