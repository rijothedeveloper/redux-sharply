import { FC } from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/shoppingCartSlice.ts";
import React from "react";

interface ProductType {
  name: String;
}

interface Props {
  product: ProductType;
}

export const Product: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(product));
  };
  const removeFromCart = () => {
    dispatch(remove(product));
  };
  return (
    <div className="product">
      <p>{product.name}</p>
      <button onClick={() => addToCart()}>Add to Cart</button>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
  );
};
