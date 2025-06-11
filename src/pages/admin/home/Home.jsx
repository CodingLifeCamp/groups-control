import { useEffect } from "react";
import "./Home.css";
import styles from "./Home.module.css";
import { fetchStatistics } from "../../../redux/slices/statistics/statisticsSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { statistics } = useSelector((state) => state.statistics);

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        {statistics &&
          statistics.map((card) => (
            <div key={card.name} className={styles.card}>
              <h3>{card.total}</h3>
              <p>{card.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
