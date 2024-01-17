import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage/index.js";
import Login from "../pages/login/index.js";
import Register from "../pages/register/index.js";
import Detail from "../pages/hotel-details/index.js";

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotel-details" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default Index;
