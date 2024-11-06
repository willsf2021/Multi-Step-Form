import styled from "styled-components";
import { colors, weights, sizes } from "../../../constants/theme";

export const StyledStep = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const StyledPlanContainer = styled.fieldset`
  margin-top: 8px;
  border: none;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  div.inputIconContainer {
    position: relative;
    display: flex;
    padding: 16px;
    column-gap: 10px;
    align-items: flex-start;
    aside {
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
      p.monthsFree {
        color: ${colors.primary.marineBlue};
        font-weight: ${weights.medium};
      }
    }
    input {
      position: absolute;
      appearance: none;
      inset: 0;
      border: 1px solid ${colors.neutral.lightGray};
      border-radius: 10px;
      &:checked {
        border-color: ${colors.primary.purplishBlue};
        background-color: ${colors.primary.pastelBlueRadio};
      }
    }
  }
`;

export const StyledContainerSwitchButton = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  background-color: ${colors.neutral.magnolia};
  border-radius: 10px;
  margin-top: 8px;
  p {
    font-size: ${sizes.sm};
    font-weight: ${weights.bold};
    color: ${colors.neutral.coolGray};
  }

  .monthly {
    color: ${colors.primary.marineBlue};
  }

  .yearly {
    color: ${colors.primary.marineBlue};
  }
`;

export const StyledSwitchButton = styled.div`
  background-color: ${colors.primary.marineBlue};
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 40px;

  .slider {
    position: absolute;
    border-radius: 50%;
    height: 14px;
    width: 14px;
    background-color: ${colors.neutral.white};
    top: 3px;
    left: 4px;
    transition: all ease 0.3s;
  }

  input:checked + .slider {
    left: 22px;
  }

  input {
    appearance: none;
    position: absolute;
    inset: 0;
    cursor: pointer;
  }
`;
