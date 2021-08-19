import React, { useState } from "react";
import  './style.css';
import { animated, useSpring } from "react-spring";
const img =
 "https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const Animation1 = () => {
 const [click, setClick] = useState(false);
 const { size, counter, progress, counterFontColor, ...springProps } =
  useSpring({
   size: click ? 300 : 200,
   counter: click ? 100 : 0,
   progress: click ? "100%" : "0%",
   counterFontColor: click ? "#fff" : "#000",
   from: {
    size: 200,
    counter: 0,
    progress: "0",
    counterFontColor: "#000",
   },
  });
 return (
  <div className="container">
   <h3 className="heading1 text-center py-2">
    React Spring | Use-Spring Hook |Animation 1{" "}
   </h3>
   <p className="heading3 text-center">
    Click on the box to trigger animation.
   </p>
   <div className="a1_progressBar">
    <animated.div
     className="a1_progressBarAnimated"
     style={{ width: progress, color: counterFontColor }}
    ></animated.div>
    <animated.div
     className="a1_progressCounter"
     style={{ color: counterFontColor }}
    >
     {counter.interpolate((val) => Math.floor(val) + "%")}
    </animated.div>
   </div>
   <div className="a1_imageContainer mx-auto">
    <animated.div
     onClick={() => setClick(!click)}
     className="a1_imageBox"
     style={{ height: size, width: size }}
    ></animated.div>
   </div>
   <div>{100}</div>
  </div>
 );
};

export default Animation1;
