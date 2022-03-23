import React from "react";
import "../styles/jumbotron.css"
function Jumbotron(props){

    return(
        <div className="jumbotron"> 
            <div className="title">
            <h1>Welcome to Freaky Catz</h1>
            <h2>Shop for your favourite Freaky Ctaz</h2>
            </div>
           

            <div className="carts">
                <button>
                    Cart
                    <span>{props.total}</span>
                </button>
            </div>
        </div>

    )

}

export default Jumbotron