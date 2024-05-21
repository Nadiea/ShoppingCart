import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Viewproduct from "./components/Viewproduct";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Viewproduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
