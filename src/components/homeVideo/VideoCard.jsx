import React from "react";
import ReactPlayer from "react-player";
import v2 from "../../assets/v2.mp4";
import "./videoCard.css";

function VideoCard() {
  return (
    <div className="video">
      <video
        src={v2}
        controls
        style={{ borderRadius: "24px", width: "700px" }}
      ></video>
    </div>
  );
}

export default VideoCard;
