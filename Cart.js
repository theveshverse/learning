import React, { useState} from "react";
import "../../assets/styles/mobile/Cart.css";
import Bookingconf from "./Bookingconf";
import { Link, useLocation } from "react-router-dom";
import { salonData } from "../../data/salonData.js";
import Price from "./Price";
import Checkprice from "./Checkprice";

function Cart() {
  const[test, setTest]=useState(0)
  const item=
  [
    { name: "Items Total", price: test },
    { name: "Discount", price: -10 },
    { name: "Taxes & Charges", price: 2.2 },
    { name: "To Pay", price: 212.2 }
  ]

  function ItemList() {
    // setDataa((data)=>{
    //   return({...data,total:total});
    // })
    return (
      <ul className="no-bullets">
        {item?.map((item, index) => (
          <li key={index}>
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
          </li>
        ))}
      </ul>
    );
  }


    const location = useLocation();
    const name = location.state?.data;


  //  const newArr= name.map((data_service) =>
  //     salonData.api_salonData.map((data, i) => {
  //       if (data.unique_name == location.state.name) {
  //         data.salon_services.map((data, i) => {
  //           if (data.service_name == data_service) {
  //             // alert(data.service_price)
  //             total = total + data.service_price;
  //           }
  //         });
  //       }
  //     })
  //     // service_amount="100"
  //   );
  var total=0;
  return (
    <>
      <Bookingconf />
      {name?.map((data_service) => (
        <Checkprice
          service_name={data_service}
          service_amount={salonData.api_salonData?.map((data, i) =>
            data.unique_name == location.state.name ? (
              data.salon_services?.map((data, i) =>
                data.service_name == data_service ? (
                  // alert(data.service_price)
                  <>
                    {data.service_price}
                    <div style={{ display: "none" }}>
                      {total = total + data.service_price}
                    </div>
                  </>
                ) : (
                  <div style={{ display: "none" }}>
                    {item[0].price=total}{item[3].price=item[0].price+item[1].price+item[2].price}
                    </div>
                )
              )
            ) : (
              // empty list element
              <div></div>
            )
          )}
          // service_amount="100"
        />
      ))}
      <div className="parentt">
      <div className='book-myslot'>
      < button className='book-slot-button'>Book time slot</button>
      </div>

       <div className="input-divv"> 
        <div className="input-btnn">
          
          <input
            className="enter-code"
            placeholder=" Have a coupon Code?"
          />
        
          <button className='apply'>Apply</button>

        </div>
      </div> 
        <div className="list">
        <ul className="no-bullets">
        {item?.map((item, index) => (
          <li key={index}>
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
          </li>
        ))}
      </ul>
         {/* <ItemList /> */}
        </div>
      </div> 
  
      
      
    
 
    <div className='two-button'>
      <button className='left-button'> ₹ 212.2
      </button>
      <button className='right-button'>Pay</button>
    </div>
    </>
  );
}


export default Cart;
// const ButtonGroup = ({ leftButtonProp }) => {
// {leftButtonProp}
// }

