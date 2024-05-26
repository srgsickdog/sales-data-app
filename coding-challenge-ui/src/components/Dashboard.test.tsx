import Dashboard from "./Dashboard";
import React from "react";
import { getByText, render } from "@testing-library/react";

const dummySalesData = [
  {
    country: "GBR",
    daysOverdue: 115,
    destination: "Great Falls MM, 59963-4198",
    items: "7",
    latestShipDate: new Date(),
    marketPlace: "Ebay",
    orderId: "RBGSESWLOZ",
    orderValue: "160.76",
    shopName: "Snack Co.",
    storeId: "2",
  },
  {
    country: "AUS",
    daysOverdue: 115,
    destination: "Great Falls MM, 59963-4198",
    items: "7",
    latestShipDate: new Date(),
    marketPlace: "Ebay",
    orderId: "RBGSESWLOZ",
    orderValue: "160.76",
    shopName: "Snack Co.",
    storeId: "2",
  },
  {
    country: "USA",
    daysOverdue: 115,
    destination: "Great Falls MM, 59963-4198",
    items: "7",
    latestShipDate: new Date(),
    marketPlace: "Ebay",
    orderId: "RBGSESWLOZ",
    orderValue: "160.76",
    shopName: "Snack Co.",
    storeId: "2",
  },
];

// make sure header is in the page
test("renders table header", () => {
  const { getByText } = render(<Dashboard salesData={dummySalesData} />);
  const headerText = getByText("Overdue Orders");
  expect(headerText).toBeInTheDocument();
});

test("renders AG Grid with correct columns and rows", () => {
  const { container } = render(<Dashboard salesData={dummySalesData} />);

  // make sure the grid is rendered
  const grid = container.querySelector(".ag-root");
  expect(grid).toBeInTheDocument();

  // Check that the column headers are rendered
  const columnHeaders = [
    "MARKETPLACE",
    "STORE",
    "ORDER ID",
    "ORDER VALUE",
    "ITEMS",
    "DESTINATION",
    "DAYS OVERDUE",
  ];
  columnHeaders.forEach((header) => {
    expect(getByText(container, header)).toBeInTheDocument();
  });

  // check the headings match
  const rowElements = container.querySelectorAll(".ag-row");
  expect(rowElements.length).toBe(dummySalesData.length);

  // check some of the cell data to make sure it matches with the dummy data
  const firstRowCells = rowElements[0].querySelectorAll(".ag-cell");
  expect(firstRowCells[0].textContent).toBe(dummySalesData[0].marketPlace);
  expect(firstRowCells[6].textContent).toBe(
    dummySalesData[0].daysOverdue.toString()
  );
});
