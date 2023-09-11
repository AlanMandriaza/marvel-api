import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/List";
import CharacterCard from "./components/CharacterCard";
import MyNavbar from "./components/Navbar";

const App = () => {
  return (
    <Router basename="/marvel-api">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/character/:id" element={<CharacterCard />} />
      </Routes>
    </Router>
  );
};

export default App;
 