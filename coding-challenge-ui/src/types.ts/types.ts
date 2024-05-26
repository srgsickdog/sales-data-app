export interface Sale {
  marketPlace: string;
  shopName: string;
  storeId: string;
  orderId: string;
  orderValue: string;
  items: string;
  destination: string;
  daysOverdue: number;
  latestShipDate: Date;
}
