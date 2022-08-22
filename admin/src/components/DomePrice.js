import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { kamis, KAMIS_URL, API_KEY } from "../api/drf";
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
    grid-template-columns: 4fr 1.5fr 2fr 2fr 2fr 2fr 2fr 15px;
    grid-gap: 1px;

    grid-template-rows: 30px;
    background-color: #fafafa;
  }
  .grid_body {
    display: grid;
    grid-template-columns: 1fr;
    grid-row: 30px;
    grid-auto-flow: row;
    grid-auto-rows: 30px;
    grid-gap: 1px;
    background-color: #fafafa;
    overflow-y: scroll;
    .grid_row {
      display: grid;
      grid-gap: 1px;
      grid-template-columns: 4fr 1.5fr 2fr 2fr 2fr 2fr 2fr;
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

const dump = [
  {
    type: 1,
    name: "쌀",
    dan: "1kg",
    price: 10,
    priceRate: "10%",
    beforeOneDay: 10,
    beforeOneMonth: 20,
    beforeOneYear: 30,
  },
  {
    type: 1,
    name: "쌀",
    dan: "1kg",
    price: 10,
    priceRate: "10%",
    beforeOneDay: 10,
    beforeOneMonth: 20,
    beforeOneYear: 30,
  },
  {
    type: 2,
    name: "쌀",
    dan: "1kg",
    price: 10,
    priceRate: "10%",
    beforeOneDay: 10,
    beforeOneMonth: 20,
    beforeOneYear: 30,
  },
];

function DomePrice() {
  const [type, setType] = useState(1);
  const datas = [];
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

  // useEffect(() => {
  //   const now = today();
  //   let y = 0;
  //   for (let x = 1; x < 2; x++) {
  //     let state = "";
  //     let temp = [];
  //     for (let z = 0; z < 3; z++) {
  //       axios
  //         .get(kamis.dome(), {
  //           params: {
  //             p_cert_key: API_KEY,
  //             p_cert_id: "heo3793",
  //             p_country_code: 1101,
  //             p_returntype: "json",
  //             p_item_category_code: x * 100,
  //             p_product_cls_code: "02",
  //             p_regday: now - 2,
  //             p_convert_kg_yn: "N",
  //           },
  //         })
  //         .then(({ data }) => {
  //           state = data.data.error_code;
  //           temp = data.data.item;
  //         });
  //       if (state === "000") {
  //         console.log(temp);
  //         break;
  //       } else y++;
  //     }
  //   }
  // }, []);

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
              수산물
            </li>
          </ul>
          <div className="grid_head">
            <span>품목</span>
            <span>단위</span>
            <span>가격</span>
            <span>등락률</span>
            <span>전일</span>
            <span>1개월전</span>
            <span>1년전</span>
          </div>
          <div className="grid_body">
            {dump.map((data, idx) => {
              if (data.type === type) {
                return (
                  <div className="grid_row" key={idx}>
                    <div className="col">{data.name}</div>
                    <div className="col">{data.dan}</div>
                    <div className="col">{data.price}</div>
                    <div className="col">{data.priceRate}</div>
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
