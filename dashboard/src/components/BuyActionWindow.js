import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [message, setMessage] = useState("");

  // Use context value
  const { closeBuyWindow } = useContext(GeneralContext);

  // Handle Buy button click
  const handleBuyClick = async () => {
    if (!uid || stockQuantity <= 0 || stockPrice <= 0) {
      setMessage("Please enter valid values for all fields!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });

      setMessage(res.data); // "Order saved!"
      setStockQuantity(1);  // reset fields
      setStockPrice(0.0);

      closeBuyWindow(); // close window
    } catch (err) {
      console.error(err);
      setMessage("Failed to place order!");
    }
  };

  // Handle Cancel button click
  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0.01"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      {message && <p className="text-red-600 mt-2">{message}</p>}

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div className="button-group">
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
