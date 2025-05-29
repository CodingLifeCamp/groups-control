// import styles
import "./Login.css";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <h1>King Education System</h1>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="azimjonking"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
