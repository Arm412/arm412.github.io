import { WeatherType, isNight } from "../../customHooks/useWeather";

type WeatherAnimationProps = {
  weatherType: WeatherType;
};

function WeatherAnimation({ weatherType }: WeatherAnimationProps) {
  let cloudyAnimation: string | null = "Clouds.webm";
  let currentCityAnimation = isNight ? "NightSkyTransparent.webm" : "DaySkyTransparent.webm";
  let precipOverlay: string | null = "SnowOverlay.webm";

  switch (weatherType) {
    case "sunny": // No overlay needed for sunny weather
      console.log("WeatherAnimation: sunny");
      cloudyAnimation = null;
      precipOverlay = null;
      break;

    case "cloudy": // Use the cloudy animation for cloudy weather
      console.log("WeatherAnimation: cloudy");
      cloudyAnimation = "Clouds.webm";
      precipOverlay = null;
      break;

    case "rain": // Use the cloudy animation with a rain overlay for rainy weather
      console.log("WeatherAnimation: rain");
      cloudyAnimation = "Clouds.webm";
      precipOverlay = "RainOverlay.webm";
      break;

    case "snow": // Use the cloudy animation with a snow overlay for snowy weather
      console.log("WeatherAnimation: snow");
      cloudyAnimation = "Clouds.webm";
      precipOverlay = "SnowOverlay.webm";
      break;

    case "storm": // Use the cloudy animation with a storm overlay for stormy weather
      console.log("WeatherAnimation: storm");
      cloudyAnimation = "Clouds.webm";
      precipOverlay = "RainOverlay.webm";
      break;
  }

  return (
    <>
      <div className={`w-full h-full absolute inset-0 z-5 ${isNight ? "bg-slate-900" : "bg-sky-300"}`}></div>

      {/* Clouds behind city */}
      {cloudyAnimation && (
        <video
          src={cloudyAnimation}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* City in front */}
      <video
        src={currentCityAnimation}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Precipitation on top */}
      {precipOverlay && (
        <video
          src={precipOverlay}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

    </>
  )
}

export default WeatherAnimation