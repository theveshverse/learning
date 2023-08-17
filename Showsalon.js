import React from "react";
import "../../assets/styles/mobile/Showsalon.css";
import { GoLocation } from "react-icons/go";
import { salonData } from "../../data/salonData.js";
import { Link } from "react-router-dom";
function Showsalon() {
  return (
    <>
      {salonData.api_salonData.map((data, i) => (
        <Link className="wrapper" to={"/services"} state={{ data: data.unique_name }}>
          <div className="main-div">
            <img className="salon-img" src={data.display_photo} alt="" />
            <div className="info-section">
              <div className="name">
                <div className="salon-name"> {data.salon_name}</div>
                <div className="salon-distance"> {data.distance}km away </div>
                <div className="icon">
                  <GoLocation />
                </div>
              </div>
              <div className="salon-type">{data.salon_type}</div>
              <div className="adress">{data.location_description}r</div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Showsalon;
