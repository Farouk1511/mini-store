import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import Main from "./components/Main";
import ItemPage from "./components/ItemPage";
import data from './products.json'
function App() {
  const [cart, setCart] = useState([]);
  const[total, setTotal] = useState(0)

  //Todo: find the id in the arry and update quantity to avoid duplicates

  const addToCart = (id,cTotal,quantity) => {

      const prodt = {}

      data.forEach((prod) =>{
        if(prod.id === id){
            prodt.name = prod.name
            prodt.price = prod.price
            prodt.id = prod.id
            prodt.quantity = quantity
            prodt.total = cTotal
        }
      } )

      setCart([...cart,prodt])
      setTotal(total + cTotal)

    }
   

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Main data={data} total={total} />} />
          <Route path="/item/:id" element={<ItemPage data={data} total = {total} handleClick={addToCart}/>} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
