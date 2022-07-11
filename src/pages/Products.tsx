import React from "react";
import { FC } from "react";
import data from "../assets/data.json";
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { Product } from "../components/Product.tsx";

export const Products: FC = () => {
  const productObj = data.products;
  const products = [];
  for (const item in productObj) {
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    products.push({ ...productObj[item], id: item });
  }
  return (
    <div className="products">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};
