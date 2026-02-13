import { WeatherType } from "../../customHooks/useWeather";

type WeatherAnimationProps = {
  weatherType: WeatherType;
};

function WeatherAnimation({ weatherType }: WeatherAnimationProps) {
  let currentAnimation = "PittsburghDayAnimation.gif";
  let precipOverlay: string | null = null;

  switch (weatherType) {
    case "sunny":
      console.log("WeatherAnimation: sunny");
      currentAnimation = "PittsburghDayAnimation.gif";
      break;

    case "cloudy":
      console.log("WeatherAnimation: cloudy");
      currentAnimation = "PittsburghCloudyAnimation.gif";
      break;
    // 
    case "rain":
      console.log("WeatherAnimation: rain");
      currentAnimation = "PittsburghCloudyAnimation.gif";
      precipOverlay = "RainOverlay.gif";
      break;

    case "snow":
      console.log("WeatherAnimation: snow");
      currentAnimation = "PittsburghCloudyAnimation.gif";
      precipOverlay = "SnowOverlay.gif";
      break;

    case "storm":
      console.log("WeatherAnimation: storm");
      currentAnimation = "PittsburghStormAnimation.gif";
      precipOverlay = "RainOverlay.gif";
      break;
  }

  return (
    <>
      {precipOverlay && (
        <img
          src={precipOverlay}
          alt="Precipitation Overlay"
          className="absolute inset-0 w-full h-full object-cover object-top brightness-75 z-0 opacity-80"
        />
      )}

      <img
        src={currentAnimation}
        alt="City Animation"
        className="absolute inset-0 w-full h-full object-cover object-top brightness-75 z-0 opacity-80"
      />
    </>
  )
}

export default WeatherAnimation