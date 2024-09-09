import React from "react";
import Header from "./components/Header/Header";
import ListContainer from "./components/ListContainer/ListContainer";
import { ThemeProvider } from "stelios";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import colors from "./tokens/colors.json";
import ComponentContainer from "./components/ComponentContainer/ComponentContainer";

function App() {
  return (
    <ThemeProvider
      accents={{
        primary: colors.accent.primary,
        secondary: colors.accent.secondary,
        danger: colors.accent.danger,
        warning: colors.accent.warning,
        success: colors.accent.success,
        info: colors.accent.info,
      }}
      appearance={colors.appearance as "light" | "dark"}
    >
      <div style={{display:"flex", flexDirection:"column"}}>
        <Header />
        <ListContainer>
          <NavigationBar />
          <ComponentContainer />
        </ListContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
