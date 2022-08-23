import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Data } from "../atoms";
import { FlexBox } from "../items/items";

const RankBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  overflow: hidden;
  .rank__box {
    flex: 1;
    width: 100%;

    font-weight: 600;
    font-family: ${(props) => props.theme.font};
    font-size: 1.5vh;
    display: flex;
    height: 30px;
    align-items: center;
    margin-bottom: 0.5vh;
    padding: 0px 10px;

    color: white;

    .rank__icon {
      flex: 0.1;
    }
    .rank__name {
      flex: 0.8;
    }
    .rank__cnt {
      flex: 0.1;
    }
  }
`;

function Ranking() {
  const colors = [
    "#d45a69",
    "#f2b75d",
    "#4da6a9",
    "#71c5f2",
    "#2c70b9",
    "#a99f8f",
  ];
  const { consumerPopularityReserve } = useRecoilValue(Data);
  return (
    <FlexBox>
      <h1>실시간 인기 상품 현황</h1>
      <RankBox>
        {consumerPopularityReserve?.map((data, idx) => {
          return (
            <div
              className="rank__box"
              style={{ backgroundColor: colors[idx % 6] }}
              key={idx}
            >
              <div className="rank__icon"></div>
              <div className="rank__name">{data.productName}</div>
              <div className="rank__cnt">{data.cnt}</div>
            </div>
          );
        })}
      </RankBox>
    </FlexBox>
  );
}

export default Ranking;
