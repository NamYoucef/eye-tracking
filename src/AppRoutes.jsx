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
          <Route path="/labyrinthe_1" element={<App />} />
        </Routes>
        <Routes>
          <Route path="/labyrinthe_2" element={<App />} />
        </Routes>
        <Routes>
          <Route path="/labyrinthe_3" element={<App />} />
        </Routes>
        <Routes>
          <Route path="/labyrinthe_4" element={<App />} />
        </Routes>
        <Routes>
          <Route path="/labyrinthe_5" element={<App />} />
        </Routes>
        <Routes>
          <Route path="/labyrinthe_6" element={<App />} />
        </Routes>
      </Router>
    </main>
  );
}

export default AppRoutes;
