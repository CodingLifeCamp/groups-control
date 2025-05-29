import styles from "./SpecialityForm.module.css";

const SpecialityForm = () => {
  return (
    <div className={styles.container}>
      <h1>Add Speciality</h1>

      <form className={styles.form}>
        <div>
          <label htmlFor="speciality">Speciality</label>
          <input type="text" name="speciality" id="speciality" />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default SpecialityForm;
