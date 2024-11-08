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
  isYearly,
  setIsYearly,
  pricePlans,
  setPricePlans,
  setForm,
}) => {
  function handlePlan(e) {
    const { id } = e.target;

    setForm((prevForm) => {
      const newPlanStatus = !prevForm.plans[id];
      const newTotalPrice = newPlanStatus
        ? prevForm.totalPrice + pricePlans[id]
        : prevForm.totalPrice - pricePlans[id];

      return {
        ...prevForm,
        totalPrice: newTotalPrice,
        plans: {
          ...Object.keys(prevForm.plans).reduce((acc, key) => {
            acc[key] = false;
            return acc;
          }, {}),
          [id]: true,
        },
      };
    });
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
            id="planArcade"
            onChange={handlePlan}
          />
          <img src={iconArcade} alt="" />
          <aside>
            <h3>Arcade</h3>
            {isYearly ? (
              <>
                <p>${pricePlans.planArcade}/yr</p>{" "}
                <p className="monthsFree">2 months free</p>
              </>
            ) : (
              <p>${pricePlans.planArcade}/mo</p>
            )}
          </aside>
        </div>
        <div className="inputIconContainer">
          <input
            type="radio"
            name="plan"
            id="planAdvanced"
            onChange={handlePlan}
          />
          <img src={iconAdvanced} alt="" />
          <aside>
            <h3>Advanced</h3>
            {isYearly ? (
              <>
                <p>${pricePlans.planAdvanced}/yr</p>{" "}
                <p className="monthsFree">2 months free</p>
              </>
            ) : (
              <p>${pricePlans.planAdvanced}/mo</p>
            )}
          </aside>
        </div>
        <div className="inputIconContainer">
          <input type="radio" name="plan" id="planPro" onChange={handlePlan} />
          <img src={iconPro} alt="" />
          <aside>
            <h3>Pro</h3>
            {isYearly ? (
              <>
                <p>${pricePlans.planPro}/yr</p>{" "}
                <p className="monthsFree">2 months free</p>
              </>
            ) : (
              <p>${pricePlans.planPro}/mo</p>
            )}
          </aside>
        </div>
      </StyledPlanContainer>
      <StyledContainerSwitchButton>
        <p className={!isYearly ? "monthly" : ""}>Monthly</p>
        <StyledSwitchButton>
          <input
            id="yearly"
            type="checkbox"
            checked={isYearly}
            onChange={() => {
              setIsYearly(!isYearly);
            }}
          />
          <span className="slider"></span>
        </StyledSwitchButton>
        <p className={isYearly ? "yearly" : ""}>Yearly</p>
      </StyledContainerSwitchButton>
    </StyledStep>
  );
};
