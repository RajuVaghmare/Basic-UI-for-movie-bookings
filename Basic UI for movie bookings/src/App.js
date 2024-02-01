import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
