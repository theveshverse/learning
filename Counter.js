import React from "react";
import { useState, useEffect } from "react";
import "../../assets/styles/mobile/Counter.css";
import { useLocation } from "react-router-dom";

function Counter(props) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/cart") {
      setCount(1);
    } else setCount(0);
  }, []);

  const [count, setCount] = useState(props.cart == true ? 1 : 0);

  function dechandler() {
    if (count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);

      props.list((data) => {
        const index = data.indexOf(props.data);
        const newArray = data.filter(function (element, i) {
          return i !== index;
        });

        return newArray;
      });
    }
  }

  function inchandler() {
    setCount(count + 1);
    props.list((data) => {
      return [...data, props.data];
    });
  }
  return (
    <div className="main-box">
      <button className="left-btn" onClick={dechandler}>
        -
      </button>
      <div>{count}</div>
      <button className="right-btn" onClick={inchandler}>
        +
      </button>
    </div>
  );
}

export default Counter;
