import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import Main from "./components/Main";
import ItemPage from "./components/ItemPage";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Main total={cart.length} />} />
          <Route path="/item/:id" element={<ItemPage />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
