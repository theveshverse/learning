import React, { useRef, useState } from "react";
import "../../assets/styles/mobile/Signup.css";
import "../../assets/styles/mobile/global.css";
import { FcGoogle } from "react-icons/fc";
// import { FcGoogle } from "react-icons/fc";
import Validation from "./Validation";
// let

function Signup() {
  const [isfirstRender, setIsfirstRender] = useState(true);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [count, setCount] = useState(0);

  function validation() {
    alert("clicked");
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
        <img
          className="barber-img"
          src="https://imgs.search.brave.com/Bd-v6phDCm1VzMf18bKW6HFI9x0hBowgXT0ufjHo230/rs:fit:485:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/SGRqZldjN2xSR25r/M096bGRaVlBBSGFI/UCZwaWQ9QXBp"
          alt="Barber"
        />
        <div className="signup-acc">Create Account </div>
      </div>

      <div className="input-div">
        <div className="input-btn">
          <div className="react-icon"> &gt;</div>

          <input
            className="input-text"
            type="email"
            ref={emailRef}
            placeholder="Enter your email or phone number"
          />
        </div>
        <div className="input-btn">
          <div className="react-icon">&gt;</div>
          <input
            className="input-text"
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <div className="input-btn">
          <div className="react-icon">&gt;</div>
          <input
            className="input-text"
            type="password"
            ref={passwordRef}
            placeholder="Confirm your Password"
          />
        </div>

        <div className="signup-btn">
          <button className="btn-design" onClick={validation}>
            Signup
          </button>
        </div>
        <div className="signup-container-login-link">
          Already hava an account?{" "}
          <a href="https://example.com/faq.html"> Login </a>
        </div>

        <div className="signup-btn-gg">
          <div className="react-google">
            <FcGoogle />
          </div>
          <button className="btn-design">Signup with Google</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
