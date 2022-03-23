import React from "react";
import ProductList from "./ProductList";
import Jumbotron from "./Jumbotron";

function Main(props) {
  return (
    <div>
      <Jumbotron total={props.total} />
      <ProductList />
    </div>
  );
}

export default Main;
