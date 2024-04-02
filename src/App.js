import React, { useState } from "react";
import DrawingCanvas from "./DrawingCanvas";
import Instructions from "./Instructions";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(false);
  return (
    <div className="App">
      <h1>Test de labyrinthe</h1>
      {display ? <DrawingCanvas /> : <Instructions setDisplay={setDisplay} />}
    </div>
  );
}

export default App;
