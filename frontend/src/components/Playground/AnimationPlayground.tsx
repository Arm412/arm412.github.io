import React, { useState } from "react"
import WeatherAnimation from "../WeatherAnimation/WeatherAnimation"
import { PrecipitationType, WeatherType } from "../../customHooks/useWeather";

interface AnimationPlaygroundProps {
  weatherType: WeatherType;
  precipitationType: PrecipitationType;
  showClouds: boolean;
  isNight: boolean;
  closePlayground: () => void;
}

function AnimationPlayground({
  weatherType,
  precipitationType,
  showClouds,
  isNight,
  closePlayground
}: AnimationPlaygroundProps) {
  const [currentWeatherType, setCurrentWeatherType] = useState<WeatherType>(weatherType as WeatherType);
  const [showCloudsState, setShowClouds] = useState(showClouds);
  const [currentPrecipitation, setCurrentPrecipitation] = useState<PrecipitationType>(precipitationType as PrecipitationType);
  const [isNightState, setIsNight] = useState(isNight);

  return (
    <div>
      <WeatherAnimation weatherType={currentWeatherType} showClouds={showCloudsState} precipitationType={currentPrecipitation} isNight={isNight} />
      <button onClick={closePlayground} className="absolute top-4 right-4 z-50 bg-red-500 text-white px-4 py-2 rounded">Close</button>
    </div>
  )
}

export default AnimationPlayground