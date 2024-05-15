import React from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

const StyledExpense = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 16px;
  padding: 16px 16px;
`;
const Expense = () => {
  return (
    <div>
      <StyledExpense>
        <TextField
          id="monthlyLivingExpenses"
          label="Monthly living expenses"
          inputProps={{ type: "number", min: 0 }}
          variant="outlined"
        />
        <TextField
          id="monthlyOtherExpenses"
          label="Monthly other expenses"
          inputProps={{ type: "number", min: 0 }}
          variant="outlined"
        />
        <TextField
          id="childSupport"
          label="Child support/alimony"
          inputProps={{ type: "number", min: 0 }}
          variant="outlined"
        />
        <TextField
          id="monthlyRent"
          label="Monthly rent"
          inputProps={{ type: "number", min: 0 }}
          variant="outlined"
        />
      </StyledExpense>
    </div>
  );
};

export default Expense;
