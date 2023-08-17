import React from 'react'
import { TbMathGreater } from 'react-icons/tb';
import "../../assets/styles/mobile/Location.css";

const Loaction = ()=> {
  return (
    <div className='parentlocate'>

    <div className='locateme'>
      <div className='reacticon'>
      <TbMathGreater className='myicon'/>
      </div  >
      <div className='textlocate'>
      <input type='text' placeholder='Enter your Location' /> 
      </div>
      
      <div className='locate button'>
      <button className='button1'>Locate me</button>
      </div>
      
    </div>

    <div className='findsalon'>
      <button className='button2'>  
       Find salon
      </button>
    </div>
    
    </div>
  );
}

export default Loaction;
