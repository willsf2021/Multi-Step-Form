import { StyledStep } from "./Step1.style";
import { Title } from "../../Title/Title";
import { Paragraph } from "../../Paragraph/Paragraph";
import { Input } from "./Input/Input";

export const Step1 = ({ form, setForm }) => {
  function handleForm(e) {
    const { name, value } = e.target;
    console.log(form[name]);
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  return (
    <StyledStep>
      <Title contentTitle="Personal info" />
      <Paragraph contentParagraph="Please provide your name, email address, and phone number." />
      <Input
        contentLabel="Name"
        typeInput="text"
        placeholder="e.g. Stephen King"
        name="name"
        isRequired={"required"}
        handleForm={handleForm}
      />
      <Input
        contentLabel="Email Address"
        typeInput="email"
        placeholder="e.g. stephenking@lorem.com"
        name="email"
        isRequired={"required"}
        handleForm={handleForm}
      />
      <Input
        contentLabel="Phone Number"
        typeInput="number"
        placeholder="e.g. +1 234 567 890"
        name="phone"
        isRequired={"required"}
        handleForm={handleForm}
      />
    </StyledStep>
  );
};
