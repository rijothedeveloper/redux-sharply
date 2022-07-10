import React from "react";
import { useSelector } from "react-redux";

export const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const products = [];
  for (const product in cart.products) {
    products.push(
      <li>
        {cart.products[product].payload.name} {"  "}
        {cart.products[product].quantity}
      </li>
    );
  }
  return (
    <div className="shoppingCart">
      <ul>
        {/* {cart.products.map((product) => (
          <li>{product.name}</li>
        ))} */}
        {products}
      </ul>
      <p>total is: {cart.total}</p>
    </div>
  );
};
