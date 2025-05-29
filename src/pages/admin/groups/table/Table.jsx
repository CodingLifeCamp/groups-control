import Group from "./Group";
import styles from "./Table.module.css";
const Table = () => {
  const groups = [1, 2, 3, 4, 5, 6];
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <td>
            <span>№</span>
          </td>
          <td>
            <span>Group Name</span>
          </td>
          <td>
            <span>Speciality</span>
          </td>
          <td>
            <span>Time</span>
          </td>
          <td>
            <span>Teacher</span>
          </td>
          <td>
            <span>Students</span>
          </td>
          <td>
            <span>Level</span>
          </td>
          <td>
            <span>Start date</span>
          </td>
          <td>
            <span>Exam date</span>
          </td>
          <td className={styles.actions}>
            <span>Actions</span>
          </td>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {groups && groups.map((group, i) => <Group i={i} key={i} />)}
      </tbody>
    </table>
  );
};

export default Table;
