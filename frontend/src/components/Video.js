import React from "react";
import "./scss/_video.scss";
import video from "./video/Walking Girl.mp4";
const Video = () => {
  return (
    <section className="hero" data-scroll-section>
      <div className="main-text">Trendy</div>
      <video src={video} className="video" type="video/mp4" autoPlay loop />
    </section>
  );
};

export default Video;
