import React from "react";
import Header from "./components/Header/Header";
import { ThemeProvider } from "stelios";
import colors from "./tokens/colors.json";


function App() {
  return (
    <ThemeProvider
      accents={{ primary: colors.accent.primary, secondary: colors.accent.secondary, danger: colors.accent.danger, warning: colors.accent.warning, success: colors.accent.success, info: colors.accent.info }}
      appearance={colors.appearance as "light" | "dark"}
    >
      <Header/>
    </ThemeProvider>
  );
}

export default App;
