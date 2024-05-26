import path from "path";
import { parseCSV } from "./utils/helperFunctions";

export async function getOverdueOrders(req: any, res: any) {
  try {
    const ordersFilePath = path.join(__dirname, "../data/orders/orders.csv");
    const storesFilePath = path.join(__dirname, "../data/stores.csv");

    const [orders, stores] = await Promise.all([
      parseCSV(ordersFilePath),
      parseCSV(storesFilePath),
    ]);

    const currentDate = new Date();

    const storeMap = stores.reduce((map, store) => {
      map[store.storeId] = store;
      return map;
    }, {});

    // console.log("storeMap: ", storeMap);

    const overdueOrders = orders
      .filter((order) => {
        const latestShipDate = new Date(order.latest_ship_date);
        return (
          latestShipDate < currentDate && order.shipment_status === "Pending"
        );
      })
      .map((order) => {
        const storeInfo = storeMap[order.storeId];
        const latestShipDate = new Date(order.latest_ship_date);
        const daysOverdue = Math.ceil(
          (currentDate.getTime() - latestShipDate.getTime()) /
            (1000 * 60 * 60 * 24)
        );

        return {
          marketPlace: storeInfo.marketplace,
          shopName: storeInfo.shopName,
          storeId: order.storeId,
          orderId: order.orderId,
          orderValue: order.orderValue,
          items: order.items,
          destination: order.destination,
          daysOverdue: daysOverdue,
          latestShipDate: latestShipDate,
          country: storeInfo.country,
        };
      });

    res.json(overdueOrders);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// put other sales api calls here for example get all sales
export function getAllSales(req: any, res: any) {
  const ordersFilePath = path.join(__dirname, "../data/orders/orders.csv");

  parseCSV(ordersFilePath)
    .then((orders) => {
      res.json(orders);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
