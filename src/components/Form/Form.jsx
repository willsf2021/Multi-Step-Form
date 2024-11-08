import { useState, useEffect } from "react";
import { StyledForm } from "./Form.style";
import { Step1 } from "../Steps/Step1/Step1";
import { Step2 } from "../Steps/Step2/Step2";
import { Step3 } from "../Steps/Step3/Step3";
import { Step4 } from "../Steps/Step4/Step4";

export const Form = ({ currentStep }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: undefined,
    totalPrice: 0,
    plans: { planArcade: false, planAdvanced: false, planPro: false },
    billing: "monthly",
    addOns: {
      onlineService: false,
      largerStorage: false,
      customProfile: false,
    },
  });

  const [isYearly, setIsYearly] = useState(false);

  const [priceServices, setPriceServices] = useState({
    onlineService: 1,
    largerStorage: 2,
    customProfile: 2,
  });
  const [pricePlans, setPricePlans] = useState({
    arcade: 9,
    advanced: 12,
    pro: 15,
  });

  useEffect(() => {
    if (isYearly) {
      setPriceServices({
        onlineService: 10,
        largerStorage: 20,
        customProfile: 20,
      }),
        setPricePlans({
          planArcade: 90,
          planAdvanced: 120,
          planPro: 150,
        });
    } else {
      setPriceServices({
        onlineService: 1,
        largerStorage: 2,
        customProfile: 2,
      });
      setPricePlans({
        planArcade: 9,
        planAdvanced: 12,
        planPro: 15,
      });
    }
  }, [isYearly]);

  // Como controlar e passar os valores de planos, opções de prazo e serviços adicionais para o objeto?

  // Importante! Cada os serviços escolhidos tem que serem capturados pelo objeto, para que o backend envie esta informação ao DB, não é só o valor que importa!

  // Cada Plano tem um valor que depende do prazo incidência.

  // Arcade - 9 mensal e 90 anual;
  // Advanced - 12 mensal e 120 anual;
  // Pro - 15 mensal e 150 anual;

  // Serviços adicionais vão se somando ao valor total, sendo opcional a escolha de um ou mais serviços.

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        return <Step1 form={form} setForm={setForm} />;
      case 2:
        return (
          <Step2
            form={form}
            isYearly={isYearly}
            pricePlans={pricePlans}
            setPricePlans={setPricePlans}
            setForm={setForm}
            setIsYearly={setIsYearly}
          />
        );
      case 3:
        return (
          <Step3
            form={form}
            setForm={setForm}
            isYearly={isYearly}
            setIsYearly={setIsYearly}
            priceServices={priceServices}
            setPriceServices={setPriceServices}
          />
        );
      case 4:
        return (
          <Step4
            form={form}
            setForm={setForm}
            isYearly={isYearly}
            setIsYearly={setIsYearly}
            priceServices={priceServices}
            pricePlans={pricePlans}
          />
        );
    }
  };

  return <StyledForm>{renderStep(currentStep)}</StyledForm>;
};
