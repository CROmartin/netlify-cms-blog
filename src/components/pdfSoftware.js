import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import "./layout.css"

const PdfSofttwareStyle = styled.section`
  font-family: "Work Sans", sans-serif;
  display: flex;
  width: 98%;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 100%;
    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    }
    .columns {
      margin-right: 2rem;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    position: relative;
    grid-template-areas:
      "column1 column2"
      "column3 column4";

    .columns {
      position: relative;
      left: 7rem;
      h3 {
        align-self: flex-start;
      }
    }
    .column1 {
      grid-area: column1;
      justify-self: flex-start;
    }

    .column2 {
      grid-area: column2;
      justify-self: flex-start;
    }

    .column3 {
      grid-area: column3;
      justify-self: flex-start;
    }

    .column4 {
      grid-area: column4;
      justify-self: flex-start;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    position: relative;
    grid-template-areas:
      "column1 column2"
      "column3 column4";
    .column1 {
      grid-area: column1;
      justify-self: flex-start;
    }

    .column2 {
      grid-area: column2;
      justify-self: flex-start;
    }

    .column3 {
      grid-area: column3;
      justify-self: flex-start;
    }

    .column4 {
      grid-area: column4;
      justify-self: flex-start;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  @media (max-width: 320px) {
    width: 100%;
  }

  h3 {
    @media (max-width: 480px) {
      align-self: flex-start;
      font-size: 24px;
      line-height: 24px;
    }
  }
  .columns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 20rem;
    flex-basis: 17%;
    h3 {
      align-self: flex-start;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 24px;
      text-align: center;
      color: #111111;
    }
    @media (max-width: 768px) {
      position: relative;
      left: 3rem;

      h3 {
        align-self: flex-start;
      }
    }
    @media (max-width: 480px) {
      position: relative;
      left: 0;
      margin-left: 2.5rem;
    }

    h4 {
      padding: 0;
      height: 10rem;
      margin: 1rem 0;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #222222;
      @media (max-width: 480px) {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }
  @media (max-width: 640px) {
    .columns {
      position: relative;
      left: 1.2rem;
    }
  }
  span {
    display: inline;
  }
`

