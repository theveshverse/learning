import React from 'react'
import { IoIosArrowDown} from "react-icons/io";  
import { FiUser} from "react-icons/fi";  
import { TfiShoppingCart} from "react-icons/tfi";  
import "../../assets/styles/mobile/Locationnav.css";


function Locationnav() {
  return (
    <div className='top-nav' > 
          <div className="left-nav">
               <div className='loc' >Location</div>
               <IoIosArrowDown className='arrow' />
          </div>
          <div className="right-nav">
                 <FiUser className='user' />
                 <TfiShoppingCart className='cart' />
          </div>
    </div>
  )
}

 export default Locationnav
