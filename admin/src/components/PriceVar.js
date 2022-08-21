import { useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../items/items";
import LineChart from "./LineChart";

const ButtonWrap = styled.div`
  font-family: "Pretendard-Regular";
  font-weight: 500;
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: ${(props) => props.scroll && "scroll"};
  border-bottom: 3px solid ${(props) => props.theme.DarkBlue};

  .BigButton {
    font-family: "Pretendard-Regular";
    font-weight: 500;
    width: 100%;
    height: 30px;
    margin: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.White};
    border-radius: 10px;
    background-color: ${(props) => props.theme.LightBlue};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    :hover {
      color: white;
      background-color: ${(props) => props.theme.DarkBlue};
    }
  }
  .active {
    color: white;
    background-color: ${(props) => props.theme.DarkBlue};
  }
`;

const SmallButtonWrap = styled.div`
  font-family: "Pretendard-Regular";
  font-weight: 500;
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: scroll;
  margin: 3px 0px;

  transition: all 0.3s ease-in-out;
  ::-webkit-scrollbar {
    border-radius: 3px;
    height: 8px;
    background-color: ${(props) => props.theme.DarkBlue};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.MidBlue};
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.transBlue};
  }

  .SmallButton {
    display: flex;
    padding: 0px 10px;
    height: 20px;
    margin: 3px 3px 8px;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    color: ${(props) => props.theme.White};
    border-radius: 10px;
    background-color: ${(props) => props.theme.LightBlue};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    :hover {
      color: white;
      background-color: ${(props) => props.theme.DarkBlue};
    }
  }
  .active {
    color: white;
    background-color: ${(props) => props.theme.DarkBlue};
  }
`;

const GraphBox = styled.div`
  flex: 1;
  padding-top: 25px;
  width: 100%;
`;

function PriceVar({ setNowData }) {
  const [nowBigIdx, setNowBigIdx] = useState(1);
  const [nowSmallIdx, setNowSmallIdx] = useState(1);
  const categories = {
    1: [
      { id: 1, name: "당도선별 서귀포 감귤 1.5kg" },
      { id: 2, name: "[달콤트리] 고당도 제주 감귤 1.5kg" },
    ],
    2: [
      { id: 3, name: "[KF365] 호박고구마 800g/봉" },
      { id: 4, name: "영광 신동진 쌀 10kg" },
    ],
    3: [
      { id: 5, name: "임금님표 이천쌀(추청) 10kg" },
      { id: 6, name: "영광 신동진 쌀 10kg" },
    ],
    4: [
      { id: 7, name: "[한국농협김치] 포기김치 2.5kg" },
      { id: 8, name: "[한국의집] 배추김치 2.5kg" },
    ],
  };
  const changeBigIdx = (event) => {
    setNowBigIdx(Number(event.target.id));
  };
  // axios 추가해야하는 곳
  const changeSmallIdx = (id) => {
    setNowSmallIdx(id);
  };

  return (
    <FlexBox>
      <h1>상품별 마켓컬리 가격변동</h1>
      <div className="content">
        <ButtonWrap>
          <div
            onClick={changeBigIdx}
            id={1}
            className={nowBigIdx === 1 ? "BigButton active" : "BigButton"}
          >
            감귤
          </div>
          <div
            id={2}
            onClick={changeBigIdx}
            className={nowBigIdx === 2 ? "BigButton active" : "BigButton"}
          >
            고구마
          </div>
          <div
            id={3}
            onClick={changeBigIdx}
            className={nowBigIdx === 3 ? "BigButton active" : "BigButton"}
          >
            쌀
          </div>
          <div
            id={4}
            onClick={changeBigIdx}
            className={nowBigIdx === 4 ? "BigButton active" : "BigButton"}
          >
            김치
          </div>
        </ButtonWrap>
        <SmallButtonWrap>
          {categories[nowBigIdx].map((item) => {
            return (
              <div
                onClick={() => changeSmallIdx(item.id)}
                className={
                  nowSmallIdx === item.id ? "SmallButton active" : "SmallButton"
                }
                key={item.id}
              >
                {item.name}
              </div>
            );
          })}
        </SmallButtonWrap>
        <GraphBox>
          <LineChart></LineChart>
        </GraphBox>
      </div>
    </FlexBox>
  );
}

export default PriceVar;
