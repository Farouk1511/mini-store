import React, { useState } from "react";

import Product from "./Product";
import "../styles/productlist.css";

import { useNavigate  } from "react-router-dom";

function ProductList(props) {
  const [products,setProducts] = useState(props.data)
  // const onClick = (id) => {
  //   console.log('Working')
  //   products.forEach((product) => {
  //     if (product.id === id) {
  //       console.log("Found", id)
  //       return (
  //         <ItemPage
  //           name={product.name}
  //           imgSrc={`https://robohash.org/${product.id}?set=set4&size=180x180`}
  //           id = {product.id}
  //         />
  //       );
  //     }
  //   });
  // };
  const navigate = useNavigate();
  const onClick = (id) => {
    navigate(`/item/${id}`);
  }

  return (
    <div className="product-list">
      <h2>Latest Products</h2>

      <div className="product-list-box">
        {products.map((product) => (
          <Product
            name={product.name}
            price={product.price}
            imgSrc={`https://robohash.org/${product.id}?set=set4&size=180x180`}
            key={product.id}
            handleClick={onClick}
            id = {product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
