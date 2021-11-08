import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const AnnotateStyle = styled.section`
  font-family: "Work Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .check-container {
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid gainsboro;
  }
  .checks {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 40px 80px;
    margin: 4rem 0;
    padding-bottom: 4rem;
    grid-template-areas:
      "a b c"
      "d e f"
      "g h i";

    .a {
      grid-area: a;
      display: flex;
      align-items: center;
    }
    .b {
      grid-area: b;
      display: flex;
      align-items: center;
    }
    .c {
      grid-area: c;
      display: flex;
      align-items: center;
    }
    .d {
      grid-area: d;
      display: flex;
      align-items: center;
    }
    .e {
      grid-area: e;
      display: flex;
      align-items: center;
    }
    .f {
      grid-area: f;
      display: flex;
      align-items: center;
    }
    .g {
      grid-area: g;
      display: flex;
      align-items: center;
    }
    .h {
      grid-area: h;
      display: flex;
      align-items: center;
    }
    .i {
      grid-area: i;
      display: flex;
      align-items: center;
    }
  }
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
      margin-top: 7rem;
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
  @media (max-width: 1060px) {
    .icons {
      overflow-x: scroll;
    }
  }

  @media (max-width: 1024px) {
    .checks {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      gap: 30px 20px;
      align-items: center;
      grid-template-areas:
        "a f"
        "b g"
        "c h"
        "d i"
        "e .";
      .a {
        grid-area: a;
      }
      .b {
        grid-area: b;
      }
      .c {
        grid-area: c;
      }
      .d {
        grid-area: d;
      }
      .e {
        grid-area: e;
      }
      .f {
        grid-area: f;
      }
      .g {
        grid-area: g;
      }
      .h {
        grid-area: h;
      }
      .i {
        grid-area: i;
      }
    }
    .a,
    .b,
    .c,
    .d,
    .e,
    .f,
    .g,
    .h,
    .i {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    .checks {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
    }

    .a,
    .b,
    .c,
    .d,
    .e,
    .f,
    .g,
    .h,
    .i {
      display: flex;
      align-items: center;
    }

    .a,
    .b,
    .c,
    .d,
    .e,
    .f,
    .g,
    .h {
      margin-bottom: 1rem;
    }
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

const Annotate = () => {
  return (
    <div>
      <AnnotateStyle>
        <div className="check-container">
          <div className="wrapper">
            <div className="checks">
              <div className="a">
                <StaticImage
                  src="../images/check1.svg"
                  width={32}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  placeholder="tracedSVG"
                  style={{
                    padding: `0`,
                    margin: `0`,
                    marginRight: `1rem`,
                  }}
                />
                Highlight Text/Area
              </div>
              <div className="b">
                <StaticImage
                  src="../images/check1.svg"
                  width={32}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  placeholder="tracedSVG"
                  style={{
                    padding: `0`,
                    margin: `0`,
                    marginRight: `1rem`,
                  }}
                />
                Add Notes
              </div>
              <div className="c">
                <StaticImage
                  src="../images/check1.svg"
                  width={32}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  placeholder="tracedSVG"
                  style={{
                    padding: `0`,
                    margin: `0`,
                    marginRight: `1rem`,
                  }}
                />
                Shapes
              </div>
              <div className="d">
                <StaticImage
                  src="../images/check1.svg"
                  width={32}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  placeholder="tracedSVG"
                  style={{
                    padding: `0`,
                    margin: `0`,
                    marginRight: `1rem`,
                  }}
                />
                Strikethrough, Underline
              </div>
              <div className="e">
                <StaticImage
                  src="../images/check1.svg"
                  width={32}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  placeholder="tracedSVG"
                  style={{
                    padding: `0`,
                    margin: `0`,
                    marginRight: `1rem`,
                  }}
                />
                Typewriter
              </div>
              <div className="f">
                <StaticImage
                  src="../images/check1.svg"
                  width={32}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  placeholder="tracedSVG"
                  style={{
                    padding: `0`,
                    margin: `0`,
                    marginRight: `1rem`,
                  }}
                />
                Ruler &amp; Grid
              </div>
              <div className="g">
                <StaticImage
                  src="../images/check1.svg"
                  width={32}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  placeholder="tracedSVG"
                  style={{
                    padding: `0`,
                    margin: `0`,
                    marginRight: `1rem`,
                  }}
                />
                Add Attachments
              </div>
              <div className="h">
                <StaticImage
                  src="../images/check1.svg"
                  width={32}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  placeholder="tracedSVG"
                  style={{
                    padding: `0`,
                    margin: `0`,
                    marginRight: `1rem`,
                  }}
                />
                Free hand Pencil
              </div>
              <div className="i">
                <StaticImage
                  src="../images/check1.svg"
                  width={32}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF", "PNG"]}
                  alt="Organization Icon"
                  placeholder="tracedSVG"
                  style={{
                    padding: `0`,
                    margin: `0`,
                    marginRight: `1rem`,
                  }}
                />
                Measure Tool
              </div>
            </div>
          </div>
        </div>
        <div className="details">
          <h5>
            Annotate &amp; Markup
            <span className="highlight">with PDF Pro</span>{" "}
          </h5>
          <div className="line1 lines">
            {" "}
            <StaticImage
              src="../images/Annotate_1.png"
              width={588}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Organization Icon"
              className="slika"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
              }}
            />
            <h6>
              Whether it’s stamps, shapes, highlighters, or a typewriter tool,
              PDF Pro offers a full suite of tools for the end-user to annotate
              their PDFs without changing underlying content. These Annotations
              can be toggled to be visible or hidden, making it easy to work
              with markups.
            </h6>
          </div>
          <div className="line2 lines">
            {" "}
            <h6>
              PDF Pro offers precision measurement tools, grids and guides,
              often useful for Computer-Aided drawings (CAD), blueprints, and
              other engineering or technical documents often.
            </h6>{" "}
            <StaticImage
              src="../images/Annotate_2.png"
              width={588}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Organization Icon"
              className="slika"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginLeft: `1rem`,
              }}
            />
          </div>
          <div className="line3 lines">
            <StaticImage
              src="../images/Annotate_3.png"
              width={588}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF", "PNG"]}
              alt="Organization Icon"
              className="slika"
              placeholder="blurred"
              style={{
                padding: `0`,
                margin: `0`,
                marginRight: `1rem`,
              }}
            />
            <h6>
              PDF Pro loads fast, is devoid of bloatware, and with all the
              features you’d want to view PDF files on, we trust you’ll find PDF
              Pro makes working with PDF files intuitive and easy.
            </h6>
          </div>
        </div>
      </AnnotateStyle>
    </div>
  )
}

export default Annotate
