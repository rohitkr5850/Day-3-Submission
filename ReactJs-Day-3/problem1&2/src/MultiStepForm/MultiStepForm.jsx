import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    preference: ""
  });

  return (
    <div>
      <h2>Multi Step Registration</h2>
      <p>Step {step} / 3</p>

      {step === 1 && (
        <StepOne data={formData} setData={setFormData} next={() => setStep(2)} />
      )}
      {step === 2 && (
        <StepTwo
          data={formData}
          setData={setFormData}
          next={() => setStep(3)}
          back={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <StepThree data={formData} back={() => setStep(2)} />
      )}
    </div>
  );
}
