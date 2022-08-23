import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Data, lowCom } from "../atoms";
import { FlexBox } from "../items/items";

const GridBox = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;

  width: 100%;
  height: 100%;
  background-color: #27304d;

  color: white;

  .grid__lower {
    display: grid;
    grid-template-rows: minmax(20px, 1fr), 3fr;
    grid-template-columns: 1fr 1fr;
    padding: 8px;
    width: 100%;
    height: 100%;

    h1 {
      padding-bottom: 0px;
      grid-column: 1 / 3;
    }
  }

  .flex__column {
    h1 {
      font-size: 20px;
      padding-bottom: 10px;
    }
  }

  .comList {
    margin-left: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    font-size: 14px;
  }

  .name {
    width: 60px;
  }

  .img {
    width: 3vw;
    height: 3vw;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

function CompetitionPrice() {
  const { competitorPrice } = useRecoilValue(Data);
  const lowCompetition = useRecoilValue(lowCom);

  return (
    <FlexBox>
      <h1>경쟁업체 판매가</h1>
      <div className="content">
        <GridBox>
          <div className="grid__lower">
            <h1>현재 최저가</h1>
            <div
              className="img"
              style={{
                backgroundImage: `url('/logo/${lowCompetition?.name}.png')`,
              }}
            ></div>
            <div className="flex__column">
              <h1>{lowCompetition?.name}</h1>
              <p>{lowCompetition?.price}</p>
            </div>
          </div>

          <div className="comList">
            {competitorPrice?.map((data, idx) => {
              return (
                <div key={idx} className="img__text">
                  <div className="name">{data.competitor}</div>
                  <div className="price">{data.price}</div>
                </div>
              );
            })}
          </div>
        </GridBox>
      </div>
    </FlexBox>
  );
}

export default CompetitionPrice;
