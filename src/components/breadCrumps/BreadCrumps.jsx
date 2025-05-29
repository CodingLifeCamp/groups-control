import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumps.module.css";

const BreadCrumps = () => {
  const location = useLocation();
  const currentLink = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      return (
        <div className={styles.crumb} key={crumb}>
          <Link to={currentLink.join("")}>{crumb}</Link>
        </div>
      );
    });

  return <div className={styles.breadcrumbs}>{crumbs}</div>;
};

export default BreadCrumps;
