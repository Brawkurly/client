import { useLocation } from "react-router-dom";
import styles from "./Detail.module.css";
import axios from "axios";
import { useState } from "react";

function Detail() {
  const location = useLocation();
  const product = location.state;
  const list = [
    "감귤1",
    "감귤2",
    "고구마1",
    "고구마2",
    "쌀1",
    "쌀2",
    "김치1",
    "김치2",
  ];

  const [price, setPrice] = useState(product.price);
  const upPrice = () => {
    setPrice(price + 100);
  };

  const downPrice = () => {
    if (price <= 100) setPrice(price);
    else setPrice(price - 100);
  };

  const buyNow = () => {
    axios
      .post("http://54.180.2.69/api/order/purchase", {
        productName: product.name,
        price: product.price,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("구매에 성공하였습니다.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buyAfter = () => {
    axios
      .post("http://54.180.2.69/api/order/reservation", {
        productName: product.name,
        price: product.price,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("예약구매에 성공하였습니다.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <main className={styles.main}>
        <section className={styles.product}>
          <div className={styles.product_img}>
            <img
              src={"/images/product/" + list[product.productId - 1] + ".png"}
              alt="product"
            />
          </div>
        </section>
        <section className={styles.product}>
          <div className={styles.product_info}>
            <p className={styles.seller_store}>{product.product}</p>
            <p className={styles.product_name}>{product.name}</p>
            <span className={styles.price}>
              {product.price}
              <span className={styles.unit}>원</span>
            </span>
          </div>

          <div className={styles.delivery}>
            <p>택배배송 / 무료배송</p>
          </div>

          <div className={styles.line}></div>

          <div className={styles.amount}>
            <img
              className={styles.minus}
              src="/images/icon-minus-line.svg"
              alt="minus"
            />

            <div className={styles.count}>
              <span>1</span>
            </div>

            <img
              className={styles.plus}
              src="/images/icon-plus-line.svg"
              alt="plus"
            />
          </div>

          <div className={styles.line}></div>

          <div className={styles.sum}>
            <div>
              <span className={styles.total}>즉시 구매금액</span>
              <span className={styles.total_price}>
                {"  "}
                {product.price}
                <span className={styles.total_unit1}>원</span>
              </span>
            </div>

            <div className={styles.total_info}>
              <span
                className={styles.total}
                style={{ marginTop: "10px", marginRight: "5px" }}
              >
                예약 상품금액
              </span>
              <span className={styles.total_price}>
                {"  "}
                {price}
                <span className={styles.total_unit2}>원</span>
              </span>
              <div
                style={{
                  width: "20px",
                  backgroundColor: "red",
                  display: "block",
                  marginLeft: "15px",
                }}
              >
                <div
                  className="plus"
                  style={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    justifyContent: "center",
                  }}
                  onClick={upPrice}
                >
                  <img
                    className={styles.priceBtn}
                    src="/images/plus.png"
                    alt="plus"
                  />
                </div>
                <div
                  className="minus"
                  style={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    justifyContent: "center",
                  }}
                  onClick={downPrice}
                >
                  <img
                    className={styles.priceBtn}
                    src="/images/minus.png"
                    alt="minus"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.btn}>
            <button onClick={buyNow} className={styles.btn_buy}>
              즉시 구매하기
            </button>
            <button onClick={buyAfter} className={styles.btn_cart}>
              구매 예약하기
            </button>
          </div>
        </section>
      </main>

      <section className={styles.detail}>
        <img
          src={"/images/productDetail/" + list[product.productId - 1] + ".png"}
          alt="product"
        />
      </section>
    </>
  );
}
export default Detail;
