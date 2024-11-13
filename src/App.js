import React, { useState } from "react";
import "./App.css";

const options = [
  {
    id: 1,
    units: "1 Unit",
    discount: "10% Off",
    price: 10,
    originalPrice: 24,
  },
  {
    id: 2,
    units: "2 Unit",
    discount: "20% Off",
    price: 18,
    originalPrice: 24,
    selectors: [
      { label: "Size", options: ["S", "M", "L", "XL"] },
      { label: "Color", options: ["Black", "White", "Red", "Blue"] },
    ],
  },
  {
    id: 3,
    units: "3 Unit",
    discount: "30% Off",
    price: 24,
    originalPrice: 24,
  },
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [total, setTotal] = useState(0);

  const selectOption = (option) => {
    setSelectedOption(option);
    setTotal(option.price);
  };

  return (
    <div className="container">
      <h2>YAY! It’s BOGO</h2>
      {options.map((option) => (
        <div
          key={option.id}
          className={`option ${selectedOption === option ? "selected" : ""}`}
          onClick={() => selectOption(option)}
        >
          <input
            type="radio"
            name="units"
            checked={selectedOption === option}
            onChange={() => selectOption(option)}
          />
          <span className="unit-text">{option.units}</span>
          <span className="discount">{option.discount}</span>
          <span className="price">${option.price}.00 USD</span>
          {option.originalPrice && (
            <span className="original-price">${option.originalPrice}.00 USD</span>
          )}
          {selectedOption === option && option.selectors && (
            <div className="selectors">
              {option.selectors.map((selector, index) => (
                <label key={index}>
                  {selector.label}:
                  <select>
                    {selector.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="footer">
        <p>Free Delivery</p>
        <p>Total: ${total}.00 USD</p>
        <button
          className="add-to-cart-btn"
          onClick={() =>
            alert(`Added ${selectedOption ? selectedOption.units : "nothing"} to cart!`)
          }
        >
          + Add to Cart
        </button>
      </div>
    </div>
  );
};

export default App;
