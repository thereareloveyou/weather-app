import { useDispatch, useSelector } from "react-redux";
import { CurrentWeather } from "./components/widgets/CurrentWeather/CurrentWeather";
import { AppDispath, RootState } from "./store/store";
import { useEffect, useRef, useState } from "react";
import { getCurrentPolution, getCurrentWeather } from "./store/global.slice";
import { AirPolution } from "./components/widgets/AirPolution/AirPolution";
import { Sunset } from "./components/widgets/Sunset/Sunset";
import { Wind } from "./components/widgets/Wind/Wind";
import { ForecastDays } from "./components/widgets/ForecastDays/ForecastDays";
import { HourlyWidget } from "./components/widgets/Hourly/Hourly";
import { UV } from "./components/widgets/UV/UV";
import { Precipitation } from "./components/widgets/Precipitation/Precipitation";
import { FeelsLike } from "./components/widgets/FeelsLike/FeelsLike";
import { Humidity } from "./components/widgets/Humidity/Humidity";
import { Visibility } from "./components/widgets/Visibility/Visibility";
import { Pressure } from "./components/widgets/Pressure/Pressure";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { LoaderAnimation } from "./helpers/Animation";

export const App = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(true);

  const { airPolution, longitude, latitude, weather, city } = useSelector((s: RootState) => s.global);
  const dispatch = useDispatch<AppDispath>();

  const container = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (isLoaded) {
      LoaderAnimation(setIsLoaded);
      dispatch(getCurrentWeather({ longitude: longitude, latitude: latitude }));
      dispatch(getCurrentPolution({ longitude: longitude, latitude: latitude }));
    }
  }, [isLoaded]);

  return (
    <div ref={container}>
      {isLoaded && (
        <div className="loader z-100 absolute inset-0 w-full h-[100vh] overflow-hidden bg-slate-300 opacity-2">
        </div>
      )}
      <div className={`flex-grow relative mt-3 ${isLoaded ? "z-[-1]" : "z-10"}`}>
        <div className="my-[1rem] flex justify-end">
          <ModalWindow />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex w-full xl:max-w-[21rem] flex-col gap-4 md:max-w-full">
            <CurrentWeather
              className="current box"
              city={city}
              temp_min={weather.daily.temperature_2m_min[0]}
              temp_max={weather.daily.temperature_2m_max[0]}
              weather_code={weather.current.weather_code}
              temp={weather.current.temperature_2m}
            />
            <ForecastDays
              classname="current relative"
              temp_max={weather.daily.temperature_2m_max}
              temp_min={weather.daily.temperature_2m_min}
              days={weather.daily.time}
              weather_code={weather.daily.weather_code}
            />
          </div>
          <section className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            <AirPolution
              className="current flex flex-col border border-borderColor col-span-2 text-text h-48 justify-between order-2 md:order-1"
              polution={airPolution}
            />
            <Sunset
              classname="current flex flex-col border border-borderColor text-text h-48 justify-between order-3 lg:order-2"
              sunrise={weather.daily.sunrise[0]}
              sunset={weather.daily.sunset[0]}
            />
            <Wind
              classname="current flex flex-col border border-borderColor text-text h-48 justify-between order-4 xl:order-3"
              speed={weather.current.wind_speed_10m}
              deg={weather.current.wind_direction_10m}
            />
            <HourlyWidget
              classname="current flex flex-row col-span-2 justify-between h-48 order-first md:order-2 lg:order-3"
              temp={weather.hourly.temperature_2m}
              time={weather.hourly.time}
              code={weather.hourly.weather_code}
            />
            <UV
              classname="current flex flex-col justify-between text-text h-48 order-5"
              time={weather.hourly.time}
              uv_index={weather.hourly.uv_index}
            />
            <Precipitation
              classname="current flex flex-col justify-between text-text h-48 order-6"
              time={weather.hourly.time}
              precipitation={weather.hourly.precipitation}
            ></Precipitation>
            <FeelsLike
              classname="current flex flex-col justify-between text-text h-48 order-7"
              time={weather.hourly.time}
              apparent_temperature={weather.hourly.apparent_temperature}
              current_temp={weather.current.temperature_2m}
            />
            <Humidity
              classname="current flex flex-col justify-between text-text h-48 order-8"
              relative_humidity_2m={weather.current.relative_humidity_2m}
            />
            <Visibility
              classname="current flex flex-col justify-between text-text h-48 order-9"
              visibility={weather.hourly.visibility}
              time={weather.hourly.time}
            />
            <Pressure
              classname="current flex flex-col justify-between text-text h-48 order-10"
              pressure={weather.current.surface_pressure}
            />
          </section>
        </div>
      </div>
    </div>
  );
};
