import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "800px",
  backgroundColor: "#F6F6F6",
  borderRadius: "1rem",
  boxShadow:
    "0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)",
  padding: "2rem",
  maxHeight: "80vh",
  overflow: "auto",
  [theme.breakpoints.down("md")]: {
    padding: "1rem",
  },
}));

export const ButtonContainer = styled("div")(({ theme }) => ({
  maxwidth: "25%",
  marginTop: "2rem",
  marginBottom: "1rem",
  marginLeft: "2rem",
  [theme.breakpoints.down("md")]: {
    marginTop: "0.5rem",
    marginLeft: "0.5rem",
  },
}));
