import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../components/scss/locomotive-scroll.scss";

const useLocoScroll = (start) => {
  useEffect(() => {
    if (!start) return;
    const el = document.querySelector("#home");
    const scroll = new LocomotiveScroll({
      el: el,
      smooth: true,
      multiplier: 1,
      lerp: 0.08,
      class: "is-reveal",
    });
  }, [start]);
};

export default useLocoScroll;
