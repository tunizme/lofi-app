import React from "react";
import Gettime from "../components/Gettime";
import AudioControl from "../components/AudioControl";
import Tooltip from "@mui/material/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faExpand,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../Slice/StatusSlice";
import { setWeather } from "../Slice/WeatherSlice";
import { setMuteAll } from "../Slice/MuteAllSlice";

const Header = () => {
  //handle full screen
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  //handle change background
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const handleStatus = () => {
    const action = setStatus();
    dispatch(action);
  };

  //weather
  const handleHideWeather = () => {
    const action = setWeather();
    dispatch(action);
  };

  //handle mute all
  const isMuteAll = useSelector((state) => state.muteall);
  const handleMute = () => {
    const action = setMuteAll();
    dispatch(action);
  };
  return (
    <div className="header position-absolute w-100">
      <div className="container-xxl">
        <div className="row">
          <div className="wrapper-control d-flex align-items-center justify-content-between">
            <div className="col-4">
              <img
                src="https://app.lofi.co/static/media/logo.0cbf9e63b4a021661126.gif"
                alt="logo"
                height={100}
              />
            </div>
            <div className="col-8">
              <div className="d-flex aligin-items-center justify-content-end gap-20">
                <button
                  onClick={handleHideWeather}
                  className="wrapper-icon real-time"
                >
                  <Gettime />
                </button>
                <div className="toggle d-flex align-items-center justify-content-center">
                  <input
                    onChange={handleStatus}
                    type="checkbox"
                    id="switch"
                    checked={!!status}
                  />
                  <label htmlFor="switch"></label>
                </div>
                <button className="audio-controls wrapper-icon d-flex gap-15 align-items-center justify-content-center">
                  <AudioControl />
                </button>
                <Tooltip
                  TransitionProps={{ timeout: 200 }}
                  title={isMuteAll ? "Unmute all" : "Mute all"}
                  arrow
                >
                  <button
                    onClick={handleMute}
                    className={`
                  ${
                    isMuteAll && "activeMute"
                  } wrapper-icon d-flex align-items-center justify-content-center
                `}
                  >
                    <FontAwesomeIcon icon={faVolumeMute} />
                  </button>
                </Tooltip>
                <button
                  onClick={toggleFullScreen}
                  className="wrapper-icon d-flex align-items-center justify-content-center"
                >
                  <FontAwesomeIcon icon={faExpand} />
                </button>
                <button className="wrapper-icon d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faBarsStaggered} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
