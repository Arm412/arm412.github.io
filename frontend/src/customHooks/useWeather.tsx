import { useState, useEffect } from "react";

export type WeatherType = "sunny" | "cloudy" | "rain" | "snow" | "storm";

interface CurrentWeather {
  temperature: number;
  weathercode: number;
  is_day: number;
}

interface NormalizedWeather {
  weatherType: WeatherType;
  temperature: number;
  isNight: boolean;
}

interface WeatherResponse {
  current_weather: CurrentWeather;
}

export function useWeather(): { weather: NormalizedWeather | null; loading: boolean; error: string | null } {
  const [weather, setWeather] = useState<NormalizedWeather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=40.44&longitude=-79.99&current_weather=true"
        );
        if (!res.ok) throw new Error("Failed to fetch weather");

        const data: WeatherResponse = await res.json();
        const current = data.current_weather;

        // Map weathercode to your animation type
        let weatherType: WeatherType = "sunny";
        const code = current.weathercode;

        if (code === 0) weatherType = "sunny";
        else if (code >= 1 && code <= 3) weatherType = "cloudy";
        else if ((code >= 51 && code <= 57) || (code >= 61 && code <= 67) || (code >= 80 && code <= 82)) weatherType = "rain";
        else if ((code >= 71 && code <= 75) || code === 77 || code === 85 || code === 86) weatherType = "snow";
        else if (code >= 95) weatherType = "storm";

        const hour = new Date().getHours();
        const isNight = hour < 6 || hour > 18;

        setWeather({
          weatherType,
          temperature: current.temperature,
          isNight
        });
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  return { weather, loading, error };
}
