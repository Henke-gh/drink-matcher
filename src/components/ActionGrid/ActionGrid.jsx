
import { useState } from "react";
import { occasions } from "../../library/occasions.js";
import "./ActionGrid.css";  


export default function ActionGrid() {
  const [selectedButton, setSelectedButton] = useState(null);

  // Función clic en un botón
  const handleButtonClick = (id) => {
    setSelectedButton(id);
    console.log(`Ocasión ${id} seleccionada`);
  };

  // Obtener los valores de la ocasión seleccionada
  const getSelectedValues = () => {
    if (!selectedButton) return [];
    const selected = occasions.find(occasion => occasion.id === selectedButton);
    return selected ? selected.value.split(',').map(value => value.trim()) : [];
  };

  return (
    <div className="action-grid">
      <h1 className="grid-title">Choose you Occasion</h1>
      
      <div className="button-grid">
        {occasions.map((occasion) => (
          <button
            key={occasion.id}
            onClick={() => handleButtonClick(occasion.id)}
            className={`occasion-button ${selectedButton === occasion.id ? 'active' : ''}`}
          >
            {occasion.id}
          </button>
        ))}
      </div>
      
      {selectedButton && (
        <div className="values-container">
          <h2 className="values-title">
            Valores para {selectedButton}:
          </h2>
          <ul className="values-grid">
            {getSelectedValues().map((value, index) => (
              <li key={index} className="value-item">
                ID: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
