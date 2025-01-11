import React, { useState, useEffect } from "react";
import data from "./data.json";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data.items);
  }, []);

  const handleImageError = (e) => {
    e.target.src = "./assets/pic-fault.svg";
  };

  return (
    <div data-testid="canvas" className="canvas">
      {items.map((item, index) => (
        <div key={index} className="item">
          <img
            src={item.prodImg._1x}
            alt={item.title}
            onError={handleImageError}
            className="responsive-image"
          />
          <h2 className="item-title">{item.title}</h2>
          <p className="item-price">{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
