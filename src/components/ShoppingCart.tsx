import React, { FC } from "react";
import { useAppSelector } from "../redux/hooks.ts";

export const ShoppingCart: FC = () => {
  const cart = useAppSelector((state) => state.cart);
  const products: any[] = [];
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
