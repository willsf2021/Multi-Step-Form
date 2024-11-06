import styled from "styled-components";
import { colors, weights, sizes } from "../../../../constants/theme";

export const StyledInputContainer = styled.label`
  color: ${colors.primary.marineBlue};
  font-size: ${sizes.sm};
  font-weight: ${weights.medium};
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  input {
    font: ${weights.normal} ${sizes.md} "Ubuntu Sans", sans-serif;
    color: ${colors.primary.marineBlue};
    padding: 10px 12px;
    border: 1px solid ${colors.neutral.lightGray};
    border-radius: 4px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-weight: ${weights.medium};
    }
  }
`;
