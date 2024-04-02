import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

function AppRoutes() {
  return (
    <main className="pagesWrapper">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        <Routes>
          <Route path="/labyrinthe/:id" element={<App />} />
        </Routes>
      </Router>
    </main>
  );
}

export default AppRoutes;
