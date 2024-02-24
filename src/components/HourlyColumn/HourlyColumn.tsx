import IconComponent from "../IconComponent/IconComponent";
import { WidgetContent } from "../ui/card";

export interface HourlyColumnProps {
  time: string;
  temperature: number;
  weather: number;
  timeOfDay: string;
}

export const HourlyColumn = ({ time, temperature, weather, timeOfDay }: HourlyColumnProps) => {
  return (
    <WidgetContent className="slider-item flex flex-col justify-between items-center text-text min-w-10">
      <div className="text-text-gray text-sm">{time}</div>
      <div className="relative flex items-center h-8 w-8">
        <IconComponent timeOfDay={timeOfDay} param="off" weatherCode={weather} />
      </div>
      <div className="font-light text-base">{Math.round(temperature) + "°"}</div>
    </WidgetContent>
  );
};
