import React from "react";
import ParticlesBg from "particles-bg";
import Pages from "./Pages/Pages";

export default function Design() {
  const dataSheet = {
    appName: "Chat Web",
    txtClr: "#0a3ca1",
    fntClr: "white",
    time: 100,
    aniTime: 500,
  };
  return (
    <div>
      <Pages val={dataSheet}/>
      <ParticlesBg color="#ff0000" num={4} type="color" bg={true} />
    </div>
  );
}
