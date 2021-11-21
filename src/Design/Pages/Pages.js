import React from "react";
import Hi from "./Open/Hi";

export default function Pages(prop) {
  const [state, setstate] = React.useState(1);

  return (
    <div>
      <Hi val={prop.val}/>
    </div>
  );
}
