import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { setWeather } from "../Slice/WeatherSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import DescriptionWeather from "./DescriptionWeather";

const Weather = ({ display }) => {
  const dispatch = useDispatch();
  const handleHideWeather = () => {
    const action = setWeather();
    dispatch(action);
  };
  const [dataWeather, setDataWeather] = useState([]);
  const date = new Date();
  const philosophys = [
    "Cũng giống như những con đường trên mặt đất; kỳ thực, trên mặt đất vốn làm gì có đường. Người ta đi mãi thì thành đường thôi.",
    "Chỉ những kẻ thực sự dám thì mới có thể bay",
    "Kẻ mạnh không phải là kẻ giẫm lên vai người khác để thoả mãn lòng ích kỉ, kẻ mạnh là kẻ biết giúp đỡ người khác trên đôi vai của chính mình",
    "Sự hiểu biết chẳng là gì ngoài tổng số những sự hiểu nhầm của chúng ta",
    "Trèo lên cao và không nghĩ là mình ngã thì sẽ không bao giờ ngã.",
    "Chết không phải là đối lập với sống. Cái chết chính là một phần của cuộc sống.",
    "Chết không phải là đối lập với sống. Cái chết chính là một phần của cuộc sống.",
    "Chết không phải là đối lập với sống. Cái chết chính là một phần của cuộc sống.",
    "Chết không phải là đối lập với sống. Cái chết chính là một phần của cuộc sống.",
    "Chết không phải là đối lập với sống. Cái chết chính là một phần của cuộc sống.",
    "Chết không phải là đối lập với sống. Cái chết chính là một phần của cuộc sống.",
    "Chết không phải là đối lập với sống. Cái chết chính là một phần của cuộc sống.",
    "Chết không phải là đối lập với sống. Cái chết chính là một phần của cuộc sống.",
    "Chết không phải là đối lập với sống. Cái chết chính là một phần của cuộc sống.",
    "Chết không phải là đối lập với sống. Cái chết chính là một phần của cuộc sống.",
  ];
  const [ip, setIP] = useState("");
  const [hours, setHours] = useState(new Date().getHours());
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newHours = new Date().getHours();
      if (newHours !== hours) {
        setHours(newHours);
      }
    }, 3600000);

    axios
      .get("https://geolocation-db.com/json/")
      .then((res) => setIP(res.data.IPv4))
      .catch(() => setIP(""));
    axios
      .get("http://api.weatherapi.com/v1/current.json", {
        params: {
          key: "d8591a8ab96509c8bff12086028efeca",
          q: ip,
          lang: "vi",
        },
      })
      .then((res) => setDataWeather(res.data))
      .catch(() => setDataWeather([]));
    return () => clearInterval(intervalId);
  }, [hours, ip]);
  return (
    <div className={`weather-wrapper d-${display} `}>
      <div className="row">
        <div className="header-weather d-flex align-items-center justify-content-between">
          <div className="weather-disc d-flex gap-15">
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center justify-content-start">
                <img
                  src={
                    dataWeather.current && dataWeather.current.condition.icon
                  }
                  alt=""
                />
                <p className="temp-current mb-0 pt-0">
                  {dataWeather.current &&
                    Math.floor(dataWeather.current.temp_c)}
                  <sup>o</sup>C
                </p>
              </div>
              <p className="weathert-description mb-0 pt-0 px-3">
                {dataWeather.current && dataWeather.current.condition.text}
              </p>
            </div>
            <div className="sub-weather d-flex flex-column gap-10 justify-content-end">
              <p className="mb-0 pt-0">
                Cảm giác như:{" "}
                {dataWeather.current &&
                  Math.floor(dataWeather.current.feelslike_c)}
                <sup>o</sup>C
              </p>
              <p className="mb-0 pt-0">
                Độ ẩm: {dataWeather.current && dataWeather.current.humidity}%
              </p>
              <p className="mb-0 pt-0">
                Gió:{" "}
                {dataWeather.current &&
                  Math.floor(dataWeather.current.wind_kph)}
                km/h
              </p>
            </div>
          </div>
          <div className="weather-time d-flex gap-10">
            <DescriptionWeather />
            <div className="close-btn">
              <FontAwesomeIcon icon={faMinus} onClick={handleHideWeather} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="philosophy mt-3">
          <p className="mb-0">{philosophys[date.getDay()]}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
