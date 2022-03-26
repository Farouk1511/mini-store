import React from "react";
import "../styles/jumbotron.css";
import Cart from "./Cart";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <div className="title">
        <h1>Welcome to Freaky Catz</h1>
        <h2>Shop for your favourite Freaky Catz</h2>
      </div>

      <Cart total={props.total} isHomepage={false} />
    </div>
  );
}

export default Jumbotron;
