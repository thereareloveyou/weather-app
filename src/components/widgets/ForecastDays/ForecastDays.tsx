import { DailyRow } from "../../DailyRow/DailyRow";
import { Widget, WidgetContent, WidgetHeader, WidgetTitle } from "../../ui/card";

interface ForecastDaysProps {
  temp_max: number[];
  temp_min: number[];
  days: string[];
  weather_code: number[];
  classname?: string;
}

export const ForecastDays = ({ temp_max, temp_min, days, weather_code, classname }: ForecastDaysProps) => {
  const arrMinMax = [];

  const max = Math.floor(temp_max.reduce((x, y) => Math.max(x, y)));
  const min = Math.floor(temp_min.reduce((x, y) => Math.min(x, y)));

  const deff = max - min;

  for (let i = 0; i < temp_max.length; i++) {
    arrMinMax.push({
      max: temp_max[i],
      min: temp_min[i],
      day:
        i == 0 ? "Today" : new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(new Date(days[i])),
      weather_code: weather_code[i],
    });
  }

  return (
    <Widget className={classname}>
      <WidgetHeader>
        <WidgetTitle>10-Day Forecast</WidgetTitle>
      </WidgetHeader>
      <WidgetContent>
        {arrMinMax.map((i, index) => (
          <div key={index}>
            <DailyRow
              code={i.weather_code}
              day={i.day}
              key={index}
              min={i.min}
              max={i.max}
              deffValue={deff}
            />
            {index !== 9 && <hr className="relative  border-borderColor my-3 h-[1px]" />}
          </div>
        ))}
      </WidgetContent>
    </Widget>
  );
};
