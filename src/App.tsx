import React from "react";
import Header from "./components/Header/Header";
import ListContainer from "./components/ListContainer/ListContainer";
import { ThemeProvider } from "stelios";
import colors from "./tokens/colors.json";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider
      accents={{
        primary: colors.accent.primary,
        component: colors.accent.component,
      }}
      appearance={colors.appearance as "light" | "dark"}
    >
      <div style={{display:"flex", flexDirection:"column"}}>
        <Header />
        <Routes>
          <Route path="components/:idComponent" element={<ListContainer/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
