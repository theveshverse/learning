import React from 'react'
import { IoIosArrowDown} from "react-icons/io";  
import "../../assets/styles/mobile/Payment.css";

function Payment() {
  return (
    <div className='parent-payment' > 
          <div className="payment-heading">
          <IoIosArrowDown className='arrow'   />
               <div className='payment' >Payment Options</div>
               
          </div>
          <div className='head-rec' >
            <div className='pay-for'>
          Pay for your booking at Kanshu Unisex Salon
          </div>
          <div className='recommended-heading'>
          <img
          className="recommended-img"
          // src="https://drive.google.com/file/d/1NWjrv0cMooHi_XXVHa7I3A7QgbqW4ruk/view?usp=share_link"
          // alt="recommended-img"
        />
          <div className='recommended'>
          
            Recommended
          </div>
          </div>

          </div>
          <div className='recommended-box'></div>
          <div className='upi-heading'>
          <img
          className="recommended-img"
          // src="https://drive.google.com/file/d/1NWjrv0cMooHi_XXVHa7I3A7QgbqW4ruk/view?usp=share_link"
          // alt="recommended-img"
        />
          <div className='upi'>
          
            UPI
          </div>
          

          </div>
          <div className='upi-box'></div>
          <div className='netbanking-heading'>
          <img
          className="recommended-img"
          // src="https://drive.google.com/file/d/1NWjrv0cMooHi_XXVHa7I3A7QgbqW4ruk/view?usp=share_link"
          // alt="recommended-img"
        />
          <div className='netbanking'>
          
            Netbanking
          </div>
          

          </div>
          <div className='netbanking-box'></div>
          <div className='credit-debit-heading'>
          <img
          className="recommended-img"
          // src="https://drive.google.com/file/d/1NWjrv0cMooHi_XXVHa7I3A7QgbqW4ruk/view?usp=share_link"
          // alt="recommended-img"
        />
          <div className='credit-debit'>
          
            Credit Card and Debit Card
          </div>
          

          </div>
          <div className='credit-debit-box'></div>
        </div>

  )
}

export default Payment