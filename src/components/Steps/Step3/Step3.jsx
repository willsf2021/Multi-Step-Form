import { StyledStep, StyledServicesContainer } from "./Step3.style";
import { Title } from "../../Title/Title";
import { Paragraph } from "../../Paragraph/Paragraph";
import { useEffect, useState } from "react";

export const Step3 = ({ addons, setAddons, billing, addonPrices }) => {


  /**
   * Called when a radio checkbox is toggled
   * Handle checkbox changes dynamically.
   */ 
  const onServiceChecked = (e) => {
    const { name, value } = e.target;
    setAddons((prevAddons) => {
      return {
        ...prevAddons,
        [name]: value == "on" ? true : false,
      }
    })
  }



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
              onChange={onServiceChecked}
            />
            <span className="checkboxPersonalized"></span>
          </div>
          <aside>
            <h3>Online service</h3>
            <p>Acces to multiplayer games</p>
          </aside>
          <p className="priceAside">
            +${addonPrices.onlineService}
            {billing == "month" ? "/mo" : "/yr"}
          </p>
        </div>
        <div className="inputTextContainer">
          <div className="inputContainer">
            <input
              type="checkbox"
              name="largerStorage"
              onChange={onServiceChecked}
            />
            <span className="checkboxPersonalized"></span>
          </div>
          <aside>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </aside>
          <p className="priceAside">
            +${addonPrices.largerStorage}
            {billing == "month" ? "/mo" : "/yr"}
          </p>
        </div>
        <div className="inputTextContainer">
          <div className="inputContainer">
            <input
              type="checkbox"
              name="customProfile"
              onChange={onServiceChecked}
            />
            <span className="checkboxPersonalized"></span>
          </div>
          <aside>
            <h3>Customizable profile</h3>
            <p>Custom theme on your profile</p>
          </aside>
          <p className="priceAside">
            +${addonPrices.customProfile}
            {billing == "month" ? "/mo" : "/yr"}
          </p>
        </div>
      </StyledServicesContainer>
    </StyledStep>
  );
};
