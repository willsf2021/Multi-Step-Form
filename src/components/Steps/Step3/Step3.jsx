import { StyledStep, StyledServicesContainer } from "./Step3.style";
import { Title } from "../../Title/Title";
import { Paragraph } from "../../Paragraph/Paragraph";
import { useEffect, useState } from "react";

export const Step3 = ({ setForm, isYearly, priceServices }) => {
  return (
    <StyledStep>
      <Title contentTitle="Pick add-ons" />
      <Paragraph contentParagraph="Add-ons help enhance your gaming experience." />
      <StyledServicesContainer>
        <div className="inputTextContainer">
          <div className="inputContainer">
            <input
              type="checkbox"
              name="onlineService"
              onChange={() => {
                setForm((prevForm) => {
                  const newAddOnStatus = !prevForm.addOns.onlineService;
                  const newTotalPrice = newAddOnStatus
                    ? prevForm.totalPrice + priceServices.onlineService
                    : prevForm.totalPrice - priceServices.onlineService;

                  return {
                    ...prevForm,
                    addOns: {
                      ...prevForm.addOns,
                      onlineService: newAddOnStatus,
                    },
                    totalPrice: newTotalPrice,
                  };
                });
              }}
            />
            <span className="checkboxPersonalized"></span>
          </div>
          <aside>
            <h3>Online service</h3>
            <p>Acces to multiplayer games</p>
          </aside>
          <p className="priceAside">
            +${priceServices.onlineService}
            {!isYearly ? "/mo" : "/yr"}
          </p>
        </div>
        <div className="inputTextContainer">
          <div className="inputContainer">
            <input
              type="checkbox"
              name="largerStorage"
              onChange={() => {
                setForm((prevForm) => {
                  const newAddOnStatus = !prevForm.addOns.largerStorage;
                  const newTotalPrice = newAddOnStatus
                    ? prevForm.totalPrice + priceServices.largerStorage
                    : prevForm.totalPrice - priceServices.largerStorage;

                  return {
                    ...prevForm,
                    addOns: {
                      ...prevForm.addOns,
                      largerStorage: newAddOnStatus,
                    },
                    totalPrice: newTotalPrice,
                  };
                });
              }}
            />
            <span className="checkboxPersonalized"></span>
          </div>
          <aside>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </aside>
          <p className="priceAside">
            +${priceServices.largerStorage}
            {!isYearly ? "/mo" : "/yr"}
          </p>
        </div>
        <div className="inputTextContainer">
          <div className="inputContainer">
            <input
              type="checkbox"
              name="customProfile"
              onChange={() => {
                setForm((prevForm) => {
                  const newAddOnStatus = !prevForm.addOns.customProfile;
                  const newTotalPrice = newAddOnStatus
                    ? prevForm.totalPrice + priceServices.customProfile
                    : prevForm.totalPrice - priceServices.customProfile;
                  return {
                    ...prevForm,
                    addOns: {
                      ...prevForm.addOns,
                      customProfile: newAddOnStatus,
                    },
                    totalPrice: newTotalPrice,
                  };
                });
              }}
            />
            <span className="checkboxPersonalized"></span>
          </div>
          <aside>
            <h3>Customizable profile</h3>
            <p>Custom theme on your profile</p>
          </aside>
          <p className="priceAside">
            +${priceServices.customProfile}
            {!isYearly ? "/mo" : "/yr"}
          </p>
        </div>
      </StyledServicesContainer>
    </StyledStep>
  );
};
