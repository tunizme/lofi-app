import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { setWeather } from "../Slice/WeatherSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import DiscriptionWeather from "./DiscriptionWeather";

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
  useEffect(() => {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          lat: "16.476289",
          lon: "107.583396",
          appid: "64bb3933dad2a344538db14459d47f0c",
          units: "metric",
          lang: "vi",
        },
      })
      .then((res) => {
        setTimeout(() => setDataWeather(res.data), 1000);
      })
      .catch(() => setDataWeather([]));
  }, []);

  return (
    <div className={`weather-wrapper d-${display} `}>
      <div className="row">
        <div className="header-weather d-flex align-items-start justify-content-between">
          <div className="weather-disc d-flex gap-15">
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex align-items-end justify-content-start">
                <img
                  src={
                    dataWeather.weather &&
                    `http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`
                  }
                  alt=""
                />
                <p className="temp-current mb-0 pt-0">
                  {dataWeather.main && Math.floor(dataWeather.main.temp)}
                  <sup>o</sup>C
                </p>
              </div>
              <p className="weathert-description mb-0 pt-0 px-3">
                {dataWeather.weather && dataWeather.weather[0].description}
              </p>
            </div>
            <div className="sub-weather d-flex flex-column gap-10 justify-content-end">
              <p className="mb-0 pt-0">
                Cảm giác như:{" "}
                {dataWeather.main && Math.round(dataWeather.main.feels_like)}
                <sup>o</sup>C
              </p>
              <p className="mb-0 pt-0">
                Độ ẩm: {dataWeather.main && dataWeather.main.humidity}%
              </p>
              <p className="mb-0 pt-0">
                Gió : {dataWeather.wind && dataWeather.wind.speed} m/s
              </p>
            </div>
          </div>
          <div className="weather-time d-flex gap-10">
            <DiscriptionWeather
              unixTimestamp={dataWeather.dt && dataWeather.dt}
            />
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
