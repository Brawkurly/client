import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Data, lowCom } from "../atoms";
import { FlexBox } from "../items/items";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;

  .left__flex {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    color: white;
    .left__title {
      font-size: 1vw;
      font-family: ${(props) => props.theme.font};
      font-weight: 700;
    }
    .small__title {
      font-size: 1vw;
      align-self: center;
    }
    .left__content {
      width: 100%;
      font-weight: 600;
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-end;
      font-family: ${(props) => props.theme.font};

      .price {
        align-self: center;
        font-size: 2vw;
        color: #cea16b;
      }
    }
  }
  .right__slider {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 2px;
    .slider__box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      color: white;
      font-family: ${(props) => props.theme.font};
      font-size: 1.2vw;
      margin-bottom: 5px;
      /* background-color: red; */
      height: calc(1vh + 60px);
      img {
        width: 2vw;
        height: 2vw;
      }
    }
  }
`;

const StyledSlider = styled(Slider)`
  .slick-list div {
    outline: none;
  }
`;

function CompetitionPrice() {
  const { competitorPrice } = useRecoilValue(Data);
  const lowCompetition = useRecoilValue(lowCom);
  const settings = {
    dots: false,
    infinite: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
  };
  const Image = {
    네이버: 1,
    쿠팡: 2,
    SSG: 3,
  };
  return (
    <FlexBox>
      <h1>경쟁업체 판매가</h1>
      <div className="content">
        <Wrapper>
          <div className="left__flex">
            <div className="left__title">경쟁업체 최저가</div>
            <div className="left__content">
              <div className="small__title">{lowCompetition?.name}</div>
              <div className="price">
                {(lowCompetition?.price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </div>
            </div>
          </div>

          <div className="right__slider">
            <StyledSlider {...settings}>
              {competitorPrice?.map((data, idx) => {
                const imageNum = Image[data.competitor];
         
                return (
                  <div key={idx}>
                    <div className="slider__box">
                      <img src={`/logo/${imageNum}.png`} />
                      <div className="slider__name">{data.competitor}</div>
                      <div className="price">
                        {data.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </div>
                    </div>
                  </div>
                );
              })}
            </StyledSlider>
          </div>
        </Wrapper>
      </div>
    </FlexBox>
  );
}

export default CompetitionPrice;
