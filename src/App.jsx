import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [inputs, setInputs] = useState({
    initial_investment: 0,
    annual_investment: 0,
    expected_return: 0,
    duration: 0,
  });

  function handleValueChange(event) {
    const {name, value} = event.target
    setInputs((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function deriveAnnualData(){
  //   const allValuesNonZero = Object.values(inputs).every(value => {
  //     console.log(inputs)
  //     console.log(value)
  //     return (value !== 0)
  // })
  //   if(allValuesNonZero){
  //     setAnnualResult(calculateInvestmentResults(inputs));
  //   }
  //   console.log(allValuesNonZero)
  //   console.log(annualResult)
  }

  console.log(inputs);
  return (
    <>
      <Header title="Investment Calculator" />
      <div id="user-input" className="input-group">
        <Input
          initialValue={inputs.initial_investment}
          name="initial_investment"
          label="Initial Investment"
          onValueChange={handleValueChange}
        />
        <Input
          initialValue={inputs.annual_investment}
          name="annual_investment"
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
      <table id="result">
        <thead>
          <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {/* {deriveAnnualData(inputs)} */}
        </tbody>
      </table>
    </>
  );
}

export default App;
