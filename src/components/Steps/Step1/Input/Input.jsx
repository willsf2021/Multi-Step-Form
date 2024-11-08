import { StyledInputContainer } from "./Input.style";

export const Input = ({
  contentLabel,
  typeInput,
  placeholder,
  name,
  handleForm,
  isRequired,
}) => {
  return (
    <StyledInputContainer>
      {contentLabel}
      <input
        type={typeInput}
        placeholder={placeholder}
        name={name}
        required={isRequired}
        onChange={handleForm}
      />
    </StyledInputContainer>
  );
};
