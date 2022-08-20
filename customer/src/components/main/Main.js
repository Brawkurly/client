import styles from "./Main.module.css";
import EventBanner from "../eventBanner/EventBanner";
import Product from "../products/Product";

function Main() {
  return (
    <>
      <EventBanner />
      <div className={styles.filter}>
        <p>최신순</p>
        <p>낮은 가격</p>
        <p>높은 가격</p>
      </div>
      <main className={styles.flex_wrap}>
        <Product />
      </main>
    </>
  );
}
export default Main;
