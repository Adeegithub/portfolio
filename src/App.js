import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme"; // Import your theme file


import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import HireMe from "./components/HireMe";
import NavBar from "./components/NavBar";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <HireMe />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
