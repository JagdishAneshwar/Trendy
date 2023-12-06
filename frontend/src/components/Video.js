import React, { useEffect, useState } from "react";
import "./scss/_video.scss";
import walkingGirlVideo from "./video/Walking Girl.mp4";
import mobileVideo from "./video/Mobile.mp4";

const Video = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="hero" data-scroll-section>
      {/* <div className="main-text">Trendy</div> */}
      <video
  src={isMobile ? mobileVideo : walkingGirlVideo}
  className="video"
  type="video/mp4"
  autoPlay
  loop
  muted  // Add this line
/>


    </section>
  );
};

export default Video;
