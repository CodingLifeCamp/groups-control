import styles from "./Error.module.css";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.container}>
      <h1 className={styles.code}>Xatolik</h1>
      <p className={styles.message}>Kechirasiz, tizimda xatolik yuz berdi.</p>
      {error?.statusText || error?.message ? (
        <pre className={styles.details}>
          {error.statusText || error.message}
        </pre>
      ) : null}
      <Link to="/" className={styles.homeLink}>
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default Error;
