import IconComponent from "../IconComponent/IconComponent";

interface DailyRowProps {
  min: number;
  max: number;
  deffValue: number;
  day: string;
  code: number;
}

export const DailyRow = ({ min, max, day, deffValue, code }: DailyRowProps
  ) => {
  const cofDifference = Math.round(max - min);

  return (
    <div className="flex w-full flex-row text-text items-center justify-between gap-8">
      <div className="text-lg min-w-[3rem]">{day}</div>
      <div>{<IconComponent param="off" className="relative h-8 w-8" weatherCode={code} />}</div>
      <div className="flex flex-row w-[60%] items-center justify-center gap-2">
        <span className="flex min-w-[1rem] justify-end text-text-gray font-light text-sm">
          {Math.floor(min)}
        </span>
        <div
          className=" relative overflow-hidden w-full rounded-full h-1.5"
          style={{ background: "var(--background-bar-2)" }}
        >
          <div
            className="absolute bg-gradient-to-r from-blue-500 via-teal-300 to-emerald-300 h-1.5 rounded-full"
            style={{
              left: `${(100 / deffValue) * cofDifference}%`,
              width: `${(100 / deffValue) * cofDifference}%`,
            }}
          ></div>
        </div>
        <span className="flex min-w-[1rem] justify-end font-light text-sm">{Math.floor(max)}</span>
      </div>
    </div>
  );
};
