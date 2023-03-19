import React from "react";
import Gettime from "./Gettime";

const DiscriptionWeather = ({ unixTimestamp }) => {
  // Create a new Date object from the Unix timestamp
  const dateObj = new Date(unixTimestamp * 1000);

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

  // Get the weekday, month, and year components
  const weekday = weekdayNames[dateObj.getDay()];
  const date = dateObj.getDate();
  const month = monthNames[dateObj.getMonth()];

  // Output the formatted date
  return (
    <div className="d-flex flex-column align-items-center">
      <Gettime />
      <p className="mb-0 pt-0">{weekday}</p>
      <p className="mb-0 pt-0">Ngày {date}</p>
      <p className="mb-0 pt-0">{month}</p>
    </div>
  );
};

export default DiscriptionWeather;
