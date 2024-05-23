import React, { useState } from "react";
import ApplicantList from "./components/ApplicantList";
import { Box, Typography, Paper, Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { addApplicant } from "@/store/slices/formSlice";
import { RootState } from "@/store/store";
const styles = {
  container: {
    minWidth: "960px",
    maxWidth: "1280px",
    width: "auto",
    margin: "32px",
  },
  header: {
    bgcolor: "#eeeeee",
    padding: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "&:hover": {
      bgcolor: "#d9d9d9",
    },
    button: {
      bgcolor: "transparent",
    },
    arrowIcon: {
      justifyContent: "center",
    },
    applicantsBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
};
const Applicants = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();
  const numOfApplicants = useSelector(
    (state: RootState) => state.formReducer.applicants.length
  );

  const handleAddApplicants = () => {
    dispatch(addApplicant());
  };

  return (
    <Paper elevation={3} sx={styles.container}>
      <Box sx={styles.header}>
        <Stack alignItems="center" direction="row" gap={1} onClick={handleOpen}>
          <KeyboardArrowDownIcon />
          <Typography variant="h5">
            Applicants {!open && `(${numOfApplicants})`}
          </Typography>
        </Stack>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddApplicants}
          sx={{ border: "solid 1px" }}
        >
          ADD APPLICANT
        </Button>
      </Box>
      {open && <ApplicantList />}
    </Paper>
  );
};

export default Applicants;
