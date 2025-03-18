import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterComplaint from "./pages/RegisterComplaint";
import TrackComplaint from "./pages/TrackComplaint";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-complaint" element={<RegisterComplaint />} />
          <Route path="/track-complaint" element={<TrackComplaint />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
