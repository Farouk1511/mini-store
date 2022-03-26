import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "./Cart";
import "./../styles/itempage.css"

function ItemPage(props) {
  const paramID = useParams().id;
  const [products, setProducts] = useState(props.data);
  const [id, setId] = useState(+paramID);
  const [quantity, setQuantity] = useState(0);
  const [pageProp, setpageProp] = useState({});

  useEffect(() => {
    // console.log("Hello");
    products.forEach((prod) => {
      if (prod.id === id) {
        
        setpageProp({
          pid:prod.id,
          name: prod.name,
          imgSrc: `https://robohash.org/${prod.id}?set=set4&size=500x500`,
          price:prod.price,
          description:
            "Afield Out adds its signature outdoor-focused flair to this black sweat. Crafted from cotton, it’s cut to an oversized fit for a laid-back look and feel, then printed with ‘Alpine Research' branding at the chest.",
        });
      }
    });
  },[id]);

  const increaseQuantity = () => {
    if (quantity <= 19) {
      setQuantity(quantity + 1);
    }
  };
  const decreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotal = (id,price,quantity) => {
    
    let total = +price * +quantity
    props.handleClick(id,total,quantity)
  }

  const { pid,name, imgSrc, description,price } = pageProp;

  return (
    <div className="itempage">
      <Cart total={props.total} isHomepage={true} />

      <div className="main">
        <img alt={name} src={imgSrc} />
        <div >
          <div className="utility" >
            <h1>{name}</h1>
            <span className="price">CA ${price}</span>
            <div> 
            <span>Quantity:</span>
            <button onClick={decreaseQuantity}>-</button>
            <span className="quantity">{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
            </div>
           
            <button className="atc" onClick={() => calculateTotal(pid,price,quantity)}>Add To Cart</button>
          </div>
        
        </div>
      </div>

      <div className="description">
        <span>{name}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ItemPage;
