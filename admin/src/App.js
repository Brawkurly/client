import { kamis, server } from "./api/drf";

import { Title } from "./items/items";
import Wrapper from "./appStyle";
import DomePrice from "./components/DomePrice";
import PriceVar from "./components/PriceVar";
import PairValue from "./components/PairValue";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Data } from "./atoms";
import LiveReservation from "./components/LiveReservation";
import TodaySell from "./components/TodaySell";
import CompetitionPrice from "./components/CompetitionPrice";
import Ranking from "./components/Ranking";
import axios from "axios";

function App() {
  // api 호출
  const [nowData, setNowData] = useRecoilState(Data);
  //axios 후
  const setData = (itemId) => {
    axios.get(
      server.web(itemId).then((res) => {
        setNowData((val) => ({
          ...val,
          productId: res.productId,
          productName: res.productName,
          currentPrice: res.currentPrice,
          supplyPrice: res.supplyPrice,
          fairPrice: res.fairPrice,
          consumerRecentReserve: res.consumerRecentReserve,
          consumerReserveCnt: res.consumerReserveCnt,
          consumerPopularityPurchase: res.consumerPopularityPurchase,
          consumerPopularityReserve: res.consumerPopularityReserve,
          totalPrice: res.totalPrice,
          totalPrice: res.totalPrice,
          totalSalesCnt: res.totalSalesCnt,
          consumerReservationCnt: res.consumerReservationCnt,
          competitorPrice: res.competitorPrice,
          changePrice: res.changePrice,
        }));
      })
    );
  };
  useEffect(() => {
    // setData(1);
    setNowData((val) => ({
      ...val,
      productId: 1,
      productName: "당도선별 서귀포 감귤 1.5kg",
      currentPrice: 16800,
      supplyPrice: 15900,
      fairPrice: 16400,
      consumerRecentReserve: [
        { price: 16400, reservationTime: "2022-08-08T15:00:00.000+00:00" },
        { price: 16300, reservationTime: "2022-08-09T14:00:00.000+00:00" },
        { price: 16400, reservationTime: "2022-08-10T13:00:00.000+00:00" },
        { price: 16400, reservationTime: "2022-08-11T13:00:00.000+00:00" },
        { price: 16400, reservationTime: "2022-08-12T13:00:00.000+00:00" },
        { price: 16400, reservationTime: "2022-08-13T13:00:00.000+00:00" },
      ],
      consumerReserveCnt: [
        { price: 16400, cnt: 10 },
        { price: 16300, cnt: 21 },
        { price: 16200, cnt: 17 },
        { price: 16100, cnt: 16 },
        { price: 16000, cnt: 12 },
      ],
      consumerPopularityPurchase: [
        { productName: "당도선별 서귀포 감귤 1.5kg", cnt: 100 },
        { productName: "임금님표 이천쌀(추청) 10kg", cnt: 90 },
        { productName: "[한국의집] 배추김치 2.5kg", cnt: 80 },
        { productName: "당도선별 서귀포 감귤 1.5kg", cnt: 100 },
        { productName: "임금님표 이천쌀(추청) 10kg", cnt: 90 },
        { productName: "[한국의집] 배추김치 2.5kg", cnt: 80 },
      ],
      consumerPopularityReserve: [
        { productName: "당도선별 서귀포 감귤 1.5kg", cnt: 100 },
        { productName: "임금님표 이천쌀(추청) 10kg", cnt: 90 },
        { productName: "[한국의집] 배추김치 2.5kg", cnt: 80 },
        { productName: "당도선별 서귀포 감귤 1.5kg", cnt: 100 },
        { productName: "임금님표 이천쌀(추청) 10kg", cnt: 90 },
        { productName: "[한국의집] 배추김치 2.5kg", cnt: 80 },
        { productName: "당도선별 서귀포 감귤 1.5kg", cnt: 100 },
        { productName: "임금님표 이천쌀(추청) 10kg", cnt: 90 },
      ],
      totalPrice: 1784000,
      totalPrice: 1784000,
      totalSalesCnt: 103,
      consumerReservationCnt: 38,
      competitorPrice: [
        {
          competitor: "쿠팡",
          price: 16400,
        },
        {
          competitor: "SSG",
          price: 16400,
        },
        {
          competitor: "네이버",
          price: 16400,
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
      <Title>
        적정가격&nbsp;
        <span> 모니터링&nbsp; </span>
        대시보드
      </Title>
      <div className="grid">
        <div className="today_sell">
          <TodaySell />
        </div>
        <div className="live_reservation">
          <LiveReservation />
        </div>
        <div className="pair_value">
          <PairValue />
        </div>
        <div className="value_var">
          <PriceVar setData={setData} />
        </div>
        <div className="dome_price">
          <DomePrice />
        </div>
        <div className="compet_price">
          <CompetitionPrice />
        </div>
        <div className="compet_graph">
          <Ranking />
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
