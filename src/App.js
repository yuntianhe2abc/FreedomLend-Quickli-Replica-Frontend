import "./App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Homepage from "./components/Homepage";
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
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
