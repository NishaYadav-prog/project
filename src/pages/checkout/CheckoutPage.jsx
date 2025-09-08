// src/pages/checkout/CheckoutPage.jsx
import React from "react";
import Checkout from "../../payment/Checkout";

const CheckoutPage = () => {
  // Ye cartItems tu props ya global state (Redux/Context) se pass karega
  const cartItems = [
    { busName: "Varanasi-Delhi", seat: "A1", price: 500 },
    { busName: "Varanasi-Delhi", seat: "A2", price: 500 },
  ];

  return (
    <div>
      <Checkout cartItems={cartItems} userId={"user123"} />
    </div>
  );
};

export default CheckoutPage;
