import React, { useState } from "react";
import Price from "./Price";
import Checkprice from "./Checkprice";
import "../../assets/styles/mobile/salondetail.css";
import headimage from "../../assets/images/login.jpeg";
import { salonData } from "../../data/salonData.js";
import { Link, useLocation } from "react-router-dom";


function Salondetail() {
  const [list, setList] = useState([]);
  const location = useLocation();
  const name = location.state?.data;


  return (
    <>
      <div className="imageparent" style={{ marginTop: "10px" }}>
        <div className="image1">
          <img
            className="img1"
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 "
            alt=""
          />
        </div>
        <div className="salon_name">Makemenext Unisex Salon</div>
      </div>
      {salonData.api_salonData.map((data, i) => (
        <div>
          {data.unique_name == name ? (
            data.salon_services.map((data, i) => (
              <>
              {/* {alert(data.service_name)} */}
              <Price
                service_name={data.service_name}
                service_amount={data.service_price}
                list={setList}
              />
              </>
            ))
          ) : (
            // empty list element
            <div></div>
          )}
        </div>
      ))}
      <Link to="/cart" state={{data:list, name:name}}><h1>Move to cart</h1></Link>
    </>
  );
}

export default Salondetail;
