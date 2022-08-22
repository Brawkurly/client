import { useNavigate } from "react-router-dom";
import styles from "./Product.module.css";

function Product() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={styles.product}
        onClick={() => {
          navigate("/product/1", {
            state: {
              productId: 1,
              product: "감귤",
              name: "당도선별 서귀포 감귤 1.5kg",
              price: 16800,
            },
          });
        }}
      >
        <div className={styles.product_image}>
          <img src="images/product/감귤1.png" alt="product" />
        </div>

        <div className={styles.store}>
          <span>감귤</span>
        </div>

        <div className={styles.product_name}>
          <span>당도선별 서귀포 감귤 1.5kg</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>16,800</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
      <div
        className={styles.product}
        onClick={() => {
          navigate("/product/2", {
            state: {
              productId: 2,
              product: "감귤",
              name: "[달콤트리] 고당도 제주 감귤 1.5kg",
              price: 23900,
            },
          });
        }}
      >
        {" "}
        <div className={styles.product_image}>
          <img src="images/product/감귤2.png" alt="product" />
        </div>
        <div className={styles.store}>
          <span>감귤</span>
        </div>
        <div className={styles.product_name}>
          <span>[달콤트리] 고당도 제주 감귤 1.5kg</span>
        </div>
        <div className={styles.product_price}>
          <span className={styles.price}>23,900</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
      <div
        className={styles.product}
        onClick={() => {
          navigate("/product/3", {
            state: {
              productId: 3,
              product: "고구마",
              name: "[KF365] 호박고구마 800g/봉",
              price: 4780,
            },
          });
        }}
      >
        <div className={styles.product_image}>
          <img src="images/product/고구마1.png" alt="product" />
        </div>

        <div className={styles.store}>
          <span>고구마</span>
        </div>

        <div className={styles.product_name}>
          <span>[KF365] 호박고구마 800g/봉</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>4,780</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
      <div
        className={styles.product}
        onClick={() => {
          navigate("/product/4", {
            state: {
              productId: 4,
              product: "고구마",
              name: "[KF365] 밤고구마 800g/봉",
              price: 5580,
            },
          });
        }}
      >
        <div className={styles.product_image}>
          <img src="images/product/고구마2.png" alt="product" />
        </div>

        <div className={styles.store}>
          <span>고구마</span>
        </div>

        <div className={styles.product_name}>
          <span>[KF365] 밤고구마 800g/봉</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>5,580</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
      <div
        className={styles.product}
        onClick={() => {
          navigate("/product/5", {
            state: {
              productId: 5,
              product: "쌀",
              name: "영광 신동진 쌀 10kg",
              price: 29900,
            },
          });
        }}
      >
        <div className={styles.product_image}>
          <img src="images/product/쌀1.png" alt="product" />
        </div>

        <div className={styles.store}>
          <span>쌀</span>
        </div>

        <div className={styles.product_name}>
          <span>영광 신동진 쌀 10kg</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>29,900</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
      <div
        className={styles.product}
        onClick={() => {
          navigate("/product/6", {
            state: {
              productId: 6,
              product: "쌀",
              name: "임금님표 이천쌀(추청) 10kg",
              price: 31900,
            },
          });
        }}
      >
        <div className={styles.product_image}>
          <img src="images/product/쌀2.png" alt="product" />
        </div>

        <div className={styles.store}>
          <span>쌀</span>
        </div>

        <div className={styles.product_name}>
          <span>임금님표 이천쌀(추청) 10kg</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>31,900</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>

      <div
        className={styles.product}
        onClick={() => {
          navigate("/product/7", {
            state: {
              productId: 7,
              product: "김치",
              name: "[한국농협김치] 포기김치 2.5kg",
              price: 22000,
            },
          });
        }}
      >
        <div className={styles.product_image}>
          <img src="images/product/김치1.png" alt="product" />
        </div>

        <div className={styles.store}>
          <span>김치</span>
        </div>

        <div className={styles.product_name}>
          <span>[한국농협김치] 포기김치 2.5kg</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>22,000</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
      <div
        className={styles.product}
        onClick={() => {
          navigate("/product/8", {
            state: {
              productId: 8,
              product: "김치",
              name: "[한국의집] 배추김치 2.5kg",
              price: 30000,
            },
          });
        }}
      >
        <div className={styles.product_image}>
          <img src="images/product/김치2.png" alt="product" />
        </div>

        <div className={styles.store}>
          <span>김치</span>
        </div>

        <div className={styles.product_name}>
          <span>[한국의집] 배추김치 2.5kg</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>30,000</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
    </>
  );
}
export default Product;
