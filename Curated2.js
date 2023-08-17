import React from 'react'
import "../../assets/styles/mobile/Curated.css";
import Curatedimg from "../../assets/styles/mobile/Curatedimg.png";

function Curated2() {
  return (
    <div className='parent-curated'>
    <div className='wrap' >
         <div className='left' >
                  <div className="headd">
                  20% Off on Bookings above 249/-
                  </div>

                  <button className='book-button'>
                       Book Now
                  </button>
                  
                  <div className='decript'>
                  Find this offer at your nearest salon or beauty parlour 
                  </div>
         </div>

         <div className="right">
         <img className="barber-img" src={Curatedimg} alt="Curatedimg.png" />
         </div>
</div>
</div>
    
      
    
  )
}

export default Curated2
