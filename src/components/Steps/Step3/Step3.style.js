import styled from "styled-components";
import { colors, weights, sizes } from "../../../constants/theme";

export const StyledStep = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const StyledServicesContainer = styled.fieldset`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  border: none;

  div.inputTextContainer {
    position: relative;
    display: flex;
    column-gap: 10px;
    align-items: center;
    aside {
      padding: 12px 48px;
      display: flex;
      flex-direction: column;
      row-gap: 4px;
      h3 {
        color: ${colors.primary.marineBlue};
        font-size: ${sizes.md};
        font-weight: ${weights.bold};
      }
      p {
        color: ${colors.neutral.coolGray};
        font-size: ${sizes.sm};
        font-weight: ${weights.normal};
      }
    }

    p.priceAside {
      font-size: 10px;
      font-weight: ${weights.medium};
      color: ${colors.primary.purplishBlue};
      display: inline;
      position: absolute;
      right: 8px;
    }

    span.checkboxPersonalized {
      padding: 1px;
      position: absolute;
      height: 18px;
      width: 18px;
      background-color: transparent;
      top: 50%;
      border-radius: 4px;
      left: 15px;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.neutral.white};
      font-size: 12px;
      &::before {
        padding: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        border: 1px solid ${colors.neutral.lightGray};
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
      }
    }

    div.inputContainer {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid ${colors.neutral.lightGray};
      border-radius: 10px;
      input {
        position: absolute;
        appearance: none;
        inset: 0;
      }
    }

    input:checked + .checkboxPersonalized::before {
      background-color: ${colors.primary.purplishBlue};
      border-color: ${colors.primary.purplishBlue};
      content: " ✔";
    }
  }

  div.inputContainer:has(input:checked) {
    border-color: ${colors.primary.purplishBlue};
    background-color: ${colors.primary.pastelBlueRadio};
  }
`;
