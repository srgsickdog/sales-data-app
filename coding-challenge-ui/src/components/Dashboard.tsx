import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { salesColumns } from "./data/salesColumns";
import { Sale } from "../types.ts/types";

import styled from "styled-components";

const TableHeading = styled.h2``;

const GridWrapper = styled.div`
  height: 85vh;
  padding: 12px;
`;

interface DashboardProps {
  salesData: Sale[] | null;
}

const Dashboard: React.FC<DashboardProps> = ({ salesData }) => {
  return (
    <GridWrapper className="ag-theme-quartz">
      <TableHeading>Overdue Orders</TableHeading>
      <AgGridReact
        rowData={salesData}
        columnDefs={salesColumns}
        pagination={true}
        paginationAutoPageSize={true}
      />
    </GridWrapper>
  );
};

export default Dashboard;
