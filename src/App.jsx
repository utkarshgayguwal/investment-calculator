import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  const [inputs, setInputs] = useState({
    initial_investment: 0,
    annual_investment: 0,
    expected_return: 0,
    duration: 0,
  });

  function handleValueChange(name, newValue) {
    setInputs((prevValue) => {
      return {
        ...prevValue,
        [name]: newValue,
      };
    });
  }

  console.log(inputs);
  return (
    <>
      <Header title="Investment Calculator" />
      <div id="user-input" className="input-group">
        <Input
          initialValue={inputs.initial_investment}
          name="initial-investment"
          label="Initial Investment"
          onValueChange={handleValueChange}
        />
        <Input
          initialValue={inputs.annual_investment}
          name="annual-investment"
          label="Annual Investment"
          onValueChange={handleValueChange}
        />
        <Input
          initialValue={inputs.expected_return}
          name="expected_return"
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
    </>
  );
}

export default App;
