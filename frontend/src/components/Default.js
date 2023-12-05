import React, { useRef, useEffect } from "react";
import Magnifier from "./Magnifier";
import Event from "./Event";
import "./magnifier.css";

// Initialize Event and Magnifier instances outside the component
const evt = new Event();
const m = new Magnifier(evt);

const Default = () => {
  const thumb = useRef(null);

  useEffect(() => {
    // Ensure thumb.current is not null before attaching the magnifier
    if (thumb.current) {
      m.attach({
        thumb: `#${thumb.current.id}`, // Use the id attribute as the selector
        large:
          "http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/400px-Starry_Night_Over_the_Rhone.jpg",
        largeWrapper: "preview",
      });
    }
  }, []);

  return (
    <div className="m-5 p-5" style={{ width: "410px" }}>
      <a
        className="magnifier-thumb-wrapper demo"
        href="http://en.wikipedia.org/wiki/File:Starry_Night_Over_the_Rhone.jpg"
      >
        <img
          id="thumb"
          ref={thumb}
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/200px-Starry_Night_Over_the_Rhone.jpg"
          data-large-img-url="http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/400px-Starry_Night_Over_the_Rhone.jpg"
          data-large-img-wrapper="preview"
        />
      </a>
      <div className="magnifier-preview example heading" id="preview" style={{ width: "200px", height: "133px" }}>
        Starry Night Over The Rhone<br />
        by Vincent van Gogh
      </div>
    </div>
  );
};

export default Default;
