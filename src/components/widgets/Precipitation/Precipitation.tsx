import { getDateHourly } from "../../../helpers/GetDateHourly";
import { Widget, WidgetContent, WidgetFooter, WidgetHeader, WidgetTitle } from "../../ui/card";

interface PrecipitationProps {
  time: string[];
  precipitation: number[];
  classname?: string;
}

export const Precipitation = ({ precipitation, time, classname }: PrecipitationProps) => {
  const index = time.findIndex((e) => e == getDateHourly());
  const PrecipitationLastThreeHour = [...precipitation]
    .slice(index - 3, index)
    .reduce((acc, el) => (acc += el), 0);
  return (
    <Widget className={classname}>
      <WidgetHeader>
        <WidgetTitle>
          <img className="w-4 h-4" src="/public/icons/precipitation.svg" alt="" />
          Precipitation
        </WidgetTitle>
      </WidgetHeader>
      <WidgetContent>{`${PrecipitationLastThreeHour.toFixed(1)} mm \nin the last 3 hours`}</WidgetContent>
      <WidgetFooter>
        {PrecipitationLastThreeHour / 3 == 0
          ? "No recent precipitation. \nConditions are dry."
          : PrecipitationLastThreeHour / 3 <= 0.2
          ? "Light rain or drizzle. \nAn umbrella may come in handy."
          : PrecipitationLastThreeHour / 3 <= 1.2
          ? "Moderate rain."
          : "Heavy rain."}
      </WidgetFooter>
    </Widget>
  );
};
