import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const TrustedStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 3.5rem;
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    display: flex;
    transform: scale(0.8);
    align-items: flex-start;
    margin-bottom: 0rem;
  }

  @media (max-width: 480px) {
    display: flex;
    transform: scale(0.8);
    align-items: flex-start;
    margin-bottom: 0rem;
  }
  h1 {
    padding-top: 4rem;
    @media (max-width: 7670px) {
      font-size: 28px;
      line-height: 36px;
      width: auto;
      text-align: left !important;
      margin: 0rem !important;
    }
    @media (max-width: 480px) {
      font-size: 28px;
      line-height: 36px;
      text-align: left !important;
      margin: 0rem !important;
    }
  }
  .container-grid {
    display: grid;
    margin: 2rem;
    grid-template-columns: 1fr 0.5fr 1fr 0.25fr 0.25fr 0.5fr 0.5fr 0.5fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    position: relative;
    grid-template-areas:
      "a a b b c c c d d"
      "e f f g g h h h i";
    .a {
      grid-area: a;
      justify-self: end;
      position: relative;
      left: 1rem;
    }
    .b {
      grid-area: b;
      justify-self: end;
    }
    .c {
      grid-area: c;
      justify-self: center;
    }
    .d {
      grid-area: d;
      justify-self: start;
    }
    .e {
      grid-area: e;
      justify-self: end;
    }
    .f {
      grid-area: f;
      justify-self: center;
    }
    .g {
      grid-area: g;
      justify-self: center;
    }
    .h {
      grid-area: h;
      justify-self: end;
      position: relative;
      left: -1rem;
    }
    .i {
      grid-area: i;
    }

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 0.5fr 1fr 0.25fr 0.25fr 0.5fr 0.5fr 0.5fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0px 0px;
      position: relative;
      grid-template-areas:
        "a a b b c c c d d"
        "e f f g g h h h i";
      .a {
        grid-area: a;
        justify-self: center;
      }
      .b {
        grid-area: b;
        justify-self: end;
      }
      .c {
        grid-area: c;
        justify-self: center;
      }
      .d {
        grid-area: d;
        justify-self: start;
      }
      .e {
        grid-area: e;
        justify-self: end;
        position: relative;
        left: 2rem;
      }
      .f {
        grid-area: f;
        justify-self: center;
        position: relative;
      }
      .g {
        grid-area: g;
        justify-self: center;
        position: relative;
        left: 0.5rem;
      }
      .h {
        grid-area: h;
        justify-self: end;
        position: relative;
        left: 1rem;
      }
      .i {
        grid-area: i;
        justify-self: start;
        position: relative;
        left: -2rem;
      }
    }

    @media (max-width: 1023px) {
      grid-template-columns: 1fr 0.5fr 1fr 0.25fr 0.25fr 0.5fr 0.5fr 0.5fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0px 0px;
      position: relative;
      grid-template-areas:
        "a a b b c c c d d"
        "e f f g g h h h i";
      .a {
        grid-area: a;
        justify-self: start;
      }
      .b {
        grid-area: b;
        justify-self: end;
      }
      .c {
        grid-area: c;
        justify-self: center;
      }
      .d {
        grid-area: d;
        justify-self: start;
      }
      .e {
        grid-area: e;
        justify-self: end;
      }
      .f {
        grid-area: f;
        justify-self: center;
        position: relative;
        left: -1.2rem;
        z-index: 6;
      }
      .g {
        grid-area: g;
        justify-self: center;
        position: relative;
        left: 1rem;
        z-index: 5;
      }
      .h {
        grid-area: h;
        justify-self: end;
        position: relative;
        left: 5.5rem;
        z-index: 6;
      }
      .i {
        grid-area: i;
        position: relative;
        left: 0.7rem;
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr 0.5fr 1fr 0.25fr 0.25fr 0.5fr 0.5fr 0.5fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0px 0px;
      position: relative;
      grid-template-areas:
        "a a b b c c c d d"
        "e f f g g h h h i";
      .a {
        grid-area: a;
        justify-self: start;
      }
      .b {
        grid-area: b;
        justify-self: end;
      }
      .c {
        grid-area: c;
        justify-self: center;
      }
      .d {
        grid-area: d;
        justify-self: start;
      }
      .e {
        grid-area: e;
        justify-self: end;
      }
      .f {
        grid-area: f;
        justify-self: center;
        position: relative;
        left: -1.2rem;
        z-index: 6;
      }
      .g {
        grid-area: g;
        justify-self: center;
        position: relative;
        left: 1rem;
        z-index: 5;
      }
      .h {
        grid-area: h;
        justify-self: end;
        position: relative;
        left: 5.5rem;
        z-index: 6;
      }
      .i {
        grid-area: i;
        position: relative;
        left: 0.7rem;
      }
    }
    @media (max-width: 320px) {
      transform: scale(0.55) !important;
      left: -50% !important;
    }
    @media (max-width: 767px) {
      display: grid;
      transform: scale(0.9);
      position: relative;
      left: -2.5%;
      margin: 0.5rem;
      margin-bottom: 0rem;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 0px 0px;
      grid-template-areas:
        "a b c"
        "d e f"
        "g h i";
      .a {
        grid-area: a;
        position: relative;
        left: 0rem;
      }
      .b {
        grid-area: b;
        position: relative;
        left: 0rem;
      }
      .c {
        grid-area: c;
        position: relative;
        left: 0rem;
      }
      .d {
        grid-area: d;
        position: relative;
        left: 0rem;
      }
      .e {
        grid-area: e;
        position: relative;
        left: 0rem;
      }
      .f {
        grid-area: f;
        position: relative;
        left: 0rem;
      }
      .g {
        grid-area: g;
        position: relative;
        left: 0rem;
      }
      .h {
        grid-area: h;
        position: relative;
        left: 0rem;
      }
      .i {
        grid-area: i;
        position: relative;
        left: 0rem;
      }
    }
    @media (max-width: 600px) {
      display: grid;
      transform: scale(0.8);
      position: relative;
      left: -10%;
      margin: 0.5rem;
      margin-bottom: 0rem;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 0px 0px;
      grid-template-areas:
        "a b c"
        "d e f"
        "g h i";
      .a {
        grid-area: a;
        position: relative;
        left: 0rem;
      }
      .b {
        grid-area: b;
        position: relative;
        left: 0rem;
      }
      .c {
        grid-area: c;
        position: relative;
        left: 0rem;
      }
      .d {
        grid-area: d;
        position: relative;
        left: 0rem;
      }
      .e {
        grid-area: e;
        position: relative;
        left: 0rem;
      }
      .f {
        grid-area: f;
        position: relative;
        left: 0rem;
      }
      .g {
        grid-area: g;
        position: relative;
        left: 0rem;
      }
      .h {
        grid-area: h;
        position: relative;
        left: 0rem;
      }
      .i {
        grid-area: i;
        position: relative;
        left: 0rem;
      }
    }
    @media (max-width: 480px) {
      display: grid;
      transform: scale(0.6);
      position: relative;
      left: -35%;
      margin: 0.5rem;
      margin-bottom: 0rem;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 0px 0px;
      grid-template-areas:
        "a b c"
        "d e f"
        "g h i";
      .a {
        grid-area: a;
        position: relative;
        left: 0rem;
      }
      .b {
        grid-area: b;
        position: relative;
        left: 0rem;
      }
      .c {
        grid-area: c;
        position: relative;
        left: 0rem;
      }
      .d {
        grid-area: d;
        position: relative;
        left: 0rem;
      }
      .e {
        grid-area: e;
        position: relative;
        left: 0rem;
      }
      .f {
        grid-area: f;
        position: relative;
        left: 0rem;
      }
      .g {
        grid-area: g;
        position: relative;
        left: 0rem;
      }
      .h {
        grid-area: h;
        position: relative;
        left: 0rem;
      }
      .i {
        grid-area: i;
        position: relative;
        left: 0rem;
      }
    }
    @media (max-width: 280px) {
      left: -69% !important;
    }
  }
