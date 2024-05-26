import React from "react";
import { CustomCellRendererProps } from "@ag-grid-community/react";
import styled from "styled-components";

const CellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const MarketPlaceCellRender: React.FC<CustomCellRendererProps> = (params) => {
  const getFlag = (country: string) => {
    switch (country) {
      case "AUS":
        return "AUS.jpg";
      case "GBR":
        return "GBR.png";
      case "USA":
        return "USA.png";
      default:
        return "";
    }
  };

  const flagImage = getFlag(params.data?.country);

  return (
    <CellContainer>
      {flagImage && (
        <img
          alt={`${params.value} Flag`}
          src={require(`../../assets/flags/${flagImage}`)}
          className="logo"
          width={35}
        />
      )}
      <span style={{ marginLeft: "12px" }}>{params.value}</span>
    </CellContainer>
  );
};

export default MarketPlaceCellRender;
