import React from "react";
import ProductList from "./ProductList";
import Jumbotron from "./Jumbotron";

function Main(props) {



  


  return (
    <div>
      <Jumbotron total={props.total} />
      <ProductList data={props.data} />
    </div>
  );
}

export default Main;
