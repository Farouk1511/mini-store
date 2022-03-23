import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../products.json";

function ItemPage() {

    const paramID = useParams().id
  const [id, setId] = useState(+paramID)
  const [quantity, setQuantity] = useState(0);
  const [props, setProps] = useState({});

 
  useEffect(() => { 

    

      console.log("Hello")
    products.forEach((prod) => {
      if (prod.id === id) {
          console.log(prod.id)
        setProps({
          name: prod.name,
          imgSrc: `https://robohash.org/${prod.id}?set=set4&size=180x180`,
          description:
            "Afield Out adds its signature outdoor-focused flair to this black sweat. Crafted from cotton, it’s cut to an oversized fit for a laid-back look and feel, then printed with ‘Alpine Research' branding at the chest.",
        });
      }
    });
  }, [id]);

  const increaseQuantity = () => {
    if (quantity <= 20) {
      setQuantity(quantity + 1);
    }
  };
  const decreaseQuantity = () => {
    if (quantity >= 0) {
      setQuantity(quantity - 1);
    }
  };

  const { name, imgSrc, description } = props;

  return (
    <div>
      <div className="main">
        <img alt={props.name} src={imgSrc} />
        <div>
          <button>Add To Cart</button>
          <div>
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>
      </div>

      <div className="descricption">
        <span>{name}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ItemPage;
