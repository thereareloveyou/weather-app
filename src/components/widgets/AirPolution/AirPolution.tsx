import { Polution } from "../../../store/global.slice";
import { ProgressBar } from "../../Bar/Bar";
import { Widget, WidgetContent, WidgetFooter, WidgetHeader, WidgetTitle } from "../../ui/card";



export interface AirPolutionProps {
  polution: Polution;
  className?: string;
}

export const AirPolution = ({ polution, className }: AirPolutionProps) => {
  return (
    <Widget className={className}>
      <WidgetHeader>
        <WidgetTitle>
          <img className="w-4 h-4" src="/public/icons/pol.svg" alt="" />
          Air pollution
          </WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="relative my-auto">
        <ProgressBar value={polution.current.pm2_5} />
      </WidgetContent>
      <WidgetFooter>
        {polution.current.pm2_5 < 50
          ? "Air quality is good."
          : polution.current.pm2_5 < 100
          ? "Air quality is moderate."
          : polution.current.pm2_5 < 150
          ? "Air quality is unhealthy for sensitive groups."
          : polution.current.pm2_5 < 200
          ? "Air quality is unhealthy."
          : polution.current.pm2_5 < 300
          ? "Air quality is very unhealthy."
          : "Air quality is hazardous."}
      </WidgetFooter>
    </Widget>
  );
};
