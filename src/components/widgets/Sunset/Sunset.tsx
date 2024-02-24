import { Widget, WidgetContent, WidgetFooter, WidgetHeader, WidgetTitle } from "../../ui/card";

export interface SunsetProps {
  sunrise: string;
  sunset: string;
  classname?: string;
}

export const Sunset = ({ sunrise, sunset, classname }: SunsetProps) => {
  const formatDate = (value: string): string => {
    return new Intl.DateTimeFormat("ru-RU", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(new Date(value));
  };

  return (
    <Widget className={classname}>
      <WidgetHeader>
        <WidgetTitle>
          <img className="w-4 h-4" src="/public/icons/sunset.svg" alt="" />
          Sunset
        </WidgetTitle>
      </WidgetHeader>
      <WidgetContent>{`${formatDate(sunset)}`}</WidgetContent>
      <WidgetFooter>{`Sunrise: ${formatDate(sunrise)}`}</WidgetFooter>
    </Widget>
  );
};
