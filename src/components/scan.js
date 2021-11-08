import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const ScanStyle = styled.section`
  font-family: "Work Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .details {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid gainsboro;

    .lines {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 5rem;
    }
    h5 {
      margin-top: 2rem;
      margin-bottom: 5rem;
      font-style: normal;
      font-weight: 300;
      font-size: 36px;
      line-height: 49px;
      text-align: center;
      color: #111111;
    }

    .highlight {
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 49px;
      text-align: center;
      color: #111111;
    }
    h5 {
      display: flex;
      flex-direction: column;
    }
    h6 {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      color: #222222;
      width: 510px;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    .lines {
      flex-direction: column;
      align-items: center;
    }

    .line2 h6 {
      order: 2;
    }
    .slika {
      margin: 0 !important;
      padding: 0;
      width: 311px;
    }
    h6 {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #222222;
      width: 311px !important;
      margin-top: 2rem;
    }
  }
`

const Scan = () => {
  return (
    <div>
      <ScanStyle>
        <div className="details">
          <h5>
            Scan and OCR
            <span className="highlight">Tools</span>{" "}
          </h5>
          <div className="line1 lines">
            {" "}
            <StaticImage
              src="../images/scan_1.png"
              width={588}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Organization Icon"
              placeholder="blurred"
              className="slika"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
              }}
            />
            <h6>
              In order to offer the very best Optical Character recognition
              technology in our software, we have partnered with I.R.I.S. S.A.,
              any scanned document can how be made searchable and even, with 10+
              languages supported.
            </h6>
          </div>
          <div className="line2 lines">
            {" "}
            <h6>
              PDF Pro includes an interface to work with your scanner directly,
              automatically outputting a PDF file.
            </h6>{" "}
            <StaticImage
              src="../images/scan_2.png"
              width={588}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Organization Icon"
              placeholder="blurred"
              className="slika"
              style={{
                padding: `0`,
                margin: `0`,
                marginLeft: `1rem`,
              }}
            />
          </div>
        </div>
      </ScanStyle>
    </div>
  )
}

export default Scan
