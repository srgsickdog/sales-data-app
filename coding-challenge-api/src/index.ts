import express, { Request, Response } from "express";

import cors from "cors";
import { getUser } from "./user";
import { getOverdueOrders } from "./sales";

const app = express();
const port = 8080;

app.use(cors());
app.get("/user", getUser);
// use /overdue for dedicated api, rather than perform data transformation or filering on frontend
app.get("/sales/overdue", getOverdueOrders);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
