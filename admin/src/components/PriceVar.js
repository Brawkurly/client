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
    /* height: 30px; */
    /* height: 4vh; */
    font-size: 3vh;
    padding: 10px 0px;
    margin: 0px 5px 5px;

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
  /* margin: 3px 0px; */

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
    padding: 5px 10px;
    margin: 3px 3px 10px;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;

    font-size: 2vh;
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
  width: 100%;
  height: 100%;
`;

const GridBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
`;

function PriceVar({ setData }) {
  const [nowBigIdx, setNowBigIdx] = useState(1);
  const [nowSmallIdx, setNowSmallIdx] = useState(1);
  const categories = {
    1: [
      { id: 1, name: "???????????? ????????? ?????? 1.5kg" },
      { id: 2, name: "[????????????] ????????? ?????? ?????? 1.5kg" },
    ],
    2: [
      { id: 3, name: "[KF365] ??????????????? 800g/???" },
      { id: 4, name: "[KF365] ???????????? 800g/???" },
    ],
    3: [
      { id: 5, name: "???????????? ?????????(??????) 10kg" },
      { id: 6, name: "?????? ????????? ??? 10kg" },
    ],
    4: [
      { id: 7, name: "[??????????????????] ???????????? 2.5kg" },
      { id: 8, name: "[????????????] ???????????? 2.5kg" },
    ],
  };
  const changeBigIdx = (event) => {
    setNowBigIdx(Number(event.target.id));
  };
  // axios ?????????????????? ???
  const changeSmallIdx = (id) => {
    setData(id);
    setNowSmallIdx(id);
  };

  return (
    <FlexBox>
      <h1>????????? ???????????? ????????????</h1>
      <div className="content">
        <GridBox>
          <div style={{ width: "100%" }}>
            <ButtonWrap>
              <div
                onClick={changeBigIdx}
                id={1}
                className={nowBigIdx === 1 ? "BigButton active" : "BigButton"}
              >
                ??????
              </div>
              <div
                id={2}
                onClick={changeBigIdx}
                className={nowBigIdx === 2 ? "BigButton active" : "BigButton"}
              >
                ?????????
              </div>
              <div
                id={3}
                onClick={changeBigIdx}
                className={nowBigIdx === 3 ? "BigButton active" : "BigButton"}
              >
                ???
              </div>
              <div
                id={4}
                onClick={changeBigIdx}
                className={nowBigIdx === 4 ? "BigButton active" : "BigButton"}
              >
                ??????
              </div>
            </ButtonWrap>
            <SmallButtonWrap>
              {categories[nowBigIdx].map((item) => {
                return (
                  <div
                    onClick={() => changeSmallIdx(item.id)}
                    className={
                      nowSmallIdx === item.id
                        ? "SmallButton active"
                        : "SmallButton"
                    }
                    key={item.id}
                  >
                    {item.name}
                  </div>
                );
              })}
            </SmallButtonWrap>
          </div>
          <GraphBox>
            <LineChart></LineChart>
          </GraphBox>
        </GridBox>
      </div>
    </FlexBox>
  );
}

export default PriceVar;
