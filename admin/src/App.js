import styled from "styled-components";
import { Title } from "./items/items";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.DarkBlue};

  .grid {
    display: grid;
    grid-template-columns: 2fr 2.5fr 2fr;
    grid-template-rows: repeat(12, 1fr);
    grid-gap: 10px 10px;

    height: 98vh;
    padding: 20px;

    background-color: ${(props) => props.theme.MidBlue};

    .today_sell {
      grid-area: 1 / 1 / 4 / 2;
      background-color: red;
    }

    .live_conversation {
      grid-area: 4 / 1 / 7 / 2;
      background-color: tomato;
    }
    .live_hot {
      grid-area: 7 / 1 / 13 / 2;
      background-color: yellow;
    }
    .pair_value {
      grid-area: 1 / 2 / 6 / 3;
      background-color: azure;
    }
    .pair_value {
      grid-area: 1 / 2 / 6 / 3;
      background-color: azure;
    }
    .value_var {
      grid-area: 6 / 2 / 13 / 3;
      background-color: darkcyan;
    }
    .dome_price {
      grid-area: 1 / 3 / 5 / 4;
      background-color: aquamarine;
    }
    .compet_price {
      grid-area: 5 / 3 / 8 / 4;
      background-color: blue;
    }
    .compet_graph {
      grid-area: 8 / 3 / 13 / 4;
      background-color: gray;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Title height={"2vh"}>
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
        <div className="dome_price"></div>
        <div className="compet_price"></div>
        <div className="compet_graph"></div>
      </div>
    </Wrapper>
  );
}

export default App;
