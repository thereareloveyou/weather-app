import { getDateHourly } from "../../../helpers/GetDateHourly";
import { ProgressBar } from "../../Bar/Bar";
import { Widget, WidgetContent, WidgetFooter, WidgetHeader, WidgetTitle } from "../../ui/card";

export interface UVProps {
  time: string[];
  uv_index: number[];
  classname?: string;
}

export const UV = ({ uv_index, time, classname }: UVProps) => {
  const index = time.findIndex((e) => e == getDateHourly());

  return (
    <Widget className={classname}>
      <WidgetHeader>
        <WidgetTitle><img className="w-4 h-4" src="/public/icons/uv.svg" alt="" />UV Index</WidgetTitle>
      </WidgetHeader>
      <WidgetContent>
        <div>{uv_index[index]}</div>
        <div className="mb-2">
          {uv_index[index] <= 2
            ? "Low"
            : uv_index[index] <= 5
            ? "Moderate"
            : uv_index[index] <= 7
            ? "High"
            : "Very High"}
        </div>
        <ProgressBar classname="uv-bar" value={uv_index[index]}></ProgressBar>
      </WidgetContent>
      <WidgetFooter>
        {uv_index[index] <= 2
          ? "No protection needed."
          : uv_index[index] <= 5
          ? "Wear sunscreen."
          : "Take precautions."}
      </WidgetFooter>
    </Widget>
  );
};
