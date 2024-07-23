import React from "react";
import BillComponent from "./bill";

const CartComponent = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src="https://via.placeholder.com/150"
                            alt="Product image"
                          />
                          <span className="font-semibold">Product name</span>
                        </div>
                      </td>
                      <td className="py-4"> &#x20B9;19.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <BillComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
