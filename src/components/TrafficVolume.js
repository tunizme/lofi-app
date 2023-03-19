import React, { useState, useRef, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import PopperWrapper from "../components/PopperWrapper";
import HeadlessTippy from "@tippyjs/react/headless";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const TrafficVolume = () => {
  const [isTraffic, setIsTraffic] = useState(false);
  const [value, setValue] = useState(50);
  const audio = useRef();
  const isMuteAll = useSelector((state) => state.muteall);
  const handleSlider = (event, newValue) => {
    if (newValue === 0) {
      setValue(50);
      setIsTraffic(false);
      return;
    }
    setValue(newValue);
  };
  useEffect(() => {
    if (audio.current) audio.current.audioEl.current.volume = value / 100;
    if (isMuteAll && audio.current) audio.current.audioEl.current.volume = 0;
  }, [value, isMuteAll]);
  return (
    <HeadlessTippy
      hideOnClick="true"
      interactive
      maxWidth={300}
      delay={[100, 100]}
      placement="bottom"
      render={() => (
        <PopperWrapper>
          <p onClick={() => setIsTraffic((pre) => !pre)} className="mb-0">
            City Traffic
          </p>
          {isTraffic && (
            <div className="px-2">
              <Box sx={{ width: 150 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs>
                    <Slider
                      value={isMuteAll ? 0 : value}
                      aria-labelledby="input-slider"
                      onChange={handleSlider}
                    />
                  </Grid>
                </Grid>
              </Box>
            </div>
          )}
        </PopperWrapper>
      )}
    >
      <div
        className="popover-action"
        onClick={() => setIsTraffic((pre) => !pre)}
      >
        <div className="circle-hover">
          <div></div>
        </div>
        {isTraffic && (
          <ReactAudioPlayer
            ref={audio}
            src={"../assets/songs/city_traffic.mp3"}
            autoPlay
            loop
            volume={value / 100}
            muted={isMuteAll ? true : false}
          />
        )}
      </div>
    </HeadlessTippy>
  );
};

export default TrafficVolume;
