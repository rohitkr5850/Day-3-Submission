import PasswordValidator from "./PasswordValidator";
import MultiStepForm from "./MultiStepForm/MultiStepForm";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <PasswordValidator />
      <hr />
      <MultiStepForm />
    </div>
  );
}
