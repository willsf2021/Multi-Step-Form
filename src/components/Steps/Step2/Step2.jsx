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

export const Step2 = ({ isYearly, setIsYearly }) => {
  return (
    <StyledStep>
      <Title contentTitle="Select your plan" />
      <Paragraph contentParagraph="You have the option of monthly or yearly billing" />
      <StyledPlanContainer>
        <div className="inputIconContainer">
          <input type="radio" name="plan" value={"arcade"} />
          <img src={iconArcade} alt="" />
          <aside>
            <h3>Arcade</h3>
            {isYearly ? (
              <>
                <p>$90/yr</p> <p className="monthsFree">2 months free</p>
              </>
            ) : (
              <p>$9/mo</p>
            )}
          </aside>
        </div>
        <div className="inputIconContainer">
          <input type="radio" name="plan" value={"advanced"} />
          <img src={iconAdvanced} alt="" />
          <aside>
            <h3>Advanced</h3>
            {isYearly ? (
              <>
                <p>$120/yr</p> <p className="monthsFree">2 months free</p>
              </>
            ) : (
              <p>$12/mo</p>
            )}
          </aside>
        </div>
        <div className="inputIconContainer">
          <input type="radio" name="plan" value={"pro"} />
          <img src={iconPro} alt="" />
          <aside>
            <h3>Pro</h3>
            {isYearly ? (
              <>
                <p>$150/yr</p> <p className="monthsFree">2 months free</p>
              </>
            ) : (
              <p>$15/mo</p>
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
