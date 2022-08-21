import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Data } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: nowrap;
  overflow-y: scroll;
  margin: 10px 0px;
  padding: 10px 0px;

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
    height: 35px;
    margin: 5px 0px;
    color: white;
    border-radius: 10px;
    background-color: ${(props) => props.theme.DarkBlue};
    .price {
      margin-left: 20px;
      align-self: center;
      font-size: 20px;
    }
    .date {
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
            <span className="price">{data?.price} 원</span>
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
