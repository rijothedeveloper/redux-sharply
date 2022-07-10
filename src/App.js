import logo from "./logo.svg";
import "./App.css";
import { Products } from "./pages/Products";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <ShoppingCart />
      <Products />
    </div>
  );
}

export default App;
