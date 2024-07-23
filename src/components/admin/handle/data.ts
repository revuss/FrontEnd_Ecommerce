export interface Products {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productType: string;
}

const products: Products[] = [
  {
    productId: 1,
    productName: "sasa",
    productPrice: 101,
    productImage: "image",
    productType: "Pending",
  },
  {
    productId: 2,
    productName: "sasa",
    productPrice: 104,
    productImage: "image",
    productType: "Completed",
  },
  {
    productId: 3,
    productName: "sdaasda",
    productPrice: 106,
    productImage: "image",
    productType: "Shipped",
  },
];

export default products;
