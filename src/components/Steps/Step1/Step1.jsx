import { StyledStep } from "./Step1.style";
import { Title } from "../../Title/Title";
import { Paragraph } from "../../Paragraph/Paragraph";
import { Input } from "./Input/Input";

export const Step1 = () => {
  return (
    <StyledStep>
      <Title contentTitle="Personal info" />
      <Paragraph contentParagraph="Please provide your name, email address, and phone number." />
      <Input
        contentLabel="Name"
        typeInput="text"
        placeholder="e.g. Stephen King"
      />
      <Input
        contentLabel="Email Address"
        typeInput="email"
        placeholder="e.g. stephenking@lorem.com"
      />
      <Input
        contentLabel="Phone Number"
        typeInput="number"
        placeholder="e.g. +1 234 567 890"
      />
    </StyledStep>
  );
};
