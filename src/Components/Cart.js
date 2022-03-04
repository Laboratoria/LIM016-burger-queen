import React, { useState } from "react";
import { useCart } from "../Components/Context/CartContext";
import ProductAddedCart from "./ProductAddedCart";
import Title from "./Title";

import ActionButton from "../Components/ActionButton";

import "../Assets/Cart.css";
const Cart = () => {
  const [clientName, setClientName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const { cart } = useCart();
  console.log(cart);

  const handleOrder = () => {};
  return (
    <>
      <div className="cart-content">
        <Title title="Order" quantity={cart.length} />
        <div className="client-info--content">
          <input
            type="text"
            id="client"
            className="client--input"
            placeholder="Client Name"
            onChange={(ev) => setClientName(ev.target.value)}
          ></input>
          <select
            className="table--input"
            placeholder="Nº Table"
            name="Nº Table"
            id="table"
          >
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
          </select>
        </div>
        <div>
          {cart.map((cartProduct) => (
            <ProductAddedCart
              cartProduct={cartProduct}
              key={cartProduct.idChanges}
            />
          ))}
        </div>
        <div className="footer-content">
          <div className="price-content">
            <h3>Total Cost</h3>
            <h3 className="price-total-cost">
              $
              {/* {cart.map((elem) => {
              return (elem.cost += elem.cost);
            })} */}
            </h3>
          </div>
          <div className="large-button--content" onClick={handleOrder}>
            <ActionButton title="Send to Chef" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
