import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const MergeStyle = styled.section`
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

const Merge = () => {
  return (
    <div>
      <MergeStyle>
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
                />{" "}
                Merge PDF Files
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
                Reduce File Size
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
                Flatten PDF Objects
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
                Split PDF Files
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
                Insert/Delete Pages
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
                Rearrange Page Order
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
                Extract Pages from PDF
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
                Crop/Resize Pages
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
                Archive to PDF/A
              </div>
            </div>
          </div>
        </div>
        <div className="details">
          <h5>
            Merge, Optimize, and Rearrange your
            <span className="highlight">PDF Files</span>{" "}
          </h5>
          <div className="line1 lines">
            {" "}
            <StaticImage
              src="../images/merge_1.png"
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
              Merge, Split, rearrange: You’ll become more productive by putting
              together a document with only the right pages in a matter of
              minutes
            </h6>
          </div>
          <div className="line2 lines">
            {" "}
            <h6>
              Make your document ready to be distributed for a variety of
              audiences by compressing assets in your document, flattening
              images, or removing annotations.
            </h6>{" "}
            <StaticImage
              src="../images/merge_2.png"
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
          <div className="line3 lines">
            <StaticImage
              src="../images/merge_3.png"
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
              PDF Pro allows you to save your PDF file as a PDF/A-1b, PDF/A-2b
              or PDF/A-3b, adhering to document archiving specifications
            </h6>
          </div>
        </div>
      </MergeStyle>
    </div>
  )
}

export default Merge
