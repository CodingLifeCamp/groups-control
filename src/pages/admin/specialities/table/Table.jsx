import Speciality from "./Speciality";
import styles from "./Table.module.css";

const Table = ({ specialities }) => {
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
          specialities.map((speciality, i) => (
            <Speciality i={i} key={i} speciality={speciality} />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
