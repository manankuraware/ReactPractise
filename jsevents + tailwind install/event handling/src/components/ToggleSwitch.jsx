import React, { useState } from "react";
import "../toggleSwitch.css";

function ToggleSwitch() {
  const [isOn, setIsON] = useState(false);

  const handleToggleSwitch = () => {
    setIsON(!isOn);
  };
  return (
    <div
      className="toggle-switch"
      onClick={handleToggleSwitch}
      style={{ backgroundColor: isOn ? "#4caf50" : "" }}
    >
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span className="switch-state">{isOn ? "on" : "off"}</span>
      </div>
    </div>
  );
}

export default ToggleSwitch;
