import styles from "./GroupInfo.module.css";
const GroupInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>
          Group name: <span>ALG-web-111</span>
        </p>
        <p>
          Speciality: <span>Frontend</span>
        </p>
        <p>
          Teacher: <span>Hayotbek Turg'unov</span>
        </p>
        <p>
          Start: <span>7.11.2024</span>
        </p>
        <p>
          End: <span>11.08.2025</span>
        </p>
        <p>
          Time: <span>J-14:00-16:00</span>
        </p>
      </div>
      <div className={styles.right}>
        <p>
          Level: <span>Javascript</span>
        </p>
        <p>
          Students: <span>12</span>
        </p>
        <p>
          Start: <span>1.05.2025</span>
        </p>
        <p>
          End: <span>1.08.2025</span>
        </p>
        <p>
          Control exam: <span>1.06.2025</span>
        </p>
      </div>
    </div>
  );
};

export default GroupInfo;
