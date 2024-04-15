import React from "react";

const LoanTag = ({ type, amount, icon, bgColor }) => {
  const iconStyle = {
    backgroundColor: bgColor,
  };
  return (
    <div className="loan-tag">
      <div
        className="icon"
        style={iconStyle}
        dangerouslySetInnerHTML={{ __html: icon }}
      ></div>
      <div className="content-wrap">
        <p className="type">{`${type} Loans`}</p>
        <p className="amount">{amount}</p>
      </div>
    </div>
  );
};

export default LoanTag;
