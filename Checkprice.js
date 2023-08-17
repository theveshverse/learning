import React from 'react'
import "../../assets/styles/mobile/Checkprice.css";


function Checkprice(props) {
  return (
    <div className='root'>
       
    <div className='parent'>
        <div className='child1'>
            
            <div className='haircut'>
            {props.service_name}
            </div>
            <div className='rs'>
            ₹{props.service_amount}
            </div>
        

        </div>
        <div className='child2'>
            1

        </div>

      
    </div>
    </div>
  )
}

export default Checkprice
