import Applicants from "./components/Applicants/Applicants";
import "./App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
  typography: {
    body2: {
      fontWeight: "400",
      fontSize: "0.875rem",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Applicants />
    </ThemeProvider>
  );
}

export default App;
