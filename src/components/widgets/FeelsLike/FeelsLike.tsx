import { getDateHourly } from "../../../helpers/GetDateHourly";
import { Widget, WidgetContent, WidgetFooter, WidgetHeader, WidgetTitle } from "../../ui/card";

interface FeelsLikeProps {
  time: string[];
  apparent_temperature: number[];
  current_temp: number;
  classname?: string;
}

export const FeelsLike = ({ current_temp, time, apparent_temperature, classname }: FeelsLikeProps) => {
  const index = time.findIndex((e) => e == getDateHourly());

  return (
    <Widget className={classname}>
      <WidgetHeader>
        <WidgetTitle>
          <img className="w-4 h-4" src="/public/icons/feels-like.svg" alt="" />
          Feels like
        </WidgetTitle>
      </WidgetHeader>
      <WidgetContent> {Math.round(apparent_temperature[index]) + "°"}</WidgetContent>
      <WidgetFooter>
        {current_temp == apparent_temperature[index]
          ? "Feels just like than the actual temperature"
          : current_temp > apparent_temperature[index]
          ? "Feels hoter than the actual temperature"
          : "Feels colder than the actual temperature"}
      </WidgetFooter>
    </Widget>
  );
};
