import {
  StyledStep,
  StyledPricesContainer,
  StyledCurrentPlan,
  StyledServices,
} from "./Step4.style";

export const Step4 = ({ isYearly, form, pricePlans }) => {
  return (
    <StyledStep>
      <StyledPricesContainer>
        <StyledCurrentPlan>
          <p>
            Arcade {!isYearly ? "(Monthly)" : "(Yearly)"}
            <a href="">Change</a>
          </p>
          <p>
            ${pricePlans.arcade}/{!isYearly ? "mo" : "yr"}
          </p>
          <hr />
        </StyledCurrentPlan>
        <StyledServices>
          <div>
            <p>Online service</p>
            <p>+$1/{!isYearly ? "mo" : "yr"}</p>
          </div>
          <div>
            <p>Larger storage</p>
            <p>+$2/{!isYearly ? "mo" : "yr"}</p>
          </div>
        </StyledServices>
      </StyledPricesContainer>
      <div>
        <div>
          <p>Total (per {!isYearly ? "month" : "year"})</p>
          <p>
            ${form.totalPrice}/{!isYearly ? "mo" : "yr"}
          </p>
        </div>
      </div>
    </StyledStep>
  );
};
