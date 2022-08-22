import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Data } from "../atoms";
import { FlexBox } from "../items/items";

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;

  width: 100%;
  height: 100%;

  .box {
    display: flex;
    flex-direction: column;

    font-size: 12px;
    font-weight: 600;
    font-family: "Pretendard-Regular";
    background-color: ${(props) => props.theme.transBlue};
    border-radius: 10px;
    padding: 10px 15px;

    color: white;

    .highlight {
      margin-top: 3px;
      align-self: center;
      font-size: 20px;
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
            {data?.totalPrice}원
          </div>
        </div>
        <div className="box">
          <span>당일 판매 금액</span>
          <div className="highlight" style={{ color: "#cea16b" }}>
            {data?.totalPrice}원
          </div>
        </div>
        <div className="box">
          <span>당일 판매 금액</span>
          <div className="highlight" style={{ color: "#67a1c8" }}>
            {data?.totalPrice}원
          </div>
        </div>
        <div className="box">
          <span>당일 판매 금액</span>
          <div className="highlight" style={{ color: "#4ca7a8" }}>
            {data?.totalPrice}원
          </div>
        </div>
      </GridBox>
    </FlexBox>
  );
}

export default TodaySell;
