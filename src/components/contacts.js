import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

const ContactsStyle = styled.section`
  font-family: "Work Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-color: #222222;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    position: relative;
    padding-bottom: 5rem;
    grid-template-areas:
      "column1 column2 column5"
      "column1 column3 column4";
    .column5 h2,
    .column2 h2,
    .column3 h2,
    .column4 h2 {
      margin-left: 0 !important;
    }

    .column1 {
      grid-area: column1;
      position: relative;
      top: -5rem;
      justify-content: flex-end;

      .gatsby-image-wrapper {
        overflow: visible;
      }
    }
    .column2 {
      grid-area: column2;
    }
    .column3 {
      grid-area: column3;
    }
    .column4 {
      grid-area: column4;
    }
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    position: relative;
    padding-bottom: 5rem;
    grid-template-areas:
      "column1 column2 column5"
      "column1 column3 column4";
    .column5 h2,
    .column2 h2,
    .column3 h2,
    .column4 h2 {
      margin-left: 0 !important;
    }

    .column1 {
      grid-area: column1;
      position: relative;
      top: -5rem;
      justify-content: flex-end;

      .gatsby-image-wrapper {
        overflow: visible;
      }
    }
    .column2 {
      grid-area: column2;
    }
    .column3 {
      grid-area: column3;
    }
    .column4 {
      grid-area: column4;
    }
  }

  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4 2rem;
    padding-top: 6rem;
    width: 100vw;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
  .columns {
    display: flex;
    flex-direction: column;
    margin: 1rem 4rem;
    height: 10rem;
    @media (max-width: 480px) {
      height: auto;
      text-align: left;
    }

    h2 {
      margin: 0 auto;
      margin-bottom: 1rem;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      color: #dcdcdc;
      margin-left: 0;
      @media (max-width: 480px) {
        margin: 0;
        margin-bottom: 1rem;
        width: 192px;
      }
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: #dcdcdc;
    }

    a {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: #dcdcdc;
      text-decoration: none;
      margin-bottom: 0.5rem;

      :hover {
        color: gray;
      }
    }
  }

  @media (max-width: 1400px) {
    .columns {
      margin-bottom: 2.5rem;
      padding-bottom: 2rem;
    }

    .column1 {
      height: 100%;
    }
  }

  @media (max-width: 1200px) {
    .columns {
      margin-bottom: 2.5rem;
      padding-bottom: 2rem;
    }
  }
`

const Contacts = () => {
  return (
    <div style={{ borderBottom: `1px solid #E1E1E1` }}>
      <ContactsStyle>
        <div className="column1 columns">
          <StaticImage
            src="../images/contacts-logo.svg"
            layout="fixed"
            width={120}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF", "PNG"]}
            alt="Logo PDF"
            placeholder="blurred"
            style={{
              padding: `0`,
              margin: `1rem 0`,
              marginRight: `1rem`,
              transform: `scale(1)`,
              position: `relative`,
              zIndex: "1",
            }}
          />
          <p>
            Zipity Software Inc.<br></br> 1383 W. 8th Avenue<br></br> Vancouver,
            B.C. V6H 3W4<br></br>
            Company number BN700468291
          </p>
        </div>
        <div className="column2 columns">
          <h2>Products</h2>
          <Link to="">PDF Pro Expert</Link>
          {/* <Link to="">Expert PDF for Mac</Link> */}
        </div>
        <div className="column3 columns">
          <h2>Support</h2>
          <a href="https://support.pdfpro.com/hc/en-us/categories/900000414286-Knowledge-Base">
            Knowledge Base
          </a>
          <a href="https://support.pdfpro.com/hc/en-us/requests/new">
            Submit a Ticket
          </a>
          <Link to="">FAQ</Link>
          <Link to="">How-To Guides</Link>
          <a href="https://support.pdfpro.com/hc/en-us/sections/900002105743-Release-Notes">
            Release Notes
          </a>
        </div>
        <div className="column4 columns">
          <h2>Policy</h2>
          <Link to="">Licence Information</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
          <Link to="">Cookie Policy</Link>
          <Link to="">Privacy Policy</Link>
        </div>
        <div className="column5 columns">
          <h2>Company</h2>
          <Link to="">About Us</Link>
          <Link to="">Announcements</Link>
        </div>
      </ContactsStyle>
    </div>
  )
}

export default Contacts
