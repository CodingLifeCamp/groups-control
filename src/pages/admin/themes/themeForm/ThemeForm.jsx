import styles from "./ThemeForm.module.css";

const ThemeForm = () => {
  return (
    <div className={styles.container}>
      <h1>Add Theme</h1>

      <form className={styles.form}>
        <div>
          <label htmlFor="theme">Theme</label>
          <input type="text" name="theme" id="theme" />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ThemeForm;
