import React from "react";
import CoolButton from "./CoolButton";

export default function App() {
  const cool = true;
  return (
    <div className="App">
      <CoolButton cool={cool} />
    </div>
  );
}
