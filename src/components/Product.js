import { useDispatch } from "react-redux";
import { add, remove } from "../redux/shoppingCartSlice";

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(product));
  };
  const removeFromCart = () => {};
  return (
    <div>
      <p>{product.name}</p>
      <button onClick={() => addToCart()}>Add to Cart</button>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
  );
};
