import React, { useState } from 'react';

const ApplyOffer = () => {
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleCouponCodeChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleApplyOffer = () => {
    // Here you can implement the logic to check if the coupon code is valid and set the discount amount accordingly.
    // For this example, let's assume the coupon code is "DISCOUNT10" and the discount amount is 10%.
    if (couponCode === 'DISCOUNT10') {
      setDiscountAmount(10);
    } else {
      setDiscountAmount(0);
    }
  };

  return (
    <div>
      <label htmlFor="coupon-code">Coupon Code:</label>
      <input type="text" id="coupon-code" value={couponCode} onChange={handleCouponCodeChange} />
      <button onClick={handleApplyOffer}>Apply</button>
      <p>Discount Amount: {discountAmount}%</p>
    </div>
  );
}

export default ApplyOffer;
