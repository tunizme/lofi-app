import React, { useContext } from "react";
import { Backgrounds } from "../Context";
const StatusBackground = ({ status = false, isRain = false, place }) => {
  const { DataBackgrounds } = useContext(Backgrounds);
  return (
    <>
      <div
        className={`d-${isRain ? "none" : "block"} ${
          status ? "opacity-1" : "opacity-0"
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
        className={`d-${isRain ? "none" : "block"} ${
          status ? "opacity-0" : "opacity-1"
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
