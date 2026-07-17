import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../src/data/theme";
import SeanPearcePortfolio from "../src/pages/SeanPearcePortfolio";

export default function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SeanPearcePortfolio />
    </ThemeProvider>
  );
}