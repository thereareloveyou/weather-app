interface BarProps {
  value: number;
  classname?: string;
}

export const ProgressBar = ({ classname, value }: BarProps) => {
  const scale = classname === "uv-bar" ? value * 11 : value;

  return (
    <div
      className="rounded-full min-h-2 bg-backgroundBar"
      style={{
        background:
          "linear-gradient(90deg,  rgb(58, 110, 180) 0%, rgb(126, 212, 87) 20%, rgb(248, 212, 73) 40%, rgb(235, 77, 96) 60%, rgb(180, 96, 231) 80%,rgb(178, 34, 34) 100% )",
      }}
    >
      <div
        className="h-2 top-[-3px]"
        style={{ left: `${scale}%`, position: classname === "uv-bar" ? "relative" : "absolute" }}
      >
        <img src="/icons/polution.svg" alt="" />
      </div>
    </div>
  );
};
