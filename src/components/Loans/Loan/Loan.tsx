import React from "react";
import { LoanInterface } from "@/utils/interfaces/formInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { deleteLoan, getLoansNumber } from "@/store/slices/formSlice";
import { Box, IconButton, Typography } from "@mui/material";
import FieldInterface from "@/utils/interfaces/FieldInterface";
import ClearIcon from "@mui/icons-material/Clear";
import { singleInstanceStyles as styles } from "@/styles/singleInstanceStyle";
import TextFieldGroup from "@/layout/TextFieldGroup";

const Loan = ({ loan, index }: { loan: LoanInterface; index: number }) => {
  const dispatch = useDispatch();
  const numberOfLoans = useSelector(getLoansNumber);
  const handleDelete = () => {
    dispatch(deleteLoan({ loanId: loan.id }));
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h6">Loan {index + 1}</Typography>
        {numberOfLoans > 1 && (
          <IconButton sx={{ height: "32px" }} onClick={handleDelete}>
            <ClearIcon />
          </IconButton>
        )}
      </Box>
      <TextFieldGroup fields={loansFields} />
    </Box>
  );
};
const loansFields: FieldInterface[] = [
  {
    id: "loanAmount",
    label: "Amount",
    type: "amount",
  },
  {
    id: "lendingInterestRate",
    label: "Interest rate",
    type: "rate",
  },
  {
    id: "commitmentTerm",
    label: "Term",
    type: "quantity",
  },
  {
    id: "interestOnlyTerm",
    label: "Interest only term",
    type: "quantity",
  },
];
export default Loan;
