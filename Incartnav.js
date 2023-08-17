import React from 'react'
import { BsScissors} from "react-icons/bs";  
import { FiUser} from "react-icons/fi";  
import { TfiShoppingCart} from "react-icons/tfi"; 
import { IoIosArrowDown} from "react-icons/io";
import "../../assets/styles/mobile/Incartnav.css";


function Incartnav() {
  return (
    <div className='top-nav' > 
          <div className="left-cart">
          <BsScissors className='scissor'/> 
               <div className='makeme' >Makemenext</div>
          </div>
          <div className="right-cart">
          <TfiShoppingCart className='cart' />
          <IoIosArrowDown className='down-arrow'/>
               
          </div>
    </div>
  )
}

 export default Incartnav
