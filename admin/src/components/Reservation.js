import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Data } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: nowrap;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    border-radius: 3px;
    height: 8px;
    background-color: ${(props) => props.theme.DarkBlue};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => props.theme.MidBlue};
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.transBlue};
  }

  .box {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-family: "Pretendard-Regular";
    justify-content: space-between;

    width: 98%;
    height: calc(100% / 4 - 4px);
    margin: 0px 0px 4px;
    color: white;
    border-radius: 10px;
    background-color: ${(props) => props.theme.DarkBlue};
    .price {
      margin-left: 20px;
      align-self: center;
      font-size: 14px;
    }
    .date {
      font-size: 12px;
      margin-right: 20px;
    }
  }
`;

function Reservation() {
  const { consumerRecentReserve } = useRecoilValue(Data);
  return (
    <Wrapper>
      {consumerRecentReserve?.map((data, idx) => {
        return (
          <div className="box" key={idx}>
            <span className="price">
              {data?.price &&
                data?.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              원
            </span>
            <span className="date">
              {data.reservationTime.replace("T", " ").replace(/\..*/, "")}
            </span>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default Reservation;
