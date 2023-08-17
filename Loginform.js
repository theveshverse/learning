import React, { useRef, useState } from "react";
import Validation from "./Validation";
import "../../assets/styles/mobile/Login.css";
import "../../assets/styles/mobile/global.css";
import headimage from "../../assets/images/login.jpeg";

function Loginform() {
  const [isfirstRender, setIsfirstRender] = useState(true);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [count, setCount] = useState(0);

  function validation() {
    setCount(count + 1);
  }

  return (
    <div className="wrapper">
      {count}
      {count != 0 ? (
        <Validation
          email={emailRef.current.value}
          password={passwordRef.current.value}
          count={count}
        />
      ) : (
        <div></div>
      )}
      <div className="top-div">
        <img className="barber-img" src={headimage} alt="Barber" />
        <div className="login-acc">Login Account </div>
      </div>

      <div className="input-div">
        <div className="input-btn">
          <div className="react-icon"> &gt;</div>

          <input
            className="input-text"
            ref={emailRef}
            type="email"
            placeholder="Enter your email or phone number"
          />
        </div>
        <div className="input-btn">
          <div className="react-icon">&gt;</div>

          <input
            className="input-text"
            ref={passwordRef}
            type="password"
            placeholder="Enter your Password"
          />
        </div>

        <div className="frgt-pass">
          {/* <label htmlFor=""> Remember me</label>
          <input className="check" type="checkbox" /> */}
          <a href="">Forgot Password?</a>
        </div>

        <div className="login-btn">
          <button className="btn-design" onClick={validation}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Loginform;