`

const Trusted = () => {
  return (
    <div style={{ borderBottom: `1px solid gainsboro`, marginBottom: `-2rem` }}>
      <TrustedStyle>
        <h1
          style={{
            marginTop: `3.5rem`,
            fontWeight: `300`,
            fontStyle: `normal`,
            fontSize: `36px`,
            lineHeight: `40px`,
            textAlign: `center`,
            color: `#111111`,
          }}
        >
          Trusted by{" "}
          <span
            style={{
              fontWeight: `500`,
              fontStyle: `normal`,
              fontSize: `36px`,
              lineHeight: `40px`,
              textAlign: `center`,
              color: `#111111`,
            }}
          >
            100,000+
          </span>{" "}
          Clients
        </h1>
        <div className="container-grid">
          <div className="a">
            <StaticImage
              src="../images/Org1-icon.svg"
              layout="fixed"
              width={198}
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
          <div className="b">
            <StaticImage
              src="../images/Org2-icon.svg"
              layout="fixed"
              width={198}
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
          <div className="c">
            <StaticImage
              src="../images/Org3-icon.svg"
              layout="fixed"
              width={198}
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
          <div className="d">
            <StaticImage
              src="../images/Org4-icon.svg"
              layout="fixed"
              width={198}
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
          <div className="e">
            {" "}
            <StaticImage
              src="../images/Org5-icon.svg"
              layout="fixed"
              width={198}
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
          <div className="f">
            <StaticImage
              src="../images/Org6-icon.svg"
              layout="fixed"
              width={198}
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
          <div className="g">
            <StaticImage
              src="../images/Org7-icon.svg"
              layout="fixed"
              width={198}
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
          <div className="h">
            {" "}
            <StaticImage
              src="../images/Org8-icon.svg"
              layout="fixed"
              width={198}
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
          <div className="i">
            <StaticImage
              src="../images/Org9-icon.svg"
              layout="fixed"
              width={198}
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
        </div>
      </TrustedStyle>
    </div>
  )
}

export default Trusted
