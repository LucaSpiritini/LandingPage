import React from "react";
import Home from "./screens/Home.jsx";
import ContactoScreen from "./screens/ContactoScreen.jsx";
import TurnosScreen from "./screens/TurnosScreen.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contacto"} element={<ContactoScreen />} />
        <Route path={"/turnos"} element={<TurnosScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
