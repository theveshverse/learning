import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Curated from "./Curated";
import Curated2 from "./Curated";
import Curated3 from "./Curated";
export default function Offersslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  };

  
 return (
    <Slider {...settings}>
      <div>
        <h3><Curated  /></h3>
      </div>
      <div>
        <h3><Curated2/></h3>
      </div>
      <div>
        <h3><Curated3/></h3>
      </div>
     

      
     </Slider>
  );
}