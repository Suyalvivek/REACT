import { Button } from "../components/Button"
import { Message } from "../components/Message"
import { useState } from "react";

export const ColorChange = () => {
  const [colorCode, setColorCode] = useState("#FFFFFF");

  const doColorChange = () => {
    setColorCode(getRandomColorCode());
  }

  const getRandomColorCode = () => {
    const hexCode = "0123456789ABCDEF";
    let colorHexCode = "#";
    for (let i = 1; i <= 6; i++) {
      const random = parseInt(Math.random() * 16);
      colorHexCode += hexCode[random];
    }
    return colorHexCode;
  }

  return (
    <div className="color-app-container">
      <h1 style={{ color: "#fda085", marginBottom: "1.5rem" }}>🎨 Color Changer</h1>
      <div
        className="color-display"
        style={{ background: colorCode, color: "#333", borderColor: colorCode }}
      >
        {colorCode}
      </div>
      <Button fn={doColorChange} />
    </div>
  )
}