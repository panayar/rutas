import React from "react";
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from "./pages/Home.js";

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router> 
  );
}