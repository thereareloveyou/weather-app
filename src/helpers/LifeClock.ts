import { useState, useEffect } from "react";

export default function LifeClock() {
  // Initialize the current time to the current date and time
  const [time, setTime] = useState(
    new Intl.DateTimeFormat("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date())
  );

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }).format(new Date())
      );
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return time;
}


