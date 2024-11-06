import { StyledInputContainer } from "./Input.style";

export const Input = ({ contentLabel, typeInput, placeholder }) => {
  return (
    <StyledInputContainer>
      {contentLabel}
      <input type={typeInput} placeholder={placeholder} />
    </StyledInputContainer>
  );
};
