import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/List";
import CharacterCard from "./components/CharacterCard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/character/:id" element={<CharacterCard />} />
      </Routes>
    </Router>
  );
};

export default App;
