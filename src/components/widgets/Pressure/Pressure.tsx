import { Widget, WidgetHeader, WidgetTitle, WidgetContent, WidgetFooter } from "../../ui/card";
interface PressureProps {
  pressure: number;
  classname?: string;
}

export const Pressure = ({ pressure, classname }: PressureProps) => {
  return (
    <Widget className={classname}>
      <WidgetHeader>
        <WidgetTitle><img className="w-4 h-4" src="/public/icons/pressure.svg" alt="" />Pressure</WidgetTitle>
      </WidgetHeader>
      <WidgetContent> {Math.round(pressure) + " hPa"}</WidgetContent>
      <WidgetFooter>
        {pressure < 1000
          ? "Low pressure. Expect changes in the weather."
          : pressure >= 1000 && pressure <= 1010
          ? "Normal pressure. Typical weather conditions."
          : "High pressure. Expect stable and clear weather."}
      </WidgetFooter>
    </Widget>
  );
};
