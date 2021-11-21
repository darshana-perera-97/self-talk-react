import React from "react";
import 'animate.css';


export default function Msj(prop) {
  return (
    <div>
      <p
        className="animate__animated animate__lightSpeedInRight"
        style={{
          margin: "0px",
          padding: "5px",
          color: prop.val.txtClr,
          fontSize: prop.size,
          fontWeight: "bold",
          fontFamily: "Indie Flower",
        }}
      >
        {prop.text}
      </p>
    </div>
  );
}
