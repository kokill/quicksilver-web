import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Entity, Scene } from "aframe-react";

export default function FindMeMySpot() {
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
              src={`/images/scenes/find-me-my-spot.png`}
            />
          </a-assets>
          <Entity primitive="a-sky" id="image-360" radius="100" src="#city" />
          <Entity primitive="a-camera" camera look-controls />
        </Scene>
      )}
    </>
  );
}
