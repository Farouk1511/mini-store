import React from "react";
import { useNavigate  } from "react-router-dom";
import "./../styles/cart.css";

function Cart(props) {
  const { total, isHomepage } = props;

  const navigate = useNavigate();
  const onClick = (id) => {
    navigate(`/`);
  };

  return (
    <div className="cart">
      <div className="home" onClick={onClick}>
        {isHomepage ? <ion-icon name="home-outline"></ion-icon> : <div></div>}
      </div>

      <div className="carts">
        <button>
        <ion-icon name="cart-outline"></ion-icon>
          <span>CA ${total}</span>
        </button>
      </div>
    </div>
  );
}

export default Cart;
