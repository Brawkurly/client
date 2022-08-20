import styles from "./Detail.module.css";

function Detail() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.product}>
          <div className={styles.product_img}>
            <img src="/images/product/감귤1.png" alt="product" />
          </div>
        </section>
        <section className={styles.product}>
          <div className={styles.product_info}>
            <p className={styles.seller_store}>사과</p>
            <p className={styles.product_name}>당도선별 서귀포 감귤 1.5kg</p>
            <span className={styles.price}>
              16,800
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
            <div className={styles.total_info}>
              <span className={styles.total}>즉시 구매금액</span>
              <span className={styles.total_price}>
                16,800
                <span className={styles.total_unit1}>원</span>
              </span>
            </div>

            <div className={styles.total_info}>
              <span className={styles.total}>예약 상품금액</span>
              <span className={styles.total_price}>
                16,800
                <span className={styles.total_unit2}>원</span>
              </span>
            </div>
          </div>

          <div className={styles.btn}>
            <button className={styles.btn_buy}>즉시 구매하기</button>
            <button className={styles.btn_cart}>구매 예약하기</button>
          </div>
        </section>
      </main>
    </>
  );
}
export default Detail;
