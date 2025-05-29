import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaLayerGroup,
  FaUserFriends,
  FaUserGraduate,
} from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? styles.active : "")}
              end
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="groups"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaLayerGroup />
              <span>Groups</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="teachers"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaUserFriends />
              <span>Teachers</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="students"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaUserGraduate />
              <span>Students</span>
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="specialities"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <SiLevelsdotfyi />
              <span>Specialities</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
