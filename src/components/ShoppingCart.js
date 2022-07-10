import React from "react";
import { useSelector } from "react-redux";

export const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <ul>
        {cart.products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
      <p>total is: {cart.total}</p>
    </>
  );
};
