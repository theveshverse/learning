import React from "react";
import "../../assets/styles/mobile/Price.css";
import Counter from "./Counter";
import "../../assets/styles/mobile/Counter.css";

function Price(props) {
  return (
    <>
    <div className="root">
      <div className="parent_price">
        <div className="child1">
          <div className="haircut">{props.service_name}</div>
          <div className="rs">₹{props.service_amount}</div>
        </div>
        <div className="child2">
          <Counter data={props.service_name} list={props.list} cart={true}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Price;
