import { useState } from "react";
import { GlobalStyles } from "./globalStyles";
import { Form } from "./components/Form/Form";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <GlobalStyles />
      <Form currentStep={currentStep} />
      <button
        onClick={() => {
          setCurrentStep(currentStep + 1);
        }}
      >
        NEXT STEP
      </button>
    </>
  );
}

export default App;
