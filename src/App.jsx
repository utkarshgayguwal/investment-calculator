import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  // const [annualResult, setAnnualResult] = useState([]);

  function handleValueChange(event) {
    const { name, value } = event.target;
    const numericValue = value === '' ? 0 : Number(value);
    setInputs((prevValue) => {
      return {
        ...prevValue,
        [name]: numericValue,
      };
    });
  }

  return (
    <>
      <Header title="Investment Calculator" />
      <div id="user-input" className="input-group">
        <Input
          initialValue={inputs.initialInvestment}
          name="initialInvestment"
          label="Initial Investment"
          onValueChange={handleValueChange}
        />
        <Input
          initialValue={inputs.annualInvestment}
          name="annualInvestment"
          label="Annual Investment"
          onValueChange={handleValueChange}
        />
        <Input
          initialValue={inputs.expectedReturn}
          name="expectedReturn"
          label="Expected Return"
          onValueChange={handleValueChange}
        />
        <Input
          initialValue={inputs.duration}
          name="duration"
          label="Duration"
          onValueChange={handleValueChange}
        />
      </div>
      <Result inputData={inputs} />
    </>
  );
}

export default App;
