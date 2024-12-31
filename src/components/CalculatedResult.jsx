import PropTypes from "prop-types";
const CalculatedResult = ({
  monthlyRepayment,
  totalRepay,
  monthlyInterestPayment,
  totalInterest,
  mortgageType,
}) => {
  return (
    <div className="bg-[#133041] p-10 lg:rounded-r-2xl lg:rounded-bl-[80px]">
      <h1 className="text-2xl text-white font-bold mb-4">Your Results</h1>
      <p className="text-[#9ABED5] font-medium mb-10">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>

      <div className="bg-slate-900 p-8 border-t-4 border-t-[#D8DB2F] rounded-lg">
        <p className="text-[#9ABED5] font-medium mb-4">
          Your monthly repayments
        </p>
        <h1 className="text-[#D8DB2F] text-6xl font-bold">
          &pound;
          {mortgageType === "Repayment"
            ? monthlyRepayment
            : monthlyInterestPayment}
        </h1>
        <hr className="my-8" />
        <p className="text-[#9ABED5] font-medium mb-2">
          Total you&apos;ll repay over the term
        </p>
        <h3 className="text-[#FFF] text-2xl font-bold">
          &pound;{mortgageType === "Repayment" ? totalRepay : totalInterest}
        </h3>
      </div>
    </div>
  );
};

CalculatedResult.propTypes = {
  monthlyRepayment: PropTypes.number,
  totalRepay: PropTypes.number,
  monthlyInterestPayment: PropTypes.number,
  totalInterest: PropTypes.number,
  mortgageType: PropTypes.string,
};

export default CalculatedResult;
