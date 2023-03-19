import React, { useState } from "react";
import { useSelector } from "react-redux";
import StatusBackground from "../components/StatusBackground";
import RainVolume from "../components/RainVolume";
import TrafficVolume from "../components/TrafficVolume";
import Weather from "../components/Weather.js";
import PopperWrapper from "../components/PopperWrapper";
import HeadlessTippy from "@tippyjs/react/headless";
import BirdVolume from "../components/BirdVolume";
import PeopleTalk from "../components/PeopleTalk";
import Forest from "../components/Forest";
const Outside = () => {
  const [place, setPlace] = useState("outside");

  const handleOpenTheDoor = () => {
    setPlace("inside");
  };

  const handleGetOut = () => {
    setPlace("outside");
  };

  //status background
  const status = useSelector((state) => state.status);

  //weather noti
  const isWeather = useSelector((state) => state.weather);

  //rain
  const isRain = useSelector((state) => state.rain);

  return (
    <section className={`${place} main-wrapper position-relative`}>
      <div className="container-scene position-relative">
        <StatusBackground place={place} status={status} isRain={isRain} />
      </div>
      <div className="position-absolute rain-btn wrapper-tippy d-flex flex-column align-items-center">
        <RainVolume />
      </div>
      {place === "outside" && (
        <div className="position-absolute traffic-btn wrapper-tippy d-flex flex-column align-items-center">
          <TrafficVolume />
        </div>
      )}
      {place === "inside" && status && (
        <div className="position-absolute bird-btn wrapper-tippy d-flex flex-column align-items-center">
          <BirdVolume />
        </div>
      )}

      {place === "inside" && !status && (
        <div className="position-absolute bird-btn wrapper-tippy d-flex flex-column align-items-center">
          <Forest />
        </div>
      )}
      {place === "inside" && (
        <div className="position-absolute people-btn wrapper-tippy d-flex flex-column align-items-center">
          <PeopleTalk />
        </div>
      )}
      {place === "inside" ? (
        <div className="position-absolute calculate-btn wrapper-tippy d-flex flex-column align-items-center">
          <HeadlessTippy
            hideOnClick="true"
            interactive
            maxWidth={300}
            delay={[100, 100]}
            placement="right"
            render={() => (
              <PopperWrapper>
                <p onClick={handleGetOut} className="mb-0">
                  Calculate money and out
                </p>
              </PopperWrapper>
            )}
          >
            <div className="popover-action" onClick={handleGetOut}>
              <div className="circle-hover">
                <div></div>
              </div>
            </div>
          </HeadlessTippy>
        </div>
      ) : (
        <div className="position-absolute open-btn wrapper-tippy d-flex flex-column align-items-center">
          <HeadlessTippy
            hideOnClick="true"
            interactive
            maxWidth={300}
            delay={[100, 100]}
            placement="bottom"
            render={() => (
              <PopperWrapper>
                <p onClick={handleOpenTheDoor} className="mb-0">
                  Stanley open the door!!
                </p>
              </PopperWrapper>
            )}
          >
            <div className="popover-action" onClick={handleOpenTheDoor}>
              <div className="circle-hover">
                <div></div>
              </div>
            </div>
          </HeadlessTippy>
        </div>
      )}

      <div className="position-absolute weather">
        <Weather display={isWeather ? "block" : "none"} />
      </div>
    </section>
  );
};

export default Outside;
