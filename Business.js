import React from "react";
import "../../assets/styles/mobile/Business.css";
import Validation from "./Validation";
import { useState } from "react";
function Business() {
  const [businessdata, setBusinessdata] = useState({
    Name: "",
    SalonName: "",
    number: "",
    email: "",
    ask: "",
  });
  const [count, setCount] = useState(0);

  function changhandler(event) {
    const { name, value } = event.target;
    setBusinessdata((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }
  function submithandler(event) {
    event.preventDefault();
    console.log(businessdata);
    setCount(count + 1);
  }

  return (
    <>
      {count != 0 ? (
        <Validation
          email={businessdata.email}
          contactNumber={businessdata.number}
          count={count}
        />
      ) : (
        <div></div>
      )}
      <div className="wrapper">
        <div className="top-level">
          <div className="heading-section ">
            <div className="heading"> Makemenext Business </div>
            <div className="para">
              {" "}
              Just one step away from making a revolutionary change in the way
              you operatre your salon
            </div>
          </div>

          <form className="form-top" onSubmit={submithandler}>
            <div className="inner-form">
              <div className="input-label">
                <div className="dot"></div>
                <label className="label"> Enter Your Name </label>
              </div>
              <div className="input-feild">
                <input
                  className="input-area"
                  type="text"
                  name="Name"
                  required
                  onChange={changhandler}
                  value={businessdata.Name}
                />
              </div>

              <div className="input-label">
                <div className="dot"></div>
                <label className="label"> Enter Your Salon Name </label>
              </div>
              <div className="input-feild">
                <input
                  className="input-area"
                  type="text"
                  name="SalonName"
                  required
                  onChange={changhandler}
                  value={businessdata.SalonName}
                />
              </div>

              <div className="input-label">
                <div className="dot"></div>
                <label className="label"> Enter Your Contact Number </label>
              </div>
              <div className="input-feild">
                <input
                  className="input-area"
                  type="text"
                  name="number"
                  onChange={changhandler}
                  required
                  value={businessdata.number}
                />
              </div>

              <div className="input-label">
                <div className="dot"></div>
                <label className="label"> Enter Your Email Adress</label>
              </div>
              <div className="input-feild">
                <input
                  className="input-area"
                  type="email"
                  name="email"
                  onChange={changhandler}
                  required
                  value={businessdata.email}
                />
              </div>

              <div className="input-label">
                <div className="dot"></div>
                <label className="label">Ask </label>
              </div>
              <div className="text-feild">
                <textarea
                  className="txt-area"
                  name="ask"
                  onChange={changhandler}
                  required
                  value={businessdata.ask}
                />
              </div>

              <div className="btn-div">
                <button className="submit-btn">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Business;
