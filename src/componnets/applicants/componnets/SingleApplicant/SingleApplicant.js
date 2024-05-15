import React from "react";
import Income from "./components/Income/Income";
import Expense from "./components/Expense/Expense";
const SingleApplicant = () => {
  return (
    <div>
      <p>Applicant</p>
      <Income />
      <Expense />
    </div>
  );
};

export default SingleApplicant;
