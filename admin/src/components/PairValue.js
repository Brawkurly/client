import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Data } from "../atoms";
import { FlexBox } from "../items/items";

const GridBox = styled.div`
  display: grid;
  padding: 5px 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 3fr;
  grid-gap: 20px 20px;

  width: 100%;
  height: 100%;

  .box {
    font-family: "Pretendard-Regular";
    font-weight: 500;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #b8e7e1;
    padding: 0px 10px;
    .title {
      color: white;
      font-size: 24px;
      background-color: ${(props) => props.theme.DarkBlue};
    }
    .priceWrap {
      padding-bottom: 10px;
      .dan {
        font-size: 24px;
      }
    }
  }
  .price {
    font-weight: 600;
    font-size: 42px;
  }

  .row {
    font-family: "Pretendard-Regular";
    font-weight: 500;
    grid-area: 2 / 1 / 3/ 3;
    display: flex;
    align-items: center;
    padding: 5px;
    .img {
      flex: 0.3;
      height: 100%;
      background-position: center center;
      background-size: cover;
    }
    .contents {
      flex: 0.7;
      height: 100%;
      display: flex;
      flex-direction: column;

      align-items: center;
      h1 {
        font-size: 32px;
        font-weight: 700;
        flex: 0.5;
      }
      p {
        font-size: 50px;
        font-weight: 700;
        flex: 0.5;
        color: #eb8180;
      }
    }
  }
`;

function PairValue({}) {
  const data = useRecoilValue(Data);
  return (
    <FlexBox>
      <h1>적정 가격</h1>
      <div className="content">
        <GridBox>
          <div className="box">
            <span className="title">현재가</span>
            <div className="priceWrap">
              <span className="price">
                {data.currentPrice.toLocaleString("ko-KR")}
              </span>
              <span className="dan">원</span>
            </div>
          </div>
          <div className="box">
            <span className="title">공급자가</span>
            <div className="priceWrap">
              <span className="price">
                {data.supplyPrice.toLocaleString("ko-KR")}
              </span>
              <span className="dan">원</span>
            </div>
          </div>
          <div className="row">
            <div
              className="img"
              style={{
                backgroundImage: `url("/products/${data.productId}.png")`,
              }}
            ></div>
            <div className="contents">
              <h1>{data.productName}</h1>
              <p>
                적정가&nbsp;&nbsp;&nbsp;&nbsp;
                {data.fairPrice.toLocaleString("ko-KR")}원
              </p>
            </div>
          </div>
        </GridBox>
      </div>
    </FlexBox>
  );
}

export default PairValue;
