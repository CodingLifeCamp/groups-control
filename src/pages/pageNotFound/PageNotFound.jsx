import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Oops! Page not found.</p>
      <a href="/" className={styles.homeLink}>
        Go back home
      </a>
    </div>
  );
};

export default PageNotFound;
