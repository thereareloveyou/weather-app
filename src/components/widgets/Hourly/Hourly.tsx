import { getDateHourly } from "../../../helpers/GetDateHourly";
import { HourlyColumn } from "../../HourlyColumn/HourlyColumn";

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import { Widget } from "../../ui/card";
import cn from "classnames";

export interface HourlyProps {
  temp: number[];
  time: string[];
  code: number[];
  classname?: string;
}

interface ArrHourly {
  temperature_2m: number;
  weather_code: number;
  time: string;
}

export const HourlyWidget = ({ temp, time, code, classname }: HourlyProps) => {
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const index = time.findIndex((e) => e == getDateHourly());

  const nextTemp = temp.slice(index).slice(0, 12);
  const weatherCodes = code.slice(index).slice(0, 12);

  const nextHours = time.slice(index).slice(0, 12);

  const arr: ArrHourly[] = [];
  for (let i = 0; i < nextHours.length; i++) {
    arr.push({
      temperature_2m: nextTemp[i],
      weather_code: weatherCodes[i],
      time: new Intl.DateTimeFormat("ru-RU", { hour: "numeric", hour12: true }).format(
        new Date(nextHours[i])
      ),
    });
  }

  const nightHours = [
    "0 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "9 PM",
    "10 PM",
    "11 PM",
    "12 PM",
  ];

  return (
    <Widget
      ref={ref}
      {...events}
      className={cn("flex gap-14 md:gap-10 max-w-full overflow-hidden scrollbar-hide md:max-w-xl", classname)}
    >
      {arr.map((el, i) => (
        <HourlyColumn
          timeOfDay={nightHours.includes(el.time) ? "N" : "D"}
          key={el.time}
          time={i == 0 ? "Now" : el.time}
          weather={el.weather_code}
          temperature={el.temperature_2m}
        />
      ))}
    </Widget>
  );
};
