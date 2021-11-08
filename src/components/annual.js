import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const AnnualStyle = styled.section`
  font-family: "Work Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .row2 {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .columns {
    width: 384px;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    border-radius: 10px;
    margin-right: 2rem;
    position: relative;
    z-index: 2;

    :last-of-type {
      margin-right: 0;
    }
  }

  .columnMP {
    :after {
      content: "Most Popular";
      position: absolute;
      display: flex;
      justify-content: center;
      top: -3rem;
      left: 3rem;
      right: 3rem;
      bottom: 99%;
      background-color: #e44331;
      z-index: -1;
      background: #e44331;
      border-radius: 10px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
  .top {
    background-color: #fbfbfb;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 61px;
  }

  .column-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #222222;
    margin-bottom: 0;
  }

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #222222;
    margin-bottom: 0.5rem;
  }

  .price {
    padding: 1rem 0;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 36px;
    text-align: center;
    color: #111111;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  .green {
    box-sizing: border-box;
    border-radius: 9999px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    padding: 0.5rem 4rem;
    text-decoration: none;
    text-align: center;
    color: #ffffff;
    background-color: rgb(0, 202, 66);
    border: 3px solid #00ca42;
    margin-bottom: 2rem;
    margin-top: 1rem;
    cursor: pointer;
    :hover {
      background-color: rgb(50, 205, 50);
    }
  }
  .tick {
    color: #00ca42;
    font-weight: 700;
    margin: 0px 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }

  .pcross {
    color: rgba(34, 34, 34, 0.3);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }
  .cross {
    color: rgba(34, 34, 34, 0.3);
    font-weight: 700;
    margin: 0px 10px;
  }

  p {
    :last-of-type {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 1024px) {
    .row2 {
      flex-direction: column;
    }
    .columns {
      margin-right: 0;
      margin-bottom: 2rem;
      :first-of-type {
        margin-bottom: 6rem;
      }

      :last-of-type {
        margin-bottom: 0rem;
      }
    }
  }

  @media (max-width: 480px) {
    .columns {
      width: 311px;
      margin-right: 0;
      margin-bottom: 2rem;

      :first-of-type {
        margin-bottom: 6rem;
      }

      :last-of-type {
        margin-bottom: 0rem;
      }
    }

    p,
    .tick,
    .pcross,
    .cross {
      font-size: 15px;
      line-height: 27px;
    }
  }

  @media (max-width: 320px) {
    .columns {
      width: 220px;
    }
  }
`

class Annual extends React.Component {
  pay(interval) {
    const session = {
      reset: true,
      products: [
        {
          path: interval,
          quantity: 1,
        },
      ],
      checkout: true,
    }
    window.fastspring.builder.push(session)
  }

