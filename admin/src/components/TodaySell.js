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

    font-weight: 600;
    font-family: "Pretendard-Regular";
    background-color: ${(props) => props.theme.transBlue};
    border-radius: 10px;
    padding: 15px 25px;
    :nth-child(1) {
      color: white;
    }
    .highlight {
      color: ${(props) => props.color};
      font-size: 34px;
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
          <div className="highlight" color={"red"}>
            {data?.totalPrice}
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </GridBox>
    </FlexBox>
  );
}

export default TodaySell;
