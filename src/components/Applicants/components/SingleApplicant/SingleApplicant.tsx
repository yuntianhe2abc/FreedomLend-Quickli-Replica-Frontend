import React from "react";
import TextFieldGroup from "@/layout/TextFieldGroup";
import { ApplicantInterface } from "@/utils/interfaces/formInterfaces";
import { Box, IconButton, Typography } from "@mui/material";
import FieldInterface from "@/utils/interfaces/FieldInterface";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { deleteApplicant, getApplicantsNumber } from "@/store/slices/formSlice";
import { singleInstanceStyles as styles } from "@/styles/singleInstanceStyle";

const incomeFields: FieldInterface[] = [
  {
    id: "annualBaseIncome",
    label: "Base Income",
    variant: "outlined",
    type: "money",
  },
  {
    id: "annualNonBaseIncome",
    label: "Non-base Income",
    variant: "outlined",
    type: "money",
  },
  {
    id: "annualBonusIncome",
    label: "Bonus",
    variant: "outlined",
    type: "money",
  },
];
const expenseFields: FieldInterface[] = [
  {
    id: "monthlyLivingExpenses",
    label: "Basic Expense",
    type: "money",
  },
  {
    id: "monthlyOtherExpenses",
    label: "Other expenses",
    type: "money",
  },
  {
    id: "childSupport",
    label: "Child support",
    type: "money",
  },
  {
    id: "monthlyRent",
    label: "Rent",
    type: "money",
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
  const numberOfApplicants = useSelector(getApplicantsNumber);
  const handleDelete = () => {
    dispatch(deleteApplicant({ applicantId: applicant.id }));
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h6">Applicant {index + 1}</Typography>
        {numberOfApplicants > 1 && (
          <IconButton sx={{ height: "32px" }} onClick={handleDelete}>
            <ClearIcon />
          </IconButton>
        )}
      </Box>
      <Box sx={styles.textFieldGroups}>
        <TextFieldGroup fields={incomeFields} />
        <TextFieldGroup fields={expenseFields} />
      </Box>
    </Box>
  );
};

export default SingleApplicant;
