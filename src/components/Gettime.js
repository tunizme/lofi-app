import React, { useEffect, useState } from "react";

const Gettime = () => {
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const timeId = setInterval(() => {
      var today = new Date();
      var time = `${
        today.getHours() < 10 ? `0${today.getHours()}` : today.getHours()
      }:${
        today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()
      }`;
      setCurrentTime(time);
    }, 1000);
    return () => clearInterval(timeId);
  }, []);
  return (
    <span className="current-time">
      <p className="text-center mb-0">{currentTime}</p>
    </span>
  );
};

export default Gettime;
