import { useRef, useState, useEffect } from "react";
import styles from "./SpecialityForm.module.css";
import { useDispatch } from "react-redux";
import {
  createSpeciality,
  updateSpeciality,
} from "../../../../redux/slices/specialities/specialitiesSlice";

const SpecialityForm = ({
  setShowModal,
  edit = false,
  selected,
  setSelected,
}) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selected) inputRef.current.value = selected.name;
  }, [selected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let speciality = inputRef.current?.value?.toLowerCase().trim();

    const newSpeciality = { name: speciality };
    setLoading(true);

    const req = selected
      ? dispatch(updateSpeciality({ id: selected.id, ...newSpeciality }))
      : dispatch(createSpeciality(newSpeciality));

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
      <h1>{edit ? "Update" : "Add"} Speciality</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="speciality">Speciality</label>
          <input type="text" ref={inputRef} name="speciality" id="speciality" />
        </div>
        <button type="submit">
          {loading ? "Sending..." : edit ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default SpecialityForm;
