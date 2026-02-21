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
  precipitationType,
  showClouds,
  isNight,
  closePlayground
}: AnimationPlaygroundProps) {
  const [showCloudsState, setShowClouds] = useState(showClouds);
  const [currentPrecipitation, setCurrentPrecipitation] = useState<PrecipitationType>(precipitationType as PrecipitationType);
  const [isNightState, setIsNight] = useState(isNight);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="relative w-[90vw] max-w-5xl aspect-[16/10] bg-black overflow-hidden">
        <WeatherAnimation showClouds={showCloudsState} precipitationType={currentPrecipitation} isNight={isNightState} isPlayground={true} />

        <button
          onClick={closePlayground}
          className="absolute top-4 right-4 z-50 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default AnimationPlayground