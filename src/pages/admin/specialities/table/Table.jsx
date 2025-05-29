import Speciality from "./Speciality";
import styles from "./Table.module.css";

const Table = () => {
  const specialities = [1, 2, 3, 4, 5, 6];
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <td>
            <span>№</span>
          </td>
          <td>
            <span>Speciality</span>
          </td>
          <td>
            <span>Levels</span>
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
        {specialities &&
          specialities.map((speciality, i) => <Speciality i={i} key={i} />)}
      </tbody>
    </table>
  );
};

export default Table;
