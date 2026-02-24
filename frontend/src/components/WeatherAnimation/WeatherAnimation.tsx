import { useState, useEffect } from "react";
import { PrecipitationType, WeatherType, useWeather } from "../../customHooks/useWeather";

interface WeatherAnimationProps {
  precipitationType: PrecipitationType;
  showClouds: boolean;
  isNight: boolean;
  isPlayground?: boolean;
}

function WeatherAnimation({ showClouds, precipitationType, isNight, isPlayground }: WeatherAnimationProps) {
  let cloudyAnimation: string | null = showClouds ? "Clouds.webm" : null;
  let currentCityAnimation = isNight ? "NightSkyTransparent.webm" : "DaySkyTransparent.webm";
  let precipOverlay: string | null = null;

  switch (precipitationType) {
    case "rain":
      precipOverlay = "RainOverlay.webm";
      break;
    case "snow":
      precipOverlay = "SnowOverlay.webm";
      break;
    case "none":
      precipOverlay = null;
      break;
  }

  return (
    <>
      {/* Clouds behind city */}
      {cloudyAnimation && (
        <video
          src={cloudyAnimation}
          autoPlay
          loop
          muted
          playsInline
          className={"absolute inset-0 w-full h-full pointer-events-none" + (isNight ? " opacity-20 " : "") + (isPlayground ? " object-contain" : " object-cover object-top")}
        />
      )}

      {/* City in front */}
      <video
        src={currentCityAnimation}
        autoPlay
        loop
        muted
        playsInline
        className={"absolute inset-0 w-full h-full pointer-events-none" + (isPlayground ? " object-contain" : " object-cover object-top")}
      />

      {/* Precipitation on top */}
      {precipOverlay && (
        <video
          src={precipOverlay}
          autoPlay
          loop
          muted
          playsInline
          className={"absolute inset-0 w-full h-full pointer-events-none" + (isPlayground ? " object-contain" : " object-cover object-top")}
        />
      )}
    </>
  )
}

export default WeatherAnimation