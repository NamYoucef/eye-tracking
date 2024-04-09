import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Finish from "./Finish";

function AppRoutes() {
  return (
    <main className="pagesWrapper">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        <Routes>
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </Router>
    </main>
  );
}

export default AppRoutes;