const PdfSoftware = () => {
  return (
    <div
      className="pdfDiv"
      style={{
        backgroundColor: ` #FBFBFB`,
        borderBottom: `1px solid gainsboro`,
      }}
    >
      <h1
        style={{
          textAlign: `center`,
          margin: `0 0 3.5rem 0`,
          paddingTop: `3.5rem`,
          fontStyle: `normal`,
          fontWeight: `300`,
          fontSize: `36px`,
          lineHeight: `48px`,
          color: `#111111`,
        }}
        className="revolutionize-h1"
      >
        Comprehensive <span style={{ fontWeight: `500` }}>PDF Software</span>
      </h1>
      <PdfSofttwareStyle>
        <div className="column1 columns">
          <h3
            style={{
              fontStyle: `normal`,
              fontWeight: `500`,
              fontsize: `24px`,
              lineHeight: `24px`,
              textAlign: `center`,
              color: `#111111`,
            }}
          >
            Create &amp; Convert
          </h3>
          <h4>
            <StaticImage
              src="../images/Icon-create.svg"
              layout="fixed"
              width={35}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Icon Create"
              placeholder="blurred"
              style={{
                transform: `scale(1)`,
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
              }}
            />
            {"  "}
            Create &amp; Convert
          </h4>
          <h4>
            {" "}
            <StaticImage
              src="../images/Icon-merge.svg"
              layout="fixed"
              width={35}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Icon Create"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
                transform: `scale(1)`,
              }}
            />
            {"  "} Merge &amp; Split PDF files{" "}
          </h4>
          <h4>
            {" "}
            <StaticImage
              src="../images/Icon-convert.svg"
              layout="fixed"
              width={35}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Icon Create"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
                transform: `scale(1)`,
              }}
            />
            {"  "}
            Convert to Word, Excel,<br></br> Image, or HTML
          </h4>
        </div>
        <div className="column2 columns">
          <h3
            style={{
              fontStyle: `normal`,
              fontWeight: `500`,
              fontsize: `24px`,
              lineHeight: `24px`,
              textAlign: `center`,
              color: `#111111`,
            }}
          >
            Edit
          </h3>
          <h4>
            <StaticImage
              src="../images/Icon-edit.svg"
              layout="fixed"
              width={35}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Icon Create"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
                transform: `scale(1)`,
              }}
            />
            {"  "}
            Edit &amp; Rearrange text
          </h4>
          <h4>
            {" "}
            <StaticImage
              src="../images/Icon-insert.svg"
              layout="fixed"
              width={35}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Icon Create"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
                transform: `scale(1)`,
              }}
            />
            Insert / Move / Resize <br></br>Images
          </h4>
          <h4>
            {" "}
            <StaticImage
              src="../images/Icon-forms.svg"
              layout="fixed"
              width={35}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Icon Create"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
                transform: `scale(1)`,
              }}
            />
            {"  "}
            Manage Watermarks
          </h4>
        </div>
        <div className="column3 columns">
          <h3
            style={{
              fontStyle: `normal`,
              fontWeight: `500`,
              fontsize: `24px`,
              lineHeight: `24px`,
              textAlign: `center`,
              color: `#111111`,
            }}
          >
            Annotate
          </h3>
          <h4>
            <StaticImage
              src="../images/Icon-watermarks.svg"
              layout="fixed"
              width={35}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Icon Create"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
                transform: `scale(1)`,
              }}
            />
            {"  "}
            Manage Watermarks
          </h4>
          <h4>
            {" "}
            <StaticImage
              src="../images/Icon-highlight.svg"
              layout="fixed"
              width={35}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Icon Create"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
                transform: `scale(1)`,
              }}
            />
            {"  "}Highlight, Draw, Underline Text
          </h4>
          <h4>
            {" "}
            <StaticImage
              src="../images/Icon-manage.svg"
              layout="fixed"
              width={35}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Icon Create"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
                transform: `scale(1)`,
              }}
            />
            {"  "}
            Manage Attachments<br></br>
            to your PDF
          </h4>
        </div>
        <div className="column4 columns">
          <h3
            style={{
              fontStyle: `normal`,
              fontWeight: `500`,
              fontsize: `24px`,
              lineHeight: `24px`,
              textAlign: `center`,
              color: `#111111`,
            }}
          >
            Secure
          </h3>
          <h4>
            <StaticImage
              src="../images/Icon-encrypt.svg"
              layout="fixed"
              width={35}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Icon Create"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
                transform: `scale(1)`,
              }}
            />
            {"  "}
            Encrypt using Passwords
          </h4>
          <h4>
            {" "}
            <StaticImage
              src="../images/Icon-sign.svg"
              layout="fixed"
              width={35}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Icon Create"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
                transform: `scale(0.9)`,
              }}
            />
            {"  "} Electronically Sign <br></br>your Documents
          </h4>
          <h4>
            {" "}
            <StaticImage
              src="../images/Icon-add.svg"
              layout="fixed"
              width={35}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Icon Watermarks"
              placeholder="blurred"
              style={{
                transform: `scale(0.9)`,
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
              }}
            />
            {"  "}
            Add Digital Signatures <br></br>
            to your Files
          </h4>
        </div>
      </PdfSofttwareStyle>
      <p
        style={{
          marginTop: `1.5rem`,
          textAlign: `center`,
          marginBottom: `3.5rem`,
        }}
      >
        <Link
          to="/features"
          style={{
            color: `#111111`,
            fontStyle: `normal`,
            fontWeight: `300`,
            fontSize: `19px`,
            lineHeight: `19px`,
          }}
        >
          View Complete Feature Set
        </Link>
      </p>
    </div>
  )
}

export default PdfSoftware
