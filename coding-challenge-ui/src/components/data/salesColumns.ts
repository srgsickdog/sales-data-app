import { ColDef } from "ag-grid-community";
import { Sale } from "../../types.ts/types";
import MarketPlaceCellRender from "../CellRenderers/MarketPlaceCellRender";
import DausOverdueCellRender from "../CellRenderers/DaysOverdueCellRender";
import OrderValueCellRender from "../CellRenderers/OrderValueCellRender";

export const salesColumns: ColDef<Sale>[] = [
  {
    field: "marketPlace",
    flex: 1,
    headerName: "MARKETPLACE",
    cellRenderer: MarketPlaceCellRender,
  },
  { field: "shopName", flex: 1, headerName: "STORE" },
  { field: "orderId", flex: 1, headerName: "ORDER ID" },
  {
    field: "orderValue",
    flex: 1,
    headerName: "ORDER VALUE",
    cellRenderer: OrderValueCellRender,
  },
  { field: "items", flex: 1, headerName: "ITEMS" },
  { field: "destination", flex: 1, headerName: "DESTINATION" },
  {
    field: "daysOverdue",
    flex: 1,
    headerName: "DAYS OVERDUE",
    sortable: true,
    cellRenderer: DausOverdueCellRender,
  },
];
