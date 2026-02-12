import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import AboutMe from "./aboutme/AboutMe";

function App() {
  const [isDay, setIsDay] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
