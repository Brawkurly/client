import axios from "axios";
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
    color: #0e5a56;
    text-align: center;
    flex: 1;
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
        font-size: 13px;

        padding-left: 20px;
        text-align: left;
      }
    }
  }
`;

const datas = [];
for (let x = 1; x < 2; x++) {
  axios
    .get(kamis.dome(), {
      params: {
        p_cert_key: API_KEY,
        p_cert_id: "heo3793",
        // p_country_code: "default",
        p_returntype: "json",
        p_item_category_code: x * 100,
        // p_product_cls_code: "default",
        p_regday: "2022-06-01",
        p_convert_kg_yn: "N",
      },
    })
    .then((res) => console.log(res));
}

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
];

function DomePrice() {
  // axios
  //   .get(
  //     "http://www.kamis.or.kr/service/price/xml.do?action=dailyPriceByCategoryList&p_product_cls_code=02&p_country_code=1101&p_regday=2015-10-01&p_convert_kg_yn=N&p_item_category_code=200&p_cert_key=111&p_cert_id=222&p_returntype=json"
  //   )
  //   .then((res) => {
  //     console.log(res);
  //   });
  return (
    <FlexBox>
      <h1>상품별 도매가</h1>
      <div className="content">
        <Box>
          <ul>
            <li>식량작물</li>
            <li>채소류</li>
            <li>특용작물</li>
            <li>과일류</li>
            <li>수산물</li>
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
              if (data.type === 1) {
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
