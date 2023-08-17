import React from 'react'
import { BsScissors} from "react-icons/bs";  
import { FiUser} from "react-icons/fi";  

import { TfiShoppingCart} from "react-icons/tfi"; 

import "../../assets/styles/mobile/Tocartnav.css";


function Tocartnav() {
  return (
    <div className='top-nav' > 
          <div className="left-head">
          <BsScissors className='scissor'/> 
               <div className='makeme' >Makemenext</div>
          </div>
          <div className="right-head">
          <TfiShoppingCart className='cart' />
               
          </div>
    </div>
  )
}

 export default Tocartnav
