import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import { calculateInvestmentResults, formatter } from "./util/investment";

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

  function deriveAnnualData(inputs) {
    const allValuesNonZero = Object.values(inputs).every((value) => {
      return value !== 0;
    });
    if (allValuesNonZero && inputs.duration > 0) {
      const annualData = calculateInvestmentResults(inputs);
      let totalInterest = 0
      console.log(annualData);
      return annualData.map((data, index) => {
        totalInterest += data.interest;
        const investedCapital = inputs.initialInvestment + (inputs.annualInvestment * (index + 1));

        return (
          <tr key={index}>
            <td>{data.year}</td>
            <td>{data.valueEndOfYear}</td>
            <td>{data.interest}</td>
            <td>{totalInterest}</td>
            <td>{investedCapital}</td>
          </tr>
        )
      })
    }

      return (
        <tr>
          <td colSpan="5" style={{ textAlign: 'center' }}>
            Please enter all values to see the investment results
          </td>
        </tr>
      ); 
  }

  // console.log(inputs);
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
        <tbody>{deriveAnnualData(inputs)}</tbody>
      </table>
    </>
  );
}

export default App;
