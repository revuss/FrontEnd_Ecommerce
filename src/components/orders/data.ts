export interface Order {
  OrderId: number;
  totalItems: number[];
  price: number;
  status: string;
}

const orders: Order[] = [
  {
    OrderId: 1,
    totalItems: [101, 102, 103],
    price: 150.25,
    status: "Pending",
  },
  {
    OrderId: 2,
    totalItems: [104, 105],
    price: 75.99,
    status: "Completed",
  },
  {
    OrderId: 3,
    totalItems: [106],
    price: 30.5,
    status: "Shipped",
  },
];

export default orders;
