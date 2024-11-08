import {
  StyledStep,
  StyledPricesContainer,
  StyledCurrentPlan,
  StyledServices,
} from "./Step4.style";

export const Step4 = ({ form, planPrices }) => {
  return (
    <StyledStep>
      <StyledPricesContainer>
        <StyledCurrentPlan>
          <p>
            {form.plan} ({form.billing})
            <a href="">Change</a>
          </p>
          <p>
            ${planPrices[form.plan] * (form.billing == "monthly" ? 1 : 10)}/{form.billing == "monthly" ? "mo" : "yr"}
          </p>
          <hr />
        </StyledCurrentPlan>
        <StyledServices>
          {compileAddonList(form)}
        </StyledServices>
      </StyledPricesContainer>
      <div>
        <div>
          <p>Total (per {form.billing == "monthly" ? "month" : "year"})</p>
          <p>
            ${form.totalPrice}/{form.billing == "month" ? "mo" : "yr"}
          </p>
        </div>
      </div>
    </StyledStep>
  );
};

/**
 * 
 * @param {*} addon addon key
 * @returns Formatted addon name
 */
function getAddonName(addon) {
  switch (addon) {
    case "onlineService": return "Online Service";
    case "largerStorage": return "Larger Storage";
    case "customProfile": return "Custom Profile";
    default: return "Error: Addon not found"
  }
}

/**
 * 
 * @param {*} form form object
 * @returns a list of divs containing addon data
 */
function compileAddonList(form) {
  return Object.entries(form.addons)
  .filter(([_, enabled]) => enabled) // Filter out only enabled add-ons
  .map(([addon]) => (
    <div key={addon}>
      <p>{getAddonName(addon)}</p>
      <p>+${form.addonPrices[addon]}/{form.billing === "monthly" ? "mo" : "yr"}</p>
    </div>
  ))
}
