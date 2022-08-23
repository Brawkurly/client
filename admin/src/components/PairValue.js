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
    padding: 0px 30px;

    .title {
      color: white;
      font-size: calc(100vw * 0.01);
      background-color: ${(props) => props.theme.DarkBlue};
    }
    .priceWrap {
      .dan {
        font-size: 20px;
      }
    }
  }
  .price {
    font-weight: 600;
    font-size: calc(100vw * 0.02);
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
      justify-content: center;
      flex-direction: column;

      align-items: center;
      h1 {
        font-size: calc(100vw * 0.02);
        font-weight: 700;
        word-break: unset;
      }
      p {
        font-size: calc(100vw * 0.02);
        font-weight: 700;

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
                {data.currentPrice &&
                  data?.currentPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
              <span className="dan">원</span>
            </div>
          </div>
          <div className="box">
            <span className="title">공급자가</span>
            <div className="priceWrap">
              <span className="price">
                {data.supplyPrice &&
                  data?.supplyPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
                {data.fairPrice &&
                  data?.fairPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </p>
            </div>
          </div>
        </GridBox>
      </div>
    </FlexBox>
  );
}

export default PairValue;
