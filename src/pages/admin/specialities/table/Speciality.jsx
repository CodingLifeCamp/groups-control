import styles from "./Table.module.css";
import { NavLink } from "react-router-dom";

const Speciality = ({ i }) => {
  return (
    <tr>
      <td>
        <span>{i + 1}</span>
      </td>
      <td>
        <span>Frontend</span>
      </td>
      <td>
        <span>4</span>
      </td>
      <td>
        <span>107</span>
      </td>
      <td className={styles.actions}>
        <NavLink to={`${i + 1}`} className={styles.editBtn}>
          Info
        </NavLink>
        <button className={styles.editBtn}>Edit</button>
        <button className={styles.deleteBtn}>Delete</button>
      </td>
    </tr>
  );
};

export default Speciality;
