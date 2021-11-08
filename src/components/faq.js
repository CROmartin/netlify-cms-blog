import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FaqStyle = styled.div`
  font-family: "Work Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  padding-top: 2rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid gainsboro;
  border-top: 1px solid gainsboro;

  .container {
    width: 588px;
  }
  h1 {
    text-align: center;
  }
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #111111;
    position: relative;

    .up {
      display: inline-block;
      transform: rotate(90deg);
      font-weight: bolder;
      text-align: center;
      font-size: 34.5px;
      position: relative;
      left: 0.5rem;
    }
  }

  a {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #222222;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    align-items: center;
    line-height: 24px;
    text-decoration: none;
    color: #111111;

    :first-of-type {
      padding-top: 1rem;
      margin-top: 1rem;
      border-top: 1px solid #222222;
    }
  }

  .down {
    display: inline-block;
    font-size: 30px;
    transform: rotate(-90deg);
    font-weight: bolder;
  }

  p {
    word-wrap: break-word;
    font-style: normal;
    font-weight: normal;
    text-align: left;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
  }

  @media (max-width: 580px) {
    .container {
      width: 311px;
    }

    h1 {
      text-align: left;
      font-size: 28px;
      line-height: 32px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
    a {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 320px) {
    .container {
      width: 220px;
    }
  }
`

const Faq = () => {
  return (
    <div>
      <FaqStyle>
        <div className="container">
          <h1>FAQ</h1>
          <h2>
            What is your Billing &amp; Cancellation Policy?
            <div className="up">&#8249;</div>
          </h2>
          <p>
            The subscription will be automatically renewed at the start of the
            next billing period. You may cancel your subscription at any time,
            which will remain valid until the end of the current billing period.
            To manage your subscription, please log in to your account online.
          </p>
          <Link>
            Can I Upgrade / Downgrade ? <div className="down">&#8249;</div>
          </Link>
          <p>
            {" "}
            You certainly can! Once you place your order, you will receive
            account activation instructions, and log-in details to our online
            portal you can use to manage your subscription.{" "}
          </p>
          <Link>
            What type of support can I expect?{" "}
            <div className="down">&#8249;</div>
          </Link>
          <p>
            We provide how-to guides and a knowledge base to help you find
            answers to your questions. If that still doesn’t answer your
            question, we encourage you to submit a support ticket. We typically
            respond within 1-2 business days.
          </p>
          <Link>
            Can I get a multi-user License?
            <div className="down">&#8249;</div>
          </Link>
          <p>
            Yes! We provide discounts on the subscription for multiple users.
            Follow the multi-user checkout to subscribe multiple customer will
            be added as the license manager, who will be able to assign /
            unassign users to a license.
          </p>
        </div>
      </FaqStyle>
    </div>
  )
}

export default Faq
