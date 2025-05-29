import styles from "./Themes.module.css";

const Level = ({ i }) => {
  return (
    <tr>
      <td>
        <span>{i + 1}</span>
      </td>
      <td>
        <span>Semantic elements, CEO optimization.</span>
      </td>
      <td className={styles.actions}>
        <button className={styles.editBtn}>Edit</button>
        <button className={styles.deleteBtn}>Delete</button>
      </td>
    </tr>
  );
};

export default Level;
