import React from "react";
import SingleApplicant from "@/components/Applicants/components/SingleApplicant";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store.js";
import { SxPropsStyles } from "@/theme/globalStyle.js";

const styles: SxPropsStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    margin: "8px",
    padding: "8px",
  },
  labelsContainer: {
    display: "flex",
    flexDirection: "column",
    minWidth: "175px",

    "&>*:nth-child(5)": {
      marginTop: "24px",
    },
    "&>*:nth-child(1)": {
      marginTop: "32px",
    },
  },
  labels: {
    height: "32px",
  },
  applicantsContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "16px",
    gap: "16px",
  },
};

const labels = [
  "",
  "Annual Base Income",
  "Annual Non-base Income",
  "Annual Bonus",
  "Monthly Basic Expense",
  "Monthly Other Expense",
  "Child Support/alimony",
  "Monthly Rent",
];

const ApplicantList = () => {
  const applicants = useSelector((state: RootState) => {
    // console.log(state.formReducer.applicants);
    return state.formReducer.applicants;
  });
  // console.log(applicants);
  return (
    <Box sx={styles.container}>
      <Box sx={styles.labelsContainer}>
        {labels.map((label, i) => (
          <Box key={i} sx={styles.labels}>
            <Typography variant="body2">{label}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={styles.applicantsContainer}>
        {applicants.map((applicant, i) => (
          <SingleApplicant index={i} key={applicant.id} applicant={applicant} />
        ))}
      </Box>
    </Box>
  );
};
export default ApplicantList;
