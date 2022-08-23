import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Data, lowCom } from "../atoms";
import { FlexBox } from "../items/items";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    padding: 18px;
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

const StyledSlider = styled(Slider)`
  .slick-list div {
    outline: none;
    backgroundcolor: "red";
  }
`;

function CompetitionPrice() {
  const { competitorPrice } = useRecoilValue(Data);
  const lowCompetition = useRecoilValue(lowCom);
  const settings = {
    dots: true,
    infinite: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
  };

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
              <p>{lowCompetition?.price}원</p>
            </div>
          </div>
          <StyledSlider {...settings}>
            {competitorPrice?.map((data, idx) => {
              return (
                <div
                  key={idx}
                  style={{ height: "200px" }}
                  className="img__text"
                >
                  <div
                    className="name"
                    style={{
                      display: "flex",
                      fontSize: "20px",
                      height: "100px",
                      width: "100%",
                      marginTop: "10px",
                      marginLeft: "30px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={`/logo/${data.competitor}.png`}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "20px",
                      }}
                    />
                    {data.competitor}
                  </div>
                  <div className="price">{data.price}원</div>
                </div>
              );
            })}
          </StyledSlider>

          {/* <div className="grid__lower">
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
          </div> */}
        </GridBox>
      </div>
    </FlexBox>
  );
}

export default CompetitionPrice;
