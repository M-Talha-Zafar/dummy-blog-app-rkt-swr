import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF9000",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    subtitle2: {
      color: "grey",
    },
  },
});

export default theme;
