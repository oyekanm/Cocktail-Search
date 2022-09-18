import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import SharedLayout from "./Pages/SharedLayout";
import SingleCocktail from "./Pages/SingleCocktail";
import "./assets/css/index.css";
import "./assets/css/media.css";
import Error from "./Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<SingleCocktail />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