  render() {
    return (
      <div>
        <AnnualStyle>
          <div className="container">
            <div className="row2">
              <div className="columns">
                <div className="top">
                  <h2>PDF Pro Lite</h2>
                </div>

                <div className="column-container">
                  <span className="price">$5</span>
                  <h4>per month</h4>
                  <h3>$60 annualy</h3>
                  <Link
                    // data-fsc-item-path="pdf-pro-lite-a"
                    // data-fsc-item-path-value="pdf-pro-lite-a"
                    // data-fsc-action="Add, Checkout"
                    // onClick={this.pay.bind(this, "pdf-pro-lite-a")}
                    className="green"
                    to="/checkout-new1"
                    state={{
                      product: "PDF Pro Lite",
                      cost: 60,
                      period: "Year",
                      productCode: "pdf-lite-a",
                      billing: "annual",
                    }}
                  >
                    Buy Now
                  </Link>
                </div>
                <p>
                  <span className="tick">&#128504;</span> Create and Merge
                </p>
                <p>
                  <span className="tick">&#128504;</span> Export to Word, Excel,
                  Powerpoint
                </p>
                <p>
                  <span className="tick">&#128504;</span> Secure &amp; Sign PDF
                  Files
                </p>
                <p>
                  <span className="tick">&#128504;</span> Scan to PDF
                </p>
                <p>
                  <span className="tick">&#128504;</span> Compress, flatten,
                  optimize
                </p>
                <p>
                  <span className="tick">&#128504;</span> Add Bates Numbering
                </p>
                <p>
                  <span className="tick">&#128504;</span> Archive with PDF/A
                </p>
                <p className="pcross">
                  <span className="cross">&times;</span> Edit Text
                </p>
                <p className="pcross">
                  <span className="cross">&times;</span> Edit Images
                </p>
                <p className="pcross">
                  <span className="cross">&times;</span> Optical Character
                  Recognition (OCR)
                </p>
              </div>
              <div className="columns columnMP">
                <div className="top">
                  <h2>PDF Pro</h2>
                </div>

                <div className="column-container">
                  <span className="price">$8</span>
                  <h4>per month</h4>
                  <h3>$96 annualy</h3>
                  <Link
                    className="green"
                    // data-fsc-item-path="pdf-pro-a"
                    // data-fsc-item-path-value="pdf-pro-a"
                    // data-fsc-action="Add, Checkout"
                    // onClick={this.pay.bind(this, "pdf-pro-a")}
                    to="/checkout-new1"
                    state={{
                      product: "PDF Pro",
                      cost: 96,
                      period: "Year",
                      productCode: "pdf-pro-annual",
                      billing: "annual",
                    }}
                  >
                    Buy Now
                  </Link>
                </div>
                <p>
                  <span className="tick">&#128504;</span> Create and Merge
                </p>
                <p>
                  <span className="tick">&#128504;</span> Export to Word, Excel,
                  Powerpoint
                </p>
                <p>
                  <span className="tick">&#128504;</span> Secure &amp; Sign PDF
                  Files
                </p>
                <p>
                  <span className="tick">&#128504;</span> Scan to PDF
                </p>
                <p>
                  <span className="tick">&#128504;</span> Compress, flatten,
                  optimize
                </p>
                <p>
                  <span className="tick">&#128504;</span> Add Bates Numbering
                </p>
                <p>
                  <span className="tick">&#128504;</span> Archive with PDF/A
                </p>
                <p>
                  <span className="tick">&#128504;</span> Edit Text
                </p>
                <p>
                  <span className="tick">&#128504;</span> Edit Images
                </p>
                <p className="pcross">
                  <span className="cross">&times;</span> Optical Character
                  Recognition (OCR)
                </p>
              </div>
              <div className="columns">
                <div className="top">
                  <h2>PDF Pro + OCR</h2>
                </div>

                <div className="column-container">
                  <span className="price">$12</span>
                  <h4>per month</h4>
                  <h3>$144 annualy</h3>
                  <Link
                    className="green"
                    // data-fsc-item-path="pdf-pro-ocr-a"
                    // data-fsc-item-path-value="pdf-pro-ocr-a"
                    // data-fsc-action="Add, Checkout"
                    // onClick={this.pay.bind(this, "pdf-pro-ocr-a")}
                    to="/checkout-new1"
                    state={{
                      product: "PDF Pro + OCR",
                      cost: 144,
                      period: "Year",
                      productCode: "pdf-pro-ocr-annual",
                      billing: "annual",
                    }}
                  >
                    Buy Now
                  </Link>
                </div>
                <p>
                  <span className="tick">&#128504;</span> Create and Merge
                </p>
                <p>
                  <span className="tick">&#128504;</span> Export to Word, Excel,
                  Powerpoint
                </p>
                <p>
                  <span className="tick">&#128504;</span> Secure &amp; Sign PDF
                  Files
                </p>
                <p>
                  <span className="tick">&#128504;</span> Scan to PDF
                </p>
                <p>
                  <span className="tick">&#128504;</span> Compress, flatten,
                  optimize
                </p>
                <p>
                  <span className="tick">&#128504;</span> Add Bates Numbering
                </p>
                <p>
                  <span className="tick">&#128504;</span> Archive with PDF/A
                </p>
                <p>
                  <span className="tick">&#128504;</span> Edit Text
                </p>
                <p>
                  <span className="tick">&#128504;</span> Edit Images
                </p>
                <p>
                  <span className="tick">&#128504;</span> Optical Character
                  Recognition (OCR)
                </p>
              </div>
            </div>
          </div>
        </AnnualStyle>
      </div>
    )
  }
}

export default Annual
