import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Plans, Login, LetsTalk } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/let's-talk" element={<LetsTalk />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
