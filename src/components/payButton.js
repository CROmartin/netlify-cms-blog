import React from "react"
import styled from "styled-components"

const Green = styled.section`
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
`

class PayButton extends React.Component {
  pay(interval) {
    const session = {
      reset: true,
      products: [
        {
          path: interval,
          quantity: this.props.quantity,
        },
      ],
      paymentContact: {
        email: this.props.email,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
      },
      attributes: {
        assign_customer_as_user: this.props.type,
      },
      checkout: true,
    }
    window.fastspring.builder.push(session)
  }

  render() {
    return (
      <div>
        <Green>
          <button
            data-fsc-item-path={this.props.value}
            data-fsc-item-path-value={this.props.value}
            data-fsc-action="Add, Checkout"
            type="button"
            className={this.props.className}
            onClick={this.pay.bind(this, this.props.value)}
          >
            {this.props.name}
          </button>
        </Green>
      </div>
    )
  }
}

export default PayButton
