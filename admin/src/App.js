import { server } from "./api/drf";

import { Title } from "./items/items";
import Wrapper from "./appStyle";
import DomePrice from "./components/DomePrice";
import PriceVar from "./components/PriceVar";
import PairValue from "./components/FairValue";
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
    axios.get(server.web(itemId)).then(({ data: res }) => {
      setNowData((val) => ({
        ...val,
        dayToDay: res.dayToDay,
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
    });
  };
  useEffect(() => {
    setData(1);
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
