import React from "react";
import OrdersTable from "./OrdersTable";

const OrdersPage: React.FC = () => {
  return (
    <div className="h-[80vh] flex px-10 flex-col justify-center">
      <OrdersTable />
    </div>
  );
};

export default OrdersPage;
