import { useState } from "react";
import { occasions } from "../../library/occasions.js";
import "./ActionGrid.css";

export default function ActionGrid({ onOccasionSelect }) {
  const [selectedButton, setSelectedButton] = useState(null);

  // Función clic en un botón
  const handleButtonClick = (id) => {
    setSelectedButton(id);
    const selected = occasions.find((occasion) => occasion.id === id);
    const ids = selected
      ? selected.value.split(",").map((value) => value.trim())
      : [];
    onOccasionSelect(ids); // Passes the selected IDs to the parent component
  };

  return (
    <div className="action-grid">
      <h1 className="grid-title">Choose you Occasion</h1>

      <div className="button-grid">
        {occasions.map((occasion) => (
          <button
            key={occasion.id}
            onClick={() => handleButtonClick(occasion.id)}
            className={`occasion-button ${
              selectedButton === occasion.id ? "active" : ""
            }`}>
            {occasion.id}
          </button>
        ))}
      </div>
    </div>
  );
}
