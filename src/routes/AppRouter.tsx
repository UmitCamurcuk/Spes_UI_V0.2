// src/routes/AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../themes/theme";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import LoginPage from "../pages/Auth/LoginPage";
import { GlobalStyles } from "../assets/styles/GlobalStyles";

const AppRouter: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
