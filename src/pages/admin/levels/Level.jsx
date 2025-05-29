import styles from "./Levels.module.css";
import { NavLink } from "react-router-dom";

const Level = ({ i }) => {
  return (
    <tr>
      <td>
        <span>{i + 1}</span>
      </td>
      <td>
        <span>HTML</span>
      </td>
      <td>
        <span>13</span>
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

export default Level;
