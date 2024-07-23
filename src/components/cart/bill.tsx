import React from "react";

const BillComponent = () => {
  return (
    <div className="md:w-1/4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span> &#x20B9;19.99</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Taxes</span>
          <span> &#x20B9;1.99</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span> &#x20B9;0.00</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Total</span>
          <span className="font-semibold"> &#x20B9;21.98</span>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default BillComponent;
