import { getDateHourly } from "../../../helpers/GetDateHourly";
import { Widget, WidgetContent, WidgetFooter, WidgetHeader, WidgetTitle } from "../../ui/card";

interface VisibilityProps {
  time: string[];
  visibility: number[];
  classname?: string;
}

export const Visibility = ({ visibility, time, classname }: VisibilityProps) => {
  const index = time.findIndex((e) => e == getDateHourly());

  return (
    <Widget className={classname}>
      <WidgetHeader>
        <WidgetTitle>
          <img className="w-4 h-4" src="/public/icons/visibility.svg" alt="" />
          Visibility
        </WidgetTitle>
      </WidgetHeader>
      <WidgetContent> {Math.round(visibility[index] / 1000) + "KM"}</WidgetContent>
      <WidgetFooter>
        {visibility[index] >= 10000
          ? "It's perfectly clear right now."
          : visibility[index] >= 5000
          ? "Good visibility."
          : "Poor visibility. Exercise caution while driving or moving around."}
      </WidgetFooter>
    </Widget>
  );
};
