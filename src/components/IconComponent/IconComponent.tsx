
import { IconMappings } from "./IconMap";

interface IconComponentProps {
  weatherCode: number;
  className?: string;
  param: "on" | "off";
  timeOfDay?: string;
}

export default function IconComponent({ weatherCode, className, param, timeOfDay }: IconComponentProps) {
  const iconName = IconMappings[weatherCode];

  return (
    <>
      <div className={className}>
        <img
          className="relative w-full h-full"
          src={`/public/icons/wi-${
            timeOfDay === "D" ? iconName : timeOfDay === "N" ? iconName + "N" : iconName
          }.svg`}
          alt=""
        />
      </div>
      {param === "on" ? <div className="font-medium text-text">{iconName.replace("-", " ")}</div> : ""}
    </>
  );
}
