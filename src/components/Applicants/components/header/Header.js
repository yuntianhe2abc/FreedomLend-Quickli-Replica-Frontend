import React from "react";
import { Button } from "@mui/material";

const Header = ({ handleOpen }) => {
  return (
    <>
      <Button variant="contained" size="medium" onClick={handleOpen}>
        Applicants
      </Button>
      {/* <Typography variant="h4">Applicants</Typography> */}
    </>
  );
};

export default Header;
