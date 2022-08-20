import { kamis } from "./api/drf";

import { Title } from "./items/items";
import Wrapper from "./appStyle";
import DomePrice from "./components/DomePrice";

function App() {
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
        <div className="pair_value"></div>
        <div className="value_var"></div>
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
