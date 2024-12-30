import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/jsx/Navbar";
import Home from "./components/jsx/Home";
import Shop from "./components/jsx/Shop";
import Print from "./components/jsx/Print";
import Login from "./components/jsx/Login";
import SignUp from "./components/jsx/SignUp";
import Dropdown from "./components/jsx/Dropdown";
import SelectIngredient from "./components/jsx/SelectIngredient"

function App() {
  let component;

  switch (window.location.pathname) {
    case "/Home":
      component = <SelectIngredient />;
      break;
    case "/":
      component = <Home />;
      break;
    case "/Shop":
      component = <Shop />;
      break;
    case "/Print":
      component = <Print />;
      break;
    case "/Login":
      component = <Login />;
      break;
    case "/SignUp":
      component = <SignUp />;
      break;
    case "/Dropdown":
      component = <Dropdown />;
      break;
  }

  console.log(window.location);

  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
