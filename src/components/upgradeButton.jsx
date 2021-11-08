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

const UpgradePlan = styled.section`
  .upgradePlan {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    width: 210px;
    height: 42px;
    background: #00ca42;
    border-radius: 60px;
    border: none;
    flex: none;
    flex-grow: 0;
    margin: 0px 16px;

    &:hover {
      background: rgba(0, 202, 66, 0.6);
    }

    .text {
      width: 162px;
      height: 18px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      color: #ffffff;
      flex: none;
      flex-grow: 0;
      margin: 0px 10px;
    }
  }
`

const UpgradeOrganisation = styled.section`
  .upgradeOrganisation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    width: 244px;
    height: 42px;
    border-radius: 60px;
    flex: none;
    flex-grow: 0;
    margin: 0px 16px;
    border: 2px solid #007de6;
    background-color: transparent;

    &:hover {
      background: rgba(0, 125, 230, 0.5);
      border: 2px solid rgba(0, 125, 230, 0.5);

      .text {
        color: #ffffff;
      }
    }

    .text {
      width: max-content;
      height: 18px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      color: #007de6;
      flex: none;
      flex-grow: 0;
      margin: 0px 10px;

      &:hover {
        color: #ffffff;
      }
    }
  }
`

const DisabledButton = styled.section`
  .disabledButton {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 24px;
    width: 192px;
    height: 42px;
    background: #dddddd;
    border-radius: 60px;
    flex: none;
    flex-grow: 0;
    margin: 0px 16px;
    border: #dddddd;
    margin-left: -5px;

    .text {
      width: 144px;
      height: 18px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      color: #ffffff;
      flex: none;
      flex-grow: 0;
    }
  }
`

function UpgradeButton({ name, action, className }) {
  return (
    <div>
      <DisabledButton>
        <UpgradeOrganisation>
          <UpgradePlan>
            <button className={className} onClick={action}>
              <span className="text">{name}</span>
            </button>
          </UpgradePlan>
        </UpgradeOrganisation>
      </DisabledButton>
    </div>
  )
}

UpgradeButton.defaultProps = {
  name: "Current",
  className: "green",
}

export default UpgradeButton
