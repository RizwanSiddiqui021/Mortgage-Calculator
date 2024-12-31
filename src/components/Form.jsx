import calculatorLogo from "../assets/calculator.png";
import PropTypes from "prop-types";
const Form = ({
  handleClearAll,
  handleCalculateRepayments,
  mortgageAmount,
  mortgageAmountChange,
  mortgageTerm,
  mortgageTermChange,
  interestRate,
  interestRateChange,
  mortgageType,
  mortgageTypeChange,
  mortgageAmountState,
  mortgageTermState,
  interestRateState,
  mortgageTypeState,
}) => {
  return (
    <div className="bg-white p-10 rounded-l-2xl">
      {/* Title */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl text-[#133041] font-bold">
          Mortgage Calculator
        </h1>
        {/* CLear All Button */}
        <button
          className="text-[#4E6E7E] font-medium underline"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>

      {/* Mortgage Amount Section Start */}
      <div className="mb-6">
        <label htmlFor="" className="font-medium text-[#4E6E7E]">
          Mortgage Amount
        </label>
        <div className="flex border rounded-md mt-3 ">
          <p className="text-[#4E6E7E] font-bold px-3 py-2 bg-[#E4F4FD] rounded-l-md">
            &pound;
          </p>
          <input
            className="pl-2 rounded-r-md w-full  focus:ring focus:ring-blue-200 focus:outline-none"
            type="number"
            onChange={mortgageAmountChange}
            value={mortgageAmount}
          />
        </div>
        <p
          className={`text-[#D73328] mt-3 ${
            mortgageAmountState ? "" : "hidden"
          }`}
        >
          This field is required!
        </p>
      </div>
      {/* Mortgage Amount Section End */}

      <div className="flex flex-col gap-4 md:flex-row lg:flex-row lg:justify-between lg:gap-0 mb-6">
        {/* Mortgage Term Section Start */}
        <div>
          <label htmlFor="" className="font-medium text-[#4E6E7E]">
            Mortgage Term
          </label>
          <div className="w-full flex border rounded-md mt-3">
            <input
              className="w-full pl-2 rounded-l-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="number"
              onChange={mortgageTermChange}
              value={mortgageTerm}
            />
            <p className="text-[#4E6E7E] font-bold px-3 py-2 bg-[#E4F4FD] rounded-r-md">
              Years
            </p>
          </div>
          <p
            className={`text-[#D73328] mt-3 ${
              mortgageTermState ? "" : "hidden"
            }`}
          >
            This field is required!
          </p>
        </div>
        {/* Mortgage Term Section End */}

        {/* Interest Rate Section Start */}
        <div>
          <label htmlFor="" className="font-medium text-[#4E6E7E]">
            Interest Rate
          </label>
          <div className="w-full flex border rounded-md mt-3">
            <input
              className="w-full pl-2 rounded-l-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="number"
              onChange={interestRateChange}
              value={interestRate}
            />
            <p className="text-[#4E6E7E] font-bold px-3 py-2 bg-[#E4F4FD] rounded-r-md">
              %
            </p>
          </div>
          <p
            className={`text-[#D73328] mt-3 ${
              interestRateState ? "" : "hidden"
            }`}
          >
            This field is required!
          </p>
        </div>
        {/* Interest Rate Section End */}
      </div>

      {/* Mortgage Type Section Start */}
      <div className="mb-10">
        <h1 className="font-medium text-[#4E6E7E]">Mortgage Type</h1>

        <div className="border rounded-md hover:border-blue-200 p-2 mt-3 ">
          <input
            name="mortgageType"
            type="radio"
            value="Repayment"
            checked={mortgageType === "Repayment"}
            onChange={mortgageTypeChange}
          />
          <label htmlFor="" className="text-[#133041] font-bold pl-2">
            Repayment
          </label>
        </div>
        <div className="border rounded-md hover:border-blue-200 p-2 mt-3">
          <input
            className=""
            name="mortgageType"
            type="radio"
            value="Interest Only"
            checked={mortgageType === "Interest Only"}
            onChange={mortgageTypeChange}
          />
          <label htmlFor="" className="text-[#133041] font-bold pl-2">
            Interest Only
          </label>
        </div>
        <p
          className={`text-[#D73328] mt-3 ${mortgageTypeState ? "" : "hidden"}`}
        >
          This field is required!
        </p>
      </div>
      {/* Mortgage Type Section End */}

      {/* Calculate Repayments Section Start */}
      <button
        className="flex items-center gap-2 bg-[#D8DB2F] px-6 py-4 rounded-[32px] text-lg text-[#133041] font-bold hover:bg-[#dee066e0]"
        onClick={handleCalculateRepayments}
      >
        <img src={calculatorLogo} alt="" />
        Calculate Repayments
      </button>
      {/* Calculate Repayments Section Start */}
    </div>
  );
};

Form.propTypes = {
  handleClearAll: PropTypes.func,
  handleCalculateRepayments: PropTypes.func,
  mortgageAmountChange: PropTypes.func,
  mortgageTermChange: PropTypes.func,
  interestRateChange: PropTypes.func,
  mortgageAmount: PropTypes.string,
  mortgageTerm: PropTypes.string,
  interestRate: PropTypes.string,
  mortgageTypeChange: PropTypes.func,
  mortgageType: PropTypes.string,
  mortgageAmountState: PropTypes.bool,
  mortgageTermState: PropTypes.bool,
  interestRateState: PropTypes.bool,
  mortgageTypeState: PropTypes.bool,
};

export default Form;
