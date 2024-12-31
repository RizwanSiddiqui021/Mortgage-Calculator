import calculateImage from "../assets/calculate.png";

const UnCalculatedResult = () => {
  return (
    <div className="bg-[#133041] p-10 flex flex-col justify-center items-center text-center lg:rounded-r-2xl lg:rounded-bl-[80px]">
      <img src={calculateImage} alt="" />
      <h1 className="text-2xl text-white font-bold mb-4">Results shown here</h1>
      <p className="text-[#9ABED5] font-medium">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
};

export default UnCalculatedResult;
