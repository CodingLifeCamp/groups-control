import styles from "./FormGroup.module.css";
const FormGroup = () => {
  return (
    <form className={styles.container}>
      <h1>Add Group</h1>

      <div className={styles.content}>
        <label htmlFor="name">Group name</label>
        <input type="text" id="name" name="name" placeholder="ALG-101" />
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

      <div className={styles.content}>
        <label htmlFor="time">Time</label>
        <select name="time" id="time">
          <option value="t-08-10">T-08-10</option>
          <option value="t-10-12">T-10-12</option>
          <option value="j-14-16">J-14-16</option>
          <option value="j-16-18">J-16-18</option>
        </select>
      </div>

      <div className={styles.content}>
        <label htmlFor="teacher">Teacher</label>
        <select name="teacher" id="teacher">
          <option value="hayotbek">Hayotbek</option>
          <option value="azamjon">Azamjon</option>
          <option value="abdulaziz">Abdulaziz</option>
          <option value="diyora">Diyora</option>
        </select>
      </div>

      <div className={styles.content}>
        <label htmlFor="level">level</label>
        <select name="level" id="level">
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="js">js</option>
          <option value="react">react</option>
        </select>
      </div>

      <div className={styles.content}>
        <label htmlFor="date">Start date</label>
        <input type="date" id="date" name="date" />
      </div>

      <div className={styles.btns}>
        <button type="clear" className={styles.clearBtn}>
          Clear
        </button>
        <button type="submit" className={styles.addBtn}>
          Add Group
        </button>
      </div>
    </form>
  );
};

export default FormGroup;
