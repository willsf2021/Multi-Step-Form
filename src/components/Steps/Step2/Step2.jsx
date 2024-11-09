import { useState } from "react";
import {
  StyledStep,
  StyledPlanContainer,
  StyledContainerSwitchButton,
  StyledSwitchButton,
} from "./Step2.style";
import { Title } from "../../Title/Title";
import { Paragraph } from "../../Paragraph/Paragraph";
import iconArcade from "../../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../../assets/images/icon-advanced.svg";
import iconPro from "../../../assets/images/icon-pro.svg";

export const Step2 = ({
  billing,
  setBilling,
  planPrices,
  setPlan,
}) => {


  /**
   * Called when a radio button is toggled.
   * Dynamic handling of setting the plan
  */
  const onPlanChanged = (e) => {
    const { value } = e.target;
    setPlan(value);
  }

  return (
    <StyledStep>
      <Title contentTitle="Select your plan" />
      <Paragraph contentParagraph="You have the option of monthly or yearly billing" />
      <StyledPlanContainer>
        <div className="inputIconContainer">
          <input
            type="radio"
            name="plan"
            value="arcade"
            onChange={onPlanChanged}
          />
          <img src={iconArcade} alt="" />
          <aside>
            <h3>Arcade</h3>
            {billing == "yearly" ? (
              <>
                <p>${planPrices.arcade * 10}/yr</p>{" "}
                <p className="monthsFree">2 months free</p>
              </>
            ) : (
              <p>${planPrices.arcade}/mo</p>
            )}
          </aside>
        </div>
        <div className="inputIconContainer">
          <input
            type="radio"
            name="plan"
            value="advanced"
            onChange={onPlanChanged}
          />
          <img src={iconAdvanced} alt="" />
          <aside>
            <h3>Advanced</h3>
            {billing == "yearly" ? (
              <>
                <p>${planPrices.advanced * 10}/yr</p>{" "}
                <p className="monthsFree">2 months free</p>
              </>
            ) : (
              <p>${planPrices.advanced}/mo</p>
            )}
          </aside>
        </div>
        <div className="inputIconContainer">
          <input
            type="radio"
            name="plan"
            value="pro"
            onChange={onPlanChanged}
          />
          <img src={iconPro} alt="" />
          <aside>
            <h3>Pro</h3>
            {billing == "yearly" ? (
              <>
                <p>${planPrices.pro * 10}/yr</p>{" "}
                <p className="monthsFree">2 months free</p>
              </>
            ) : (
              <p>${planPrices.pro}/mo</p>
            )}
          </aside>
        </div>
      </StyledPlanContainer>
      <StyledContainerSwitchButton>
        <p className={billing == "monthly" ? "monthly" : ""}>Monthly</p>
        <StyledSwitchButton>
          <input
            id="yearly"
            type="checkbox"
            checked={billing}
            onChange={() => {
              setBilling(billing == "monthly" ? "yearly" : "monthly");
            }}
          />
          <span className="slider"></span>
        </StyledSwitchButton>
        <p className={billing == "yearly" ? "yearly" : ""}>Yearly</p>
      </StyledContainerSwitchButton>
    </StyledStep>
  );
};
