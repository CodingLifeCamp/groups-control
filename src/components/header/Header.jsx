import "./Header.css";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaSearch, FaUserTie } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">King Education</Link>

      <form className={styles.search}>
        <input type="search" placeholder="search..." />
        <FaSearch className={styles.icon} />
      </form>

      <div className={styles.timetable}>
        <GrSchedules className={styles.timetableIcon} />
      </div>
      <div className={styles.user}>
        <FaUserTie className={styles.userIcon} />
      </div>
    </header>
  );
};

export default Header;
