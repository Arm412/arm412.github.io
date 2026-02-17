import { WeatherType, isNight } from "../../customHooks/useWeather";

type WeatherAnimationProps = {
  weatherType: WeatherType;
};

function WeatherAnimation({ weatherType }: WeatherAnimationProps) {
  let cloudyAnimation: string | null = "Clouds.gif";
  let currentCityAnimation = isNight ? "nightSkyTransparent.gif" : "daySkyTransparent.gif";
  let precipOverlay: string | null = null;

  switch (weatherType) {
    case "sunny": // No overlay needed for sunny weather
      console.log("WeatherAnimation: sunny");
      cloudyAnimation = null;
      precipOverlay = null;
      break;

    case "cloudy": // Use the cloudy animation for cloudy weather
      console.log("WeatherAnimation: cloudy");
      cloudyAnimation = "Clouds.gif";
      precipOverlay = null;
      break;

    case "rain": // Use the cloudy animation with a rain overlay for rainy weather
      console.log("WeatherAnimation: rain");
      currentCityAnimation = "PittsburghCloudyAnimation.gif";
      cloudyAnimation = "Clouds.gif";
      precipOverlay = "RainOverlay.gif";
      break;

    case "snow": // Use the cloudy animation with a snow overlay for snowy weather
      console.log("WeatherAnimation: snow");
      currentCityAnimation = "PittsburghCloudyAnimation.gif";
      cloudyAnimation = "Clouds.gif";
      precipOverlay = "SnowOverlay.gif";
      break;

    case "storm": // Use the cloudy animation with a storm overlay for stormy weather
      console.log("WeatherAnimation: storm");
      currentCityAnimation = "PittsburghStormAnimation.gif";
      cloudyAnimation = "Clouds.gif";
      precipOverlay = "RainOverlay.gif";
      break;
  }

  return (
    <>
      {/* Clouds behind city */}
      {cloudyAnimation && (
        <img
          src={cloudyAnimation}
          alt="Clouds Overlay"
          className="absolute inset-0 w-full h-full object-cover object-top brightness-75 z-0 opacity-80"
        />
      )}

      {/* City in front */}
      <img
        src={currentCityAnimation}
        alt="City Animation"
        className="absolute inset-0 w-full h-full object-cover object-top brightness-75 z-10 opacity-100"
      />

      {/* Precipitation on top */}
      {precipOverlay && (
        <img
          src={precipOverlay}
          alt="Precipitation Overlay"
          className="absolute inset-0 w-full h-full object-cover object-top brightness-75 z-20 opacity-80"
        />
      )}

    </>
  )
}

export default WeatherAnimation