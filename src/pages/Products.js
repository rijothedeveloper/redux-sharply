import data from "../assets/data.json";
import { Product } from "../components/Product";

export const Products = () => {
  const productObj = data.products;
  const products = [];
  for (const item in productObj) {
    products.push(productObj[item]);
  }
  return (
    <>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </>
  );
};
