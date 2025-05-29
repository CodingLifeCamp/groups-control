import styles from "./LevelForm.module.css";

const LevelForm = () => {
  return (
    <div className={styles.container}>
      <h1>Add Level</h1>

      <form className={styles.form}>
        <div>
          <label htmlFor="level">Level</label>
          <input type="text" name="level" id="level" />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default LevelForm;
