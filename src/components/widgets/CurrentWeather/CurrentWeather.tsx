import LifeClock from "../../../helpers/LifeClock";
import IconComponent from "../../IconComponent/IconComponent";
import { Widget, WidgetContent, WidgetFooter, WidgetHeader } from "../../ui/card";
import cn from "classnames";
import React from "react";

interface CurrentWeatherProps {
  temp: number;
  temp_min: number;
  temp_max: number;
  weather_code: number;
  city: string;
  className: string;
  ref: any;
}

export const CurrentWeather = React.forwardRef<HTMLDivElement, CurrentWeatherProps>(
  ({ className, temp, temp_max, temp_min, weather_code, city }, ref) => (
    <>
      <Widget
        ref={ref}
        className={cn(className, "flex flex-col justify-between overflow-hidden h-fit w-full md:h-[25rem]")}
      >
        <WidgetHeader className="font-medium text-lg text-text">
          <div className="flex flex-row justify-between">
            <div>{new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date())}</div>
            <div>
              <LifeClock />
            </div>
          </div>
          <div>{city}</div>
        </WidgetHeader>
        <WidgetContent className="flex justify-center py-8 text-8xl md:py-10 font-bold text-text">
          {Math.round(temp) + "°"}
        </WidgetContent>
        <WidgetFooter>
          <div className="relative flex flex-col">
            <IconComponent
              className="relative h-9 w-9"
              param="on"
              weatherCode={weather_code}
            />
          </div>
          <div className="flex flex-row gap-2 font-light text-text-gray text-base">
            <span>H: {Math.round(temp_max) + "°"}</span>
            <span>L: {Math.round(temp_min) + "°"}</span>
          </div>
        </WidgetFooter>
      </Widget>
    </>
  )
);
