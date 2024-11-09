import { useState, useEffect } from "react";
import { StyledForm } from "./Form.style";
import { Step1 } from "../Steps/Step1/Step1";
import { Step2 } from "../Steps/Step2/Step2";
import { Step3 } from "../Steps/Step3/Step3";
import { Step4 } from "../Steps/Step4/Step4";

export const Form = ({ currentStep }) => {

  /**
   * Broke up the messy form state into managable pieces.
   * Each step component only uses its corresponding state, not the whole form.
   */
  const [totalPrice, setTotalPrice] = useState(0);
  const [plan, setPlan] = useState("arcade");
  const [billing, setBilling] = useState("monthly");
  const [personalInfo, setPersonalInfo] = useState({ name: "", email: "", phone: undefined });
  const [addons, setAddons] = useState({ onlineService: false, largerStorage: false, customProfile: false });

  /**
   * addon and plan prices are now constant.
   * billing is now accounted for in the final calculation.
   */
  const addonPrices = { onlineService: 1, largerStorage: 2, customProfile: 2 };
  const planPrices = { arcade: 9, advanced: 12, pro: 15 };

  const [form, setForm] = useState({
    plan,
    billing,
    personalInfo,
    addons,
    totalPrice,
  })

  /**
   * Calculates the total price of the customers plan with addons and billing period.
   */
  const calculateTotalPrice = () => {
    let total = 0;

    const planPrice = planPrices[plan] * (billing == "monthly" ? 1 : 10);
    total += planPrice;

    for (const [addon, enabled] of Object.entries(addons)) {
      if (enabled) {
          total += addonPrices[addon] * (billing === "monthly" ? 1 : 10);
      }
    }

    setTotalPrice(total);
  }

  /**
   * Compiles form information into one object after calculating the total price.
   */
  const compileForm = () => {
    calculateTotalPrice();
    return {
      plan,
      billing,
      personalInfo,
      addons,
      addonPrices: Object.fromEntries(
        Object.entries(addons).map(([key, value]) => [
          key,
          addonPrices[key] * (billing == "monthly" ? 1 : 10),
        ])
      ),
      planPrice: planPrices[plan] * (billing == "monthly" ? 1 : 10),
      totalPrice,
    };
  }

  /**
   * Recompile the form when changes are made to billing, plan, addons, or personal info.
   */
  useEffect(() => {
    const form = compileForm()
    setForm(form);
    // console.log("Updated form: " + JSON.stringify(form))
  }, [plan, billing, addons, personalInfo]);

  // Como controlar e passar os valores de planos, opções de prazo e serviços adicionais para o objeto?

  // Importante! Cada os serviços escolhidos tem que serem capturados pelo objeto, para que o backend envie esta informação ao DB, não é só o valor que importa!

  // Cada Plano tem um valor que depende do prazo incidência.

  // Arcade - 9 mensal e 90 anual;
  // Advanced - 12 mensal e 120 anual;
  // Pro - 15 mensal e 150 anual;

  // Serviços adicionais vão se somando ao valor total, sendo opcional a escolha de um ou mais serviços.


  // * EN Translation
  // How to control and pass the values ​​of plans, term options and additional services to the object?

  // Important! Each chosen service has to be captured by the object, so that the backend sends this information to the DB, it's not just the value that matters!

  // Each Plan has a value that depends on the incidence period.

  // Arcade - $9 monthly and $90 annually;
  // Advanced - $12 monthly and $120 annually;
  // Pro - $15 monthly and $150 annually;

  // Additional services are added to the total price, with the choice of one or more services being optional.


  /**
   * Only necessary data and callbacks are passed to step components
   */
  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        return <Step1 personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />;
      case 2:
        return (
          <Step2
            plan={plan}
            setPlan={setPlan}
            billing={billing}
            setBilling={setBilling}
            planPrices={planPrices}
          />
        );
      case 3:
        return (
          <Step3
            addons={addons}
            setAddons={setAddons}
            billing={billing}
            addonPrices={addonPrices}
          />
        );
      case 4:
        return (
          <Step4 form={form} planPrices={planPrices} />
        );
    }
  };

  return <StyledForm>{renderStep(currentStep)}</StyledForm>;
};
