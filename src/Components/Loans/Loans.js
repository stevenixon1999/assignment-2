import React from "react";
import LoanTag from "../LoanTag/LoanTag.js";
import LoanTableRow from "../LoanTableRow/LoanTableRow.js";
import { Personal, Corporate, Business, Custom } from "../../assets/Icon";

const loanData = [
  {
    srNo: "01.",
    loanMoney: "$100,000",
    leftToPay: "$40,500",
    duration: "8 months",
    interestRate: "12%",
    installment: "$2,000/month",
  },
  {
    srNo: "02.",
    loanMoney: "$500,000",
    leftToPay: "$250,000",
    duration: "36 months",
    interestRate: "10%",
    installment: "$8,000/month",
  },
  {
    srNo: "03.",
    loanMoney: "$900,000",
    leftToPay: "$40,500",
    duration: "12 months",
    interestRate: "12%",
    installment: "$5,000/month",
  },
  {
    srNo: "04.",
    loanMoney: "$50,000",
    leftToPay: "$40,500",
    duration: "25 months",
    interestRate: "5%",
    installment: "$2,000/month",
  },
  {
    srNo: "05.",
    loanMoney: "$50,000",
    leftToPay: "$40,500",
    duration: "25 months",
    interestRate: "5%",
    installment: "$2,000/month",
  },
  {
    srNo: "06.",
    loanMoney: "$80,000",
    leftToPay: "$25,500",
    duration: "14 months",
    interestRate: "8%",
    installment: "$2,000/month",
  },
  {
    srNo: "07.",
    loanMoney: "$12,000",
    leftToPay: "$5,500",
    duration: "9 months",
    interestRate: "13%",
    installment: "$500/month",
  },
  {
    srNo: "08.",
    loanMoney: "$160,000",
    leftToPay: "$100,800",
    duration: "3 months",
    interestRate: "12%",
    installment: "$900/month",
  },
];

const Loans = () => {
  const totalLoanMoney = loanData.reduce(
    (acc, loan) =>
      acc + parseFloat(loan.loanMoney.replace("$", "").replace(",", "")),
    0
  );
  const totalLeftToPay = loanData.reduce(
    (acc, loan) =>
      acc + parseFloat(loan.leftToPay.replace("$", "").replace(",", "")),
    0
  );
  const totalInstallment = loanData.reduce((acc, loan) => {
    const installment = parseFloat(
      loan.installment.replace("$", "").replace(",", "").replace("/month", "")
    );
    return acc + installment;
  }, 0);
  return (
    <div className="loans">
      <div className="top-wrap">
        <LoanTag
          type="Personal"
          amount="$50,000"
          icon={Personal()}
          bgColor="#E7EDFF"
        />
        <LoanTag
          type="Corporate"
          amount="$100,000"
          icon={Corporate()}
          bgColor="#FFF5D9"
        />
        <LoanTag
          type="Business"
          amount="$500,000"
          icon={Business()}
          bgColor="#FFE0EB"
        />
        <LoanTag
          type="Custom"
          amount="Choose money"
          icon={Custom()}
          bgColor="#DCFAF8"
        />
      </div>
      <h1 className="heading">Active Loans Overview</h1>
      <div className="loan-table">
        <div className="loan-table-row heading-row">
          <div className="cell">SL No</div>
          <div className="cell">Loan Money</div>
          <div className="cell">Left To Pay</div>
          <div className="cell">Duration</div>
          <div className="cell">Interest Rate</div>
          <div className="cell">Installment</div>
          <div className="cell">Repay</div>
        </div>
        {loanData.map((loan, index) => (
          <LoanTableRow
            key={index}
            srNo={loan.srNo}
            loanMoney={loan.loanMoney}
            leftToPay={loan.leftToPay}
            duration={loan.duration}
            interestRate={loan.interestRate}
            installment={loan.installment}
            isTotal={false}
          />
        ))}
        <LoanTableRow
          srNo="Total"
          loanMoney={`$${totalLoanMoney}`}
          leftToPay={`$${totalLeftToPay}`}
          duration=""
          interestRate=""
          installment={`$${totalInstallment.toFixed(2)}/month`}
          isTotal={true}
        />
      </div>
    </div>
  );
};

export default Loans;
