import React from "react";
import Msj from "../../Common/Msj";

export default function Hi(prop) {
    console.log(prop)
  return (
    <div>
      <Msj val={prop.val} text="Hi " size="300px" />
    </div>
  );
}
