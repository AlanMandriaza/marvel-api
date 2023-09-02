import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/List";
import CharacterCard from "./components/CharacterCard";
import Navi from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navi />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/character/:id" element={<CharacterCard />} />
      </Routes>
    </Router>
  );
};

export default App;
