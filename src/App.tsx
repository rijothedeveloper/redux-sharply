import "./App.css";
import { Products } from "./pages/Products.tsx";
import { ShoppingCart } from "./components/ShoppingCart.tsx";
import React, { FC } from "react";

function App() {
  return (
    <div className="App">
      <ShoppingCart />
      <Products />
    </div>
  );
}

export default App;
