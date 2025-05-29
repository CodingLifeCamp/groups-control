import styles from "./Table.module.css";

const Teacher = ({ i }) => {
  return (
    <tr>
      <td>
        <span>{i + 1}</span>
      </td>
      <td>
        <span>Abduqodirov Abdug'ani</span>
      </td>
      <td>
        <span>+998-99-999-99-99</span>
      </td>
      <td>
        <span>Frontend</span>
      </td>
      <td>
        <span>4</span>
      </td>
      <td>
        <span>32</span>
      </td>
      <td className={styles.actions}>
        <button className={styles.editBtn}>Edit</button>
        <button className={styles.deleteBtn}>Delete</button>
      </td>
    </tr>
  );
};

export default Teacher;
