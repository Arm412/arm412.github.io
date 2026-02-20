import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import AboutMe from "./aboutme/AboutMe";
import { useWeather } from "./customHooks/useWeather";
import AnimationPlayground from "./components/Playground/AnimationPlayground";

function App() {
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);
  const { weather, loading, error } = useWeather();

  const weatherType = weather?.weatherType || "sunny";
  const precipitationType = weather?.precipitationType || "none";
  const showClouds = weather?.isCloudy || false;
  const isNight = weather?.isNight || false;
  const temp = weather?.temperature || null;

  return (
    <Router>
      {!isPlaygroundOpen && (
        <AboutMe
          weatherType={weatherType}
          precipitationType={precipitationType}
          showClouds={showClouds}
          isNight={isNight}
          temp={temp}
          openPlayground={() => setIsPlaygroundOpen(true)}
        />)}

      {isPlaygroundOpen && (
        <AnimationPlayground
          weatherType={weatherType}
          precipitationType={precipitationType}
          showClouds={showClouds}
          isNight={isNight}
          closePlayground={() => setIsPlaygroundOpen(false)}
        />
      )}
    </Router>
  );
}

export default App;
