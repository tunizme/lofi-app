import React, { useEffect, useState } from "react";
import Gettime from "./Gettime";

const DescriptionWeather = () => {
  // Create a new Date object from the Unix timestamp
  const [date, setDate] = useState(new Date().getDate());
  const dateobj = new Date();
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDayOfMonth = new Date().getDate();
      if (newDayOfMonth !== date) {
        setDate(newDayOfMonth);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  // Define an array of weekday names
  const weekdayNames = [
    "Chủ nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const monthNames = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
    "Tháng 13",
    "Tháng 14",
    "Tháng 15",
    "Tháng 16",
    "Tháng 17",
    "Tháng 18",
    "Tháng 19",
    "Tháng 20",
    "Tháng 21",
    "Tháng 22",
    "Tháng 23",
    "Tháng 24",
    "Tháng 25",
    "Tháng 26",
    "Tháng 27",
    "Tháng 28",
    "Tháng 29",
    "Tháng 30",
    "Tháng 31",
  ];

  const weekday = weekdayNames[dateobj.getDay()];
  const month = monthNames[dateobj.getMonth()];

  return (
    <div className="d-flex flex-column align-items-center">
      <Gettime />
      <p className="mb-0 pt-0">{weekday}</p>
      <p className="mb-0 pt-0">Ngày {dateobj.getDate()}</p>
      <p className="mb-0 pt-0">{month}</p>
    </div>
  );
};

export default DescriptionWeather;
