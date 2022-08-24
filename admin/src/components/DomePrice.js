import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { API_KEY } from "../api/drf";
import { FlexBox } from "../items/items";

const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  span {
    text-align: center;
    font-size: 13px;
    margin: auto 0px;
  }

  ul {
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #8c7ae6;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #0e5a56;
    flex: 1;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
      background-color: #0e5a56;
      color: white;
    }
  }

  .grid_head {
    display: grid;
    grid-template-columns: 4fr 2fr 2fr 2fr 2fr 2fr 15px;
    grid-gap: 1px;

    grid-template-rows: 30px;
    background-color: #fafafa;
  }
  .grid_body {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    grid-auto-rows: 30px;
    grid-gap: 1px;
    background-color: #fafafa;
    overflow-y: scroll;
    .grid_row {
      display: grid;
      grid-gap: 1px;
      grid-template-columns: 4fr 2fr 2fr 2fr 2fr 2fr;
      grid-template-rows: 30px;
      background-color: white;

      .col {
        display: flex;
        align-items: center;
        font-size: 13px;
        padding-left: 20px;
      }
    }
  }
  .active {
    background-color: #0e5a56;
    color: white;
  }
`;

const date = new Date();

function DomePrice() {
  const [type, setType] = useState(1);
  const [datas, setDatas] = useState([]);
  const today = () => {
    const nowDay = date.getDay();
    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    return yy.toString() + mm.toString().padStart(2, "0") + dd.toString();
  };

  const changeType = (event) => {
    setType(Number(event.target.id));
  };

  let now = today();

  useEffect(() => {
    const now = today();
    axios
      .get("http://54.180.2.69/api/kamis")
      .then(({ data }) => {
        data?.price.map((item) => {
          const temp = {
            type: item.category_code / 100,
            name: item.item_name,
            dan: item.unit,
            price: item.dpr1,
            // priceRate:
            //   (parseInt(item.dpr1.replace(/,/g, "")) -
            //     parseInt(item.dpr2.replace(/,/g, ""))) /
            //   parseInt(item.dpr2.replace(/,/g, "")),
            beforeOneDay: item.dpr2,
            beforeOneMonth: item.dpr3,
            beforeOneYear: item.dpr4,
          };

          setDatas((val) => [...val, temp]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <FlexBox>
      <h1>상품별 도매가</h1>
      <div className="content">
        <Box>
          <ul>
            <li
              id="1"
              onClick={changeType}
              className={type === 1 ? "active" : null}
            >
              식량작물
            </li>
            <li
              id="2"
              onClick={changeType}
              className={type === 2 ? "active" : null}
            >
              채소류
            </li>
            <li
              id="3"
              onClick={changeType}
              className={type === 3 ? "active" : null}
            >
              특용작물
            </li>
            <li
              id="4"
              onClick={changeType}
              className={type === 4 ? "active" : null}
            >
              과일류
            </li>
            <li
              id="5"
              onClick={changeType}
              className={type === 5 ? "active" : null}
            >
              육류
            </li>
          </ul>
          <div className="grid_head">
            <span>품목</span>
            <span>단위</span>
            <span>가격</span>
            {/* <span>등락률</span> */}
            <span>전일</span>
            <span>1개월전</span>
            <span>1년전</span>
          </div>
          <div className="grid_body">
            {datas.map((data, idx) => {
              if (data.type === type) {
                return (
                  <div className="grid_row" key={idx}>
                    <div className="col">{data.name}</div>
                    <div className="col">{data.dan}</div>
                    <div className="col">{data.price}</div>
                    {/* <div className="col">{data.priceRate}</div> */}
                    <div className="col">{data.beforeOneDay}</div>
                    <div className="col">{data.beforeOneMonth}</div>
                    <div className="col">{data.beforeOneYear}</div>
                  </div>
                );
              }
            })}
          </div>
        </Box>
      </div>
    </FlexBox>
  );
}

export default DomePrice;
