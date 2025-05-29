import Level from "./Level";
import styles from "./Levels.module.css";

const Levels = () => {
  const levels = [1, 2, 3, 4, 5, 6];
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <td>
            <span>№</span>
          </td>
          <td>
            <span>Level</span>
          </td>
          <td>
            <span>Lessons</span>
          </td>
          <td className={styles.actions}>
            <span>Actions</span>
          </td>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {levels && levels.map((level, i) => <Level i={i} key={i} />)}
      </tbody>
    </table>
  );
};

export default Levels;
