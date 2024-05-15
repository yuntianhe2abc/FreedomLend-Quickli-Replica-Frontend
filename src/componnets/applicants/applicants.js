import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ApplicantList from "./componnets/ApplicantList";
const Applicants = () => {
  const [numOfApplicants, setNumOfApplicants] = useState(1);
  return (
    <div>
      <TextField
        id="filled-number"
        label="Number of Applicant"
        type="number"
        inputProps={{ min: 1, max: 4 }}
        variant="outlined"
        sx={{ m: "32px", minWidth: "300px" }}
        onChange={(e) => {
          console.log(e.target.value);
          setNumOfApplicants(e.target.value);
        }}
      />
      <ApplicantList numOfApplicants={numOfApplicants} />
    </div>
  );
};

export default Applicants;
