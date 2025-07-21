export interface Product {
  productName: string;
  prices: Price[];
}

export interface Price {
  currency: string;
  amount: number;
}
