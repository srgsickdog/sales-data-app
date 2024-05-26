import React from "react";
import { CustomCellRendererProps } from "@ag-grid-community/react";

const OrderValueCellRender: React.FC<CustomCellRendererProps> = (params) => {
  return <span>${params.value}</span>;
};

export default OrderValueCellRender;
