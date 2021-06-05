import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Entity, Scene } from "aframe-react";

export default function BallPicking() {
  const [appRendered, setAppRendered] = useState(false);
  useEffect(() => {
    if (typeof window != "undefined") {
      require("aframe");
      setAppRendered(true);
    }
  }, []);

  return (
    <>
      {appRendered && (
        <Scene>
          <a-assets>
            <img
              id="city"
              crossorigin="anonymous"
              src={`/images/scenes/ball-picking.png`}
            />
          </a-assets>
          <Entity primitive="a-sky" id="image-360" radius="100" src="#city" />
          <Entity primitive="a-camera" camera look-controls />
        </Scene>
      )}
    </>
  );
}
