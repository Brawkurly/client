import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Data } from "../atoms";
import { FlexBox } from "../items/items";

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 5px;

  width: 100%;
  height: 100%;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: calc(100vh * 0.015);
    font-weight: 600;
    font-family: "Pretendard-Regular";
    background-color: ${(props) => props.theme.transBlue};
    border-radius: 10px;
    padding: 0px 20px;

    color: white;

    .highlight {
      align-self: center;
      font-size: calc(100vh * 0.03);
    }
  }
`;

function TodaySell() {
  const data = useRecoilValue(Data);
  return (
    <FlexBox>
      <h1>오늘의 판매 현황</h1>

      <GridBox>
        <div className="box">
          <span>당일 판매 금액</span>
          <div className="highlight" style={{ color: "red" }}>
            {data?.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </div>
        </div>
        <div className="box">
          <span>당일 판매 상품 수</span>
          <div className="highlight" style={{ color: "#cea16b" }}>
            {data?.totalSalesCnt} 개
          </div>
        </div>
        <div className="box">
          <span>전일 대비 판매 비율</span>
          <div className="highlight" style={{ color: "#67a1c8" }}>
            {data?.totalPrice} %
          </div>
        </div>
        <div className="box">
          <span>소비자 예약 가격 등록 수</span>
          <div className="highlight" style={{ color: "#4ca7a8" }}>
            {data?.consumerReservationCnt} 개
          </div>
        </div>
      </GridBox>
    </FlexBox>
  );
}

export default TodaySell;
