import React from "react";
import data from "../assets/data.json";

import { useParams } from "react-router-dom";
// import { Products } from "./Products";

interface Product {
  name: String;
  price: Number;
  description: String;
  image_url: String;
}

interface Products {
  products: Product;
}

const ProductDetail = () => {
  let params = useParams();
  const id: string | undefined = params.id;
  const productObj = data.products;
  return (
    <div className="productDetails">
      <p>name: {productObj[id!].name}</p>
      <p>price: {productObj[id!].price}</p>
      <p>description</p>
      <p>{productObj[id!].description}</p>
      <img src={productObj[id!].image_url} />
    </div>
  );
};

export default ProductDetail;
