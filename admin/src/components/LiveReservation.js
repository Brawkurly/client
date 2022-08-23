import styled from "styled-components";
import { FlexBox } from "../items/items";
import BarChart from "./BarChart";
import Reservation from "./Reservation";

const GridBox = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: minmax(100px, 1fr) 4fr;
`;
const GraphBox = styled.div`
  width: 100%;
  height: 100%;
`;

function LiveReservation() {
  return (
    <FlexBox>
      <h1> 상품별 소비자 예약 현황</h1>
      <div className="content">
        <GridBox>
          <Reservation />
          <GraphBox>
            <BarChart></BarChart>
          </GraphBox>
        </GridBox>
      </div>
    </FlexBox>
  );
}

export default LiveReservation;
