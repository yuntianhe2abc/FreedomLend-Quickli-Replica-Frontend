import React from "react";
import Income from "./components/Income/Income";
import Expense from "./components/Expense/Expense";
const SingleApplicant = ({ index }) => {
  return (
    <div>
      <p>Applicant {index + 1}</p>
      <Income />
      <Expense />
    </div>
  );
};

export default SingleApplicant;
