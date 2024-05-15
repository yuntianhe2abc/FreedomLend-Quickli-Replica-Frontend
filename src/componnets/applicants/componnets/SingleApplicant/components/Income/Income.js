import React from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

const StyledIncome = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 16px;
`;
const incomeFields = [
  {
    id: "annualBaseIncome",
    label: "Annual base income",
    variant: "outlined",
    type: "number",
  },
  {
    id: "annualNonBaseIncome",
    label: "Annual non-base income",
    variant: "outlined",
    type: "number",
  },
  {
    id: "annualBonusIncome",
    label: "Annual bonus income",
    variant: "outlined",
    type: "number",
  },
];
const Income = () => {
  return (
    <StyledIncome>
      <TextField
        id="annualBaseIncome"
        label="Annual base income"
        inputProps={{ type: "number", min: 0 }}
        variant="outlined"
      />
      <TextField
        id="annualNonBaseIncome"
        label="Annual non-base income"
        inputProps={{ type: "number", min: 0 }}
        variant="outlined"
      />
      <TextField
        id="annualBonusIncome"
        label="Annual bonus income"
        inputProps={{ type: "number", min: 0 }}
        variant="outlined"
      />
    </StyledIncome>
  );
};

export default Income;
