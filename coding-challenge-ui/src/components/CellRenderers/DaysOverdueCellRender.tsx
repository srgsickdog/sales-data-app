import React from "react";
import { CustomCellRendererProps } from "@ag-grid-community/react";

const DaysOverdueCellRender: React.FC<CustomCellRendererProps> = (params) => {
  return <span style={{ color: "red" }}>{params.value}</span>;
};

export default DaysOverdueCellRender;
