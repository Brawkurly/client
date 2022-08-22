import styled from "styled-components";
import { FlexBox } from "../items/items";
import BarChart from "./BarChart";
import Reservation from "./Reservation";

const GridBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  padding: 5px 10px;
  width: 100%;
  height: 100%;

  .chartBox {
    max-width: 400px;
  }
`;

function LiveReservation() {
  return (
    <FlexBox>
      <h1 style={{ paddingBottom: "15px", paddingTop: "15px" }}>
        상품별 소비자 예약 현황
      </h1>
      <div className="content">
        <GridBox>
          <Reservation />
          <div className="chartBox">
            <BarChart></BarChart>
          </div>
        </GridBox>
      </div>
    </FlexBox>
  );
}

export default LiveReservation;
