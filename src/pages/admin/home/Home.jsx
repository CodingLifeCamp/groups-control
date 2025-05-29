import "./Home.css";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h3>13</h3>
          <p>Teachers</p>
        </div>
        <div className={styles.card}>
          <h3>50</h3>
          <p>Groups</p>
        </div>
        <div className={styles.card}>
          <h3>345</h3>
          <p>Students</p>
        </div>
        <div className={styles.card}>
          <h3>5</h3>
          <p>Specialities</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
