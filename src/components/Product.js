import React from "react";
import "../styles/product.css"


function Product(props) {
  const { name, imgSrc, price,id,handleClick} = props;

  return (
    <div className="product-box" onClick={() => handleClick(id)}>
      <img alt={name} src={imgSrc} />
      <div className="info">
      <span>{name}</span>
      <span className="price">CA ${price}</span>
      </div>
      
    </div>
  );
}

export default Product;
