import Teacher from "./Teacher";
import styles from "./Table.module.css";

const Table = () => {
  const teachers = [1, 2, 3, 4, 5, 6];
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <td>
            <span>№</span>
          </td>
          <td>
            <span>Full Name</span>
          </td>
          <td>
            <span>Phone number</span>
          </td>
          <td>
            <span>Speciality</span>
          </td>
          <td>
            <span>Groups</span>
          </td>
          <td>
            <span>Students</span>
          </td>
          <td className={styles.actions}>
            <span>Actions</span>
          </td>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {teachers && teachers.map((teacher, i) => <Teacher i={i} key={i} />)}
      </tbody>
    </table>
  );
};

export default Table;
