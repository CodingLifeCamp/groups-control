import { useRef, useState, useEffect } from "react";
import styles from "./FormTeacher.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchSpecialities } from "../../../../redux/slices/specialities/specialitiesSlice";
import {
  createTeacher,
  updateTeacher,
} from "../../../../redux/slices/teachers/teachersSlice";

const FormTeacher = ({ setShowModal, edit = false, selected, setSelected }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { specialities } = useSelector((state) => state.specialities);
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const phoneRef = useRef();
  const [specialityId, setSpecialityId] = useState(null);

  useEffect(() => {
    if (selected) {
      firstnameRef.current.value = selected.firstname;
      lastnameRef.current.value = selected.lastname;
      phoneRef.current.value = selected.phone;
      setSpecialityId(selected.speciality.id);
    }
  }, [selected]);

  useEffect(() => {
    if (!specialities.length) dispatch(fetchSpecialities());
  }, [dispatch]);

  const handleSubmitClick = (e) => {
    e.preventDefault();
    let fullName = `${lastnameRef.current?.value
      ?.toLowerCase()
      .trim()} ${firstnameRef.current?.value?.toLowerCase().trim()}`;
    let phone = `+${phoneRef.current?.value?.toLowerCase().trim()}`;

    const newTeacher = {
      fullName,
      phone,
      specialityId,
    };
    setLoading(true);

    const req = selected
      ? dispatch(updateTeacher({ id: selected.id, ...newTeacher }))
      : dispatch(createTeacher(newTeacher));
    req.then((res) => {
      if (!res.error) {
        setShowModal(false);
        setLoading(false);

        selected && setSelected(false);
      }
    });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmitClick}>
      <h1>{edit ? "Update" : "Add"} Teacher</h1>

      <div className={styles.content}>
        <label htmlFor="firstname">First Name</label>
        <input
          ref={firstnameRef}
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Azimjon"
        />
      </div>

      <div className={styles.content}>
        <label htmlFor="lastname">Last Name</label>
        <input
          ref={lastnameRef}
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Jalilov"
        />
      </div>

      <div className={styles.content}>
        <label htmlFor="phone">Phone Number</label>
        <input
          ref={phoneRef}
          type="tel"
          id="phone"
          name="phone"
          placeholder="+998905977955"
        />
      </div>

      <div className={styles.content}>
        <label htmlFor="speciality">Speciality</label>
        <select
          name="speciality"
          id="speciality"
          onChange={(e) => {
            const selectedName = e.target.value;
            const selected = specialities.find((s) => s.name === selectedName);
            setSpecialityId(selected ? selected.id : null);
          }}
        >
          <option value="">-- Select speciality --</option>
          {specialities.map((speciality) => (
            <option key={speciality.id} value={speciality.name}>
              {speciality.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.btns}>
        <button type="clear" className={styles.clearBtn}>
          Clear
        </button>
        <button type="submit" className={styles.addBtn}>
          {loading ? "Sending..." : edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default FormTeacher;
