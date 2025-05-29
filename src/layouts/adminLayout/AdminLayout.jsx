import { Outlet } from "react-router-dom";
// import styles
import styles from "./AdminLayout.module.css";
// import components
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
