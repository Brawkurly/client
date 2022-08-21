import { kamis } from "./api/drf";

import { Title } from "./items/items";
import Wrapper from "./appStyle";
import DomePrice from "./components/DomePrice";
import PriceVar from "./components/PriceVar";
import PairValue from "./components/PairValue";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Data } from "./atoms";

function App() {
  // api 호출
  const [nowData, setNowData] = useRecoilState(Data);
  useEffect(() => {
    //axios 후
    setNowData((val) => ({
      ...val,
      productId: 1,
      productName: "당도선별 서귀포 감귤 1.5kg",
      currentPrice: 16800,
      supplyPrice: 15900,
      fairPrice: 16400,
      consumerPrice: [
        { price: 16400, reservationTime: "2022-08-13T15:00:00.000+00:00" },
        { price: 16300, reservationTime: "2022-08-13T14:00:00.000+00:00" },
        { price: 16400, reservationTime: "2022-08-13T13:00:00.000+00:00" },
      ],
      totalPrice: 1784000,
      totalSalesCnt: 103,
      consumerReservationCnt: 38,
      competitorPrice: [
        {
          competitor: "쿠팡",
          prices: [
            {
              price: 16400,
              createAt: "2022-08-13T15:00:00.000+00:00",
            },
            { price: 16300, createAt: "2022-08-13T14:00:00.000+00:00" },
            { price: 16400, createAt: "2022-08-13T13:00:00.000+00:00" },
          ],
        },
        {
          competitor: "SSG",
          prices: [
            {
              price: 16400,
              createAt: "2022-08-13T15:00:00.000+00:00",
            },
            { price: 16300, createAt: "2022-08-13T14:00:00.000+00:00" },
            { price: 16400, createAt: "2022-08-13T13:00:00.000+00:00" },
          ],
        },
        {
          competitor: "네이버",
          prices: [
            {
              price: 16400,
              createAt: "2022-08-13T15:00:00.000+00:00",
            },
            { price: 16300, createAt: "2022-08-13T14:00:00.000+00:00" },
            { price: 16400, createAt: "2022-08-13T13:00:00.000+00:00" },
          ],
        },
      ],
      changePrice: [
        { price: 16400, createAt: "2022-08-7T13:00:00.000+00:00" },
        { price: 16400, createAt: "2022-08-8T13:00:00.000+00:00" },
        { price: 16400, createAt: "2022-08-9T13:00:00.000+00:00" },
        { price: 16100, createAt: "2022-08-10T13:00:00.000+00:00" },
        { price: 16200, createAt: "2022-08-11T13:00:00.000+00:00" },
        { price: 16400, createAt: "2022-08-12T13:00:00.000+00:00" },
        { price: 16500, createAt: "2022-08-13T13:00:00.000+00:00" },
      ],
    }));
  }, []);

  return (
    <Wrapper>
      <Title height={"40px"}>
        적정가격
        <span> 모니터링 </span>
        대시보드
      </Title>
      <div className="grid">
        <div className="today_sell"></div>
        <div className="live_conversation"></div>
        <div className="live_hot"></div>
        <div className="pair_value">
          <PairValue />
        </div>
        <div className="value_var">
          <PriceVar />
        </div>
        <div className="dome_price">
          <DomePrice />
        </div>
        <div className="compet_price"></div>
        <div className="compet_graph"></div>
      </div>
    </Wrapper>
  );
}

export default App;
