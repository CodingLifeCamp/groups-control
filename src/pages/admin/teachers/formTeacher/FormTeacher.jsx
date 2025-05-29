import styles from "./FormTeacher.module.css";
const FormTeacher = () => {
  return (
    <form className={styles.container}>
      <h1>Add Teacher</h1>

      <div className={styles.content}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Azimjon"
        />
      </div>

      <div className={styles.content}>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Jalilov"
        />
      </div>

      <div className={styles.content}>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="+998905977955" />
      </div>

      <div className={styles.content}>
        <label htmlFor="speciality">Speciality</label>
        <select name="speciality" id="speciality">
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="kiberxavfsizlik">Kiberxavfsizlik</option>
          <option value="smm">SMM</option>
        </select>
      </div>

      <div className={styles.btns}>
        <button type="clear" className={styles.clearBtn}>
          Clear
        </button>
        <button type="submit" className={styles.addBtn}>
          Add Teacher
        </button>
      </div>
    </form>
  );
};

export default FormTeacher;
