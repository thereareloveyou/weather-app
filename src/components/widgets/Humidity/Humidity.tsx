import { Widget, WidgetContent, WidgetFooter, WidgetHeader, WidgetTitle } from "../../ui/card";

interface HumidityProps {
  relative_humidity_2m: number;
  classname?: string;
}

export const Humidity = ({ relative_humidity_2m, classname }: HumidityProps) => {
  return (
    <Widget className={classname}>
      <WidgetHeader>
        <WidgetTitle>
          <img className="w-4 h-4" src="/public/icons/humidity.svg" alt="" />
          Humidity
        </WidgetTitle>
      </WidgetHeader>
      <WidgetContent>{relative_humidity_2m + "%"}</WidgetContent>
      <WidgetFooter>
        {relative_humidity_2m < 40
          ? "Low humidity. It might feel dry."
          : relative_humidity_2m < 70
          ? "Moderate humidity. Comfortable conditions."
          : "High humidity. It might feel humid and uncomfortable."}
      </WidgetFooter>
    </Widget>
  );
};
