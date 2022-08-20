import styled from "styled-components";

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

export default Wrapper;
