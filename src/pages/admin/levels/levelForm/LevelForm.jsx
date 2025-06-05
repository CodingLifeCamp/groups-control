import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./LevelForm.module.css";
import {
  createLevel,
  updateLevel,
} from "../../../../redux/slices/levels/levelsSlice";

const LevelForm = ({ setShowModal, edit = false, selected, setSelected }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selected) inputRef.current.value = selected.name;
  }, [selected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let level = inputRef.current?.value?.toLowerCase().trim();

    const newLevel = { name: level };
    setLoading(true);

    const req = selected
      ? dispatch(updateLevel({ id: selected.id, ...newLevel }))
      : dispatch(createLevel(newLevel));

    req.then((res) => {
      if (!res.error) {
        setShowModal(false);
        setLoading(false);

        selected && setSelected(false);
      }
    });
  };

  return (
    <div className={styles.container}>
      <h1>{edit ? "Update" : "Add"} Level</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="level">Level</label>
          <input type="text" ref={inputRef} name="level" id="level" />
        </div>
        <button type="submit">
          {loading ? "Sending..." : edit ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default LevelForm;
