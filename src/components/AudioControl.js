import React, { useContext, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Audio } from "../Context";
import ReactAudioPlayer from "react-audio-player";
import Popover from "@mui/material/Popover";
import { faVolumeDown } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import { useSelector } from "react-redux";

const AudioControl = () => {
  const audioRef = useRef();
  const { DataAudio } = useContext(Audio);
  const [audioIndex, setAudioIndex] = useState(
    Math.floor(Math.random() * DataAudio.length)
  );
  const [isPlay, setIsPlay] = useState(false);
  const [audioValue, setAudioValue] = useState(50);
  const isMuteAll = useSelector((state) => state.muteall);

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.audioEl.current.pause();
    } else {
      audioRef.current.audioEl.current.play();
    }
    setIsPlay(!isPlay);
  };

  const handleBack = () => {
    if (audioIndex === 0) {
      setAudioIndex(DataAudio.length - 1);
      return;
    }
    setAudioIndex(Math.abs((audioIndex - 1) % DataAudio.length));
    setIsPlay(true);
  };

  const handleForward = () => {
    setAudioIndex((audioIndex + 1) % DataAudio.length);
    setIsPlay(true);
  };

  useEffect(() => {
    if (audioRef.current)
      audioRef.current.audioEl.current.volume = audioValue / 100;
    if (isMuteAll && audioRef.current)
      audioRef.current.audioEl.current.volume = 0;
  }, [audioValue, isMuteAll]);

  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl((pre) => !pre);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const id = anchorEl ? "simple-popover" : undefined;

  const handleSlider = (event, newValue) => {
    setAudioValue(newValue);
  };
  return (
    <>
      <div className="backward-icon" onClick={handleBack}>
        <FontAwesomeIcon icon={faBackward} />
      </div>
      <div className="pause-icon d-flex" onClick={handlePausePlayClick}>
        {isPlay ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </div>
      <div className="forward-icon" onClick={handleForward}>
        <FontAwesomeIcon icon={faForward} />
      </div>
      <div className="d-flex" onClick={handleClick}>
        <FontAwesomeIcon icon={faVolumeDown} />
      </div>
      <Popover
        id={id}
        open={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 89, left: 1159 }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <div className="audio-volume-wrapper">
          <Box sx={{ width: 130 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <Slider
                  value={isMuteAll ? 0 : audioValue}
                  aria-labelledby="input-slider"
                  onChange={handleSlider}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </Popover>
      <ReactAudioPlayer
        ref={audioRef}
        src={DataAudio[audioIndex].path}
        autoPlay
        onEnded={() =>
          setAudioIndex(Math.floor(Math.random() * DataAudio.length))
        }
        volume={audioValue / 100}
        muted={isMuteAll ? true : false}
      />
    </>
  );
};

export default AudioControl;
