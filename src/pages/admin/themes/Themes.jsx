import Theme from "./Theme";
import styles from "./Themes.module.css";

const Themes = () => {
  const themes = [1, 2, 3, 4, 5, 6];
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <td>
            <span>№</span>
          </td>
          <td>
            <span>Themes</span>
          </td>
          <td className={styles.actions}>
            <span>Actions</span>
          </td>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {themes && themes.map((level, i) => <Theme i={i} key={i} />)}
      </tbody>
    </table>
  );
};

export default Themes;
