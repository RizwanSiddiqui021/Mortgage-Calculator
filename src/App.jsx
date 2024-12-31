import "./App.css";
import { useState } from "react";
import CalculatedResult from "./components/CalculatedResult";
import Form from "./components/Form";
import UnCalculatedResult from "./components/UnCalculatedResult";

function App() {
  // Calculate Repayments Button
  const handleCalculateRepayments = () => {
    showCalculatedResult();
    // Validation Section Start
    {
      mortgageAmount.length <= 0
        ? setMortgageAmountState(true)
        : setMortgageAmountState(false);
    }

    {
      mortgageTerm.length <= 0
        ? setMortgageTermState(true)
        : setMortgageTermState(false);
    }

    {
      interestRate.length <= 0
        ? setInterestRateState(true)
        : setInterestRateState(false);
    }

    {
      mortgageType === ""
        ? setMortgageTypeState(true)
        : setMortgageTypeState(false);
    }

    if (
      mortgageAmount.length <= 0 ||
      mortgageTerm.length <= 0 ||
      interestRate.length <= 0 ||
      mortgageType === ""
    ) {
      setActivePage(true);
    }
    // Validation Section End

    if (mortgageType === "Repayment") {
      repaymentCalculation();
    }
    if (mortgageType === "Interest Only") {
      interestOnlyCalculation();
    }
  };

  // Clear All Button
  const handleClearAll = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("");
    setActivePage(true);
    setMortgageAmountState(false);
    setMortgageTermState(false);
    setInterestRateState(false);
    setMortgageTypeState(false);
  };

  // ActivePage
  const [activePage, setActivePage] = useState(true);
  const showCalculatedResult = () => {
    setActivePage(false);
  };

  // Get Mortgage Amount Input Value
  const [mortgageAmount, setMortgageAmount] = useState("");
  const mortgageAmountChange = (e) => {
    setMortgageAmount(e.target.value);
  };
  // Check Mortgage Amount State
  const [mortgageAmountState, setMortgageAmountState] = useState(false);

  // Mortgage Term Input Value
  const [mortgageTerm, setMortgageTerm] = useState("");
  const mortgageTermChange = (e) => {
    setMortgageTerm(e.target.value);
  };
  // Check Mortgage Term State
  const [mortgageTermState, setMortgageTermState] = useState(false);

  // Interest Rate Input Value
  const [interestRate, setInterestRate] = useState("");
  const interestRateChange = (e) => {
    setInterestRate(e.target.value);
  };
  // Check Interest Rate State
  const [interestRateState, setInterestRateState] = useState(false);

  // Mortgage Type Value
  const [mortgageType, setMortgageType] = useState("");
  const mortgageTypeChange = (e) => {
    setMortgageType(e.target.value);
  };
  // Check Mortgage Type State
  const [mortgageTypeState, setMortgageTypeState] = useState(false);

  // Repayment Calculation Section
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepay, setTotalRepay] = useState(0);

  const repaymentCalculation = () => {
    const floatMortgageAmount = parseFloat(mortgageAmount);
    const intMortgageTerm = parseInt(mortgageTerm);
    const floatInterestRate = parseFloat(interestRate);

    const monthlyInterestRate = floatInterestRate / 100 / 12;
    const totalPayments = intMortgageTerm * 12;
    // Monthly Repayment Calculation
    const monthlyRepayment =
      (floatMortgageAmount *
        monthlyInterestRate *
        (1 + monthlyInterestRate) ** totalPayments) /
      ((1 + monthlyInterestRate) ** totalPayments - 1);
    const formattedMonthlyRepayment = monthlyRepayment.toFixed(2);
    setMonthlyRepayment(formattedMonthlyRepayment);
    // Total Number of Payments Calculation
    const totalRepay = monthlyRepayment * totalPayments;
    const formattedTotalRepay = totalRepay.toFixed(2);
    setTotalRepay(formattedTotalRepay);
  };

  // Interest Only Calculation Section
  const [monthlyInterestPayment, setMonthlyInterestPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const interestOnlyCalculation = () => {
    const floatMortgageAmount = parseFloat(mortgageAmount);
    const intMortgageTerm = parseInt(mortgageTerm);
    const floatInterestRate = parseFloat(interestRate);

    const monthlyInterestRate = floatInterestRate / 100 / 12;
    const totalPayments = intMortgageTerm * 12;
    // Monthly Interest Only Repayment Calculation
    const monthlyInterestPayment = floatMortgageAmount * monthlyInterestRate;
    const formattedMonthlyInterestPayment = monthlyInterestPayment.toFixed(2);
    setMonthlyInterestPayment(formattedMonthlyInterestPayment);
    // Total Number of Payments(Interest Only) Calculation
    const totalInterest = monthlyInterestPayment * totalPayments;
    const formattedTotalInterest = totalInterest.toFixed(2);
    setTotalInterest(formattedTotalInterest);
  };

  return (
    <div className="bg-[#E4F4FD] grid place-items-center h-screen">
      <div className="bg-white max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:rounded-3xl">
        <Form
          handleClearAll={handleClearAll}
          handleCalculateRepayments={handleCalculateRepayments}
          mortgageAmount={mortgageAmount}
          mortgageAmountChange={mortgageAmountChange}
          mortgageTerm={mortgageTerm}
          mortgageTermChange={mortgageTermChange}
          interestRate={interestRate}
          interestRateChange={interestRateChange}
          mortgageType={mortgageType}
          mortgageTypeChange={mortgageTypeChange}
          mortgageAmountState={mortgageAmountState}
          mortgageTermState={mortgageTermState}
          interestRateState={interestRateState}
          mortgageTypeState={mortgageTypeState}
        ></Form>
        {activePage ? (
          <UnCalculatedResult></UnCalculatedResult>
        ) : (
          <CalculatedResult
            monthlyRepayment={monthlyRepayment}
            totalRepay={totalRepay}
            monthlyInterestPayment={monthlyInterestPayment}
            totalInterest={totalInterest}
            mortgageType={mortgageType}
          ></CalculatedResult>
        )}
      </div>
    </div>
  );
}

export default App;
