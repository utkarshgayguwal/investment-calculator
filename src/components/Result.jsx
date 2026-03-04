import { calculateInvestmentResults, formatter } from "../util/investment";
import { useState } from "react";



export default function Result({ inputData }) {
  const [annualResult, setAnnualResult] = useState([]);

  function deriveAnnualData(inputs) {
  const allValuesNonZero = Object.values(inputs).every((value) => {
    return value !== 0;
  });
  if (allValuesNonZero && inputs.duration > 0) {
    setAnnualResult(calculateInvestmentResults(inputs));
    let totalInterest = 0;
    console.log(annualResult);
    return annualResult.map((data, index) => {
      totalInterest += data.interest;
      const investedCapital =
        inputs.initialInvestment + inputs.annualInvestment * (index + 1);

      return (
        <tr key={index}>
          <td>{data.year}</td>
          <td>{data.valueEndOfYear}</td>
          <td>{data.interest}</td>
          <td>{totalInterest}</td>
          <td>{investedCapital}</td>
        </tr>
      );
    });
  }

  return (
    <tr>
      <td colSpan="5" style={{ textAlign: "center" }}>
        Please enter all values to see the investment results
      </td>
    </tr>
  );
}

  return (
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
      <tbody>{deriveAnnualData(inputData)}</tbody>
    </table>
  );
}
