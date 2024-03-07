import React, { useRef } from "react";
import "./Video.css";

import videoEdusity from "../../assets/videoEdusity.mp4";

const Video = ({ video, setVideo }) => {
  const handleClose = () => {
    setVideo(false);
  };
  return (
    <div className={`videoPlayer ${video ? "" : "hide"}`}>
      <video src={videoEdusity} autoPlay muted controls></video>
      <span onClick={handleClose}>&times;</span>
    </div>
  );
};

export default Video;
