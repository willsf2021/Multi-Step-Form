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
  return (
    <StyledStep>
      <Title contentTitle="Select your plan" />
      <Paragraph contentParagraph="You have the option of monthly or yearly billing" />
      <StyledPlanContainer>
        <div className="inputIconContainer">
          <input
            type="radio"
            name="plan"
            value={"arcade"}
            onChange={() => {
              setForm((prevForm) => {
                const newTotalPrice =
                  prevForm.totalPrice + pricePlans.arcade[0];
                return {
                  ...prevForm,
                  totalPrice: newTotalPrice,
                };
              });
            }}
          />
          <img src={iconArcade} alt="" />
          <aside>
            <h3>Arcade</h3>
            {isYearly ? (
              <>
                <p>${pricePlans.arcade[0]}/yr</p>{" "}
                <p className="monthsFree">2 months free</p>
              </>
            ) : (
              <p>${pricePlans.arcade[0]}/mo</p>
            )}
          </aside>
        </div>
        <div className="inputIconContainer">
          <input
            type="radio"
            name="plan"
            value={"advanced"}
            onChange={() => {
              setForm((prevForm) => {
                const newTotalPrice =
                  prevForm.totalPrice + pricePlans.advanced[0];
                return {
                  ...prevForm,
                  totalPrice: newTotalPrice,
                };
              });
            }}
          />
          <img src={iconAdvanced} alt="" />
          <aside>
            <h3>Advanced</h3>
            {isYearly ? (
              <>
                <p>${pricePlans.advanced[0]}/yr</p>{" "}
                <p className="monthsFree">2 months free</p>
              </>
            ) : (
              <p>${pricePlans.advanced[0]}/mo</p>
            )}
          </aside>
        </div>
        <div className="inputIconContainer">
          <input
            type="radio"
            name="plan"
            value={"pro"}
            onChange={() => {
              setForm((prevForm) => {
                const newTotalPrice = prevForm.totalPrice + pricePlans.pro[0];
                return {
                  ...prevForm,
                  totalPrice: newTotalPrice,
                };
              });
            }}
          />
          <img src={iconPro} alt="" />
          <aside>
            <h3>Pro</h3>
            {isYearly ? (
              <>
                <p>${pricePlans.pro[0]}/yr</p>{" "}
                <p className="monthsFree">2 months free</p>
              </>
            ) : (
              <p>${pricePlans.pro[0]}/mo</p>
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
