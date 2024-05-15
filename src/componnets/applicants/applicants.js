import React from "react";
import TextField from "@mui/material/TextField";
import SingleApplicant from "./componnets/SingleApplicant/SingleApplicant";
const styles = (theme) => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "20px",
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "white",
  },
});
const Applicants = () => {
  return (
    <div>
      <TextField
        id="filled-number"
        label="Number of Applicant"
        className={styles.textField}
        inputProps={{ type: "number", min: 1, max: 4 }}
        variant="outlined"
        sx={{ m: "32px", minWidth: "300px" }}
      />
      <SingleApplicant />
    </div>
  );
};

export default Applicants;
