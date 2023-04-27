export type Orders = {
  id: number;
  userId: string;
  productsIds: Array<number>
};

export type Order = {
  'productsIds': Array<number>
};

export type NewOrder = {
  'userId': 1,
  'productsIds': Array<number>,
};