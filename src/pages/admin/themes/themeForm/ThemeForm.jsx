import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./ThemeForm.module.css";
import {
  createTheme,
  updateTheme,
} from "../../../../redux/slices/themes/themesSlice";

const ThemeForm = ({ setShowModal, edit = false, selected, setSelected }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selected) inputRef.current.value = selected.name;
  }, [selected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let theme = inputRef.current?.value?.toLowerCase().trim();

    const newTheme = { name: theme };
    setLoading(true);

    const req = selected
      ? dispatch(updateTheme({ id: selected.id, ...newTheme }))
      : dispatch(createTheme(newTheme));

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
      <h1>{edit ? "Update" : "Add"} Theme</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="theme">Theme</label>
          <input type="text" ref={inputRef} name="theme" id="theme" />
        </div>
        <button type="submit">
          {loading ? "Sending..." : edit ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default ThemeForm;
