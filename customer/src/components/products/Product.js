import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Product() {
  return (
    <div className={styles.product}>
      <Link to="#">
        <div className={styles.product_image}>
          <img src="images/product/감귤1.png" alt="product" />
        </div>
      </Link>
      <div className={styles.store}>
        <span>사과</span>
      </div>

      <div className={styles.product_name}>
        <span>당도선별 서귀포 감귤 1.5kg</span>
      </div>

      <div className={styles.product_price}>
        <span className={styles.price}>16,800</span>
        <span className={styles.unit}>원</span>
      </div>
    </div>
  );
}
export default Product;
