import React, { useContext } from "react";
import { Backgrounds } from "../Context";
import { useSelector } from "react-redux";
const StatusBackground = ({ isRain = false, place }) => {
  const status = useSelector((state) => state.status);
  const { DataBackgrounds } = useContext(Backgrounds);
  return (
    <>
      <div
        className={`d-${isRain ? "none" : "block"} opacity-${
          status ? "1" : "0"
        } scene position-absolute`}
      >
        <video
          loop
          autoPlay
          muted
          style={{
            width: "100vw",
            height: "100vh",
          }}
          src={DataBackgrounds[place].src}
        />
      </div>
      <div
        className={`d-${isRain ? "none" : "block"} opacity-${
          status ? "0" : "1"
        } scene position-absolute`}
      >
        <video
          loop
          autoPlay
          muted
          style={{
            width: "100vw",
            height: "100vh",
          }}
          src={DataBackgrounds[place].src_night}
        />
      </div>
      <div
        className={`d-${isRain ? "block" : "none"} opacity-${
          isRain && status ? "1" : "0"
        } scene position-absolute`}
      >
        <video
          loop
          autoPlay
          muted
          style={{
            width: "100vw",
            height: "100vh",
          }}
          src={DataBackgrounds[place].src_rain}
        />
      </div>
      <div
        className={`d-${isRain ? "block" : "none"} opacity-${
          isRain && !status ? "1" : "0"
        }  scene position-absolute`}
      >
        <video
          loop
          autoPlay
          muted
          style={{
            width: "100vw",
            height: "100vh",
          }}
          src={DataBackgrounds[place].src_rain_night}
        />
      </div>
    </>
  );
};

export default StatusBackground;
