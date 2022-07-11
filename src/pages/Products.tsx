import React from "react";
import { FC } from "react";
import data from "../assets/data.json";
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { Product } from "../components/Product.tsx";

interface iProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

export const Products: FC = () => {
  const products: iProduct[] = data.products;
  return (
    <div className="products">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};
