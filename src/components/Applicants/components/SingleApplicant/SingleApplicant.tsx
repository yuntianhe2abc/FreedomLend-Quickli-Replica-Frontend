import React from "react";
import TextFieldGroup from "@/layout/TextFieldGroup";
import { SxPropsStyles } from "@/theme/globalStyle.js";
import { ApplicantInterface } from "@/store/slices/formSlice";
import { Box, IconButton, Typography } from "@mui/material";
import FieldInterface from "@/type/FieldInterface";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { deleteApplicant } from "@/store/slices/formSlice";

const styles: SxPropsStyles = {
  container: {
    minWidth: "170px",
    width: "170px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textFieldGroups: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
};

const incomeFields: FieldInterface[] = [
  {
    id: "annualBaseIncome",
    label: "Base Income",
    variant: "outlined",
    type: "number",
  },
  {
    id: "annualNonBaseIncome",
    label: "Non-base Income",
    variant: "outlined",
    type: "number",
  },
  {
    id: "annualBonusIncome",
    label: "Bonus",
    variant: "outlined",
    type: "number",
  },
];
const expenseFields: FieldInterface[] = [
  {
    id: "monthlyLivingExpenses",
    label: "Basic Expense",
    type: "number",
  },
  {
    id: "monthlyOtherExpenses",
    label: "Other expenses",
    type: "number",
  },
  {
    id: "childSupport",
    label: "Child support",
    type: "number",
  },
  {
    id: "monthlyRent",
    label: "Rent",
    type: "number",
  },
];
const SingleApplicant = ({
  applicant,
  index,
}: {
  applicant: ApplicantInterface;
  index: number;
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteApplicant({ applicantId: applicant.id }));
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h6">Applicant {index + 1}</Typography>
        <IconButton onClick={handleDelete}>
          <ClearIcon />
        </IconButton>
      </Box>
      <Box sx={styles.textFieldGroups}>
        <TextFieldGroup fields={incomeFields} />
        <TextFieldGroup fields={expenseFields} />
      </Box>
    </Box>
  );
};

export default SingleApplicant;
