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
    "Cũng giống như những con đường trên mặt đất; kỳ thực, trên mặt đất vốn làm gì có đường. Người ta đi mãi thì thành đường thôi",
    "Chỉ những kẻ thực sự dám thì mới có thể bay",
    "Kẻ mạnh không phải là kẻ giẫm lên vai người khác để thoả mãn lòng ích kỉ, kẻ mạnh là kẻ biết giúp đỡ người khác trên đôi vai của chính mình",
    "Sự hiểu biết chẳng là gì ngoài tổng số những sự hiểu nhầm của chúng ta",
    "Trèo lên cao và không nghĩ là mình ngã thì sẽ không bao giờ ngã",
    "Cuộc sống không phải là chờ đợi giông bão qua đi, mà là học cách nhảy múa dưới mưa",
    "Hạnh phúc không nằm ở đích đến, mà nằm trên hành trình",
    "Chúng ta không thể chọn được hoàn cảnh, nhưng có thể chọn cách phản ứng với nó",
    "Không có thành công nào mà không có sự nỗ lực",
    "Mỗi lần thất bại là một bước tiến gần hơn đến thành công",
    "Đừng bao giờ từ bỏ. Kỳ tích luôn xảy ra khi bạn không từ bỏ",
    "Hãy dám ước mơ và dám làm vì ước mơ của mình",
    "Cuộc sống là một hành trình dài, không có đường tắt để đạt được điều lớn lao",
    "Người lạc quan nhìn thấy cơ hội trong từng khó khăn",
    "Cuộc đời là một bức tranh; bạn chính là người họa sĩ vẽ lên nó",
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
      .get("https://api.openweathermap.org/data/2.5/weather?", {
        params: {
          q: "danang",
          APPID: "d8591a8ab96509c8bff12086028efeca",
          units: "metric",
          lang: "vi",
        },
      })
      .then((res) => setDataWeather(res.data))
      .catch(() => setDataWeather([]));
    return () => clearInterval(intervalId);
  }, [hours, ip]);
  console.log(dataWeather);
  return (
    <div className={`weather-wrapper d-${display} `}>
      <div className="row">
        <div className="header-weather d-flex align-items-center justify-content-between">
          <div className="weather-disc d-flex gap-15">
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center justify-content-start">
                <img
                  src={`https://openweathermap.org/img/wn/${
                    dataWeather.weather && dataWeather.weather[0].icon
                  }@2x.png`}
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
                {dataWeather.main && Math.floor(dataWeather.main.feels_like)}
                <sup>o</sup>C
              </p>
              <p className="mb-0 pt-0">
                Độ ẩm: {dataWeather.main && dataWeather.main.humidity}%
              </p>
              <p className="mb-0 pt-0">
                Gió: {dataWeather.wind && Math.floor(dataWeather.wind.speed)}
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
