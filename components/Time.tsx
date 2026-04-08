"use client";
import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return <div className="font-mono text-sm text-gray-400">Loading...</div>;
  }

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="font-mono text-sm text-gray-400">
      {hours}:{minutes}:{seconds}
    </div>
  );
};

export default Time;
