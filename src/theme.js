import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F77D00", // INGCO's bright orange
    },
    secondary: {
      main: "#333333", // Dark gray/black for text and background
    },
    background: {
      default: "#F4F4F4", // Light gray background
    },
    text: {
      primary: "#333333", // Main text color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Example font; adjust as needed
  },
});

export default theme;