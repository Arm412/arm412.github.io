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
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center" onClick={closePlayground}>
      <div className="w-[90vw] max-w-5xl flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>

        <div className={"relative aspect-[16/10] overflow-hidden rounded-xl " + (isNightState ? "bg-gray-900" : "bg-blue-300")}>
          <WeatherAnimation
            showClouds={showCloudsState}
            precipitationType={currentPrecipitation}
            isNight={isNightState}
            isPlayground={true}
          />

          <button
            onClick={closePlayground}
            className="absolute top-4 right-4 z-50 bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
        <div className="bg-gray-900 p-4 rounded-xl flex flex-row gap-4">
          <div className="w-1/3">
            <h3 className="text-white font-semibold mb-2">Clouds</h3>
            <button
              onClick={() => setShowClouds(!showCloudsState)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {showCloudsState ? "Hide Clouds" : "Show Clouds"}
            </button>
          </div>
          <div className="w-1/3">
            <h3 className="text-white font-semibold mb-2">Precipitation</h3>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setCurrentPrecipitation("none")}
                className={"bg-gray-700 text-white px-3 py-1 rounded " + (currentPrecipitation === "none" ? "ring-2 ring-white" : "")}
              >
                None
              </button>
              <button
                onClick={() => setCurrentPrecipitation("rain")}
                className={"bg-gray-700 text-white px-3 py-1 rounded " + (currentPrecipitation === "rain" ? "ring-2 ring-white" : "")}
              >
                Rain
              </button>
              <button
                onClick={() => setCurrentPrecipitation("snow")}
                className={"bg-gray-700 text-white px-3 py-1 rounded " + (currentPrecipitation === "snow" ? "ring-2 ring-white" : "")}
              >
                Snow
              </button>
            </div>
          </div>
          <div className="w-1/3">
            <h3 className="text-white font-semibold mb-2">Time</h3>
            <button
              onClick={() => setIsNight(!isNightState)}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              {isNightState ? "Switch to Day" : "Switch to Night"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimationPlayground