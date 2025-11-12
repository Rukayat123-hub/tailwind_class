import React from "react";
import "./colorpalette.css";

const colors = [
  { name: "Green", hex: "#008751" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Naija Green 50", hex: "#E6F8F1" },
  { name: "Naija Green 100", hex: "#BFF0DE" },
  { name: "Naija Green 200", hex: "#99E7CC" },
  { name: "Naija Green 300", hex: "#66DDB5" },
  { name: "Naija Green 400", hex: "#33D39E" },
  { name: "Naija Green 500", hex: "#00C985" },
  { name: "Naija Green 600", hex: "#00B46B" },
  { name: "Naija Green 700", hex: "#009F51" },
  { name: "Naija Green 800", hex: "#008A37" },
  { name: "Naija Green 900", hex: "#006F1F" },
  { name: "Naija Green 950", hex: "#004D12" },
];

const ColorPalette = () => {
  // Automatically decide text color for contrast
  const getTextColor = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 160 ? "text-dark" : "text-light";
  };

  return (
    <div className="color-palette-container">
      <h1>Nigerian Color Palette</h1>
      <div className="color-palette-grid">
        {colors.map((color) => (
          <div
            key={color.name}
            className="color-swatch"
            style={{ backgroundColor: color.hex }}
          >
            <p className={`color-name ${getTextColor(color.hex)}`}>
              {color.name}
            </p>
            <p className={`color-hex ${getTextColor(color.hex)}`}>
              {color.hex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
