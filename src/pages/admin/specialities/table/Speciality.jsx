import { useState } from "react";
import styles from "./Table.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteSpeciality } from "../../../../redux/slices/specialities/specialitiesSlice";
import { FaXmark } from "react-icons/fa6";
import Modal from "../../../../components/modal/Modal";
import SpecialityForm from "../specialityForm/SpecialityForm";

const Speciality = ({ i, speciality }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  const handleDeleteClick = (id) => {
    dispatch(deleteSpeciality(id));
  };

  const handleEditClick = (data) => {
    setSelected({ name: data.name, id: data.id });
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <Modal>
          <SpecialityForm
            setShowModal={setShowModal}
            edit={true}
            selected={selected}
            setSelected={setSelected}
          />
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
        </Modal>
      )}
      <tr>
        <td>
          <span>{i + 1}</span>
        </td>
        <td>
          <span>{speciality.name}</span>
        </td>
        <td>
          <span>{speciality.totalLevels}</span>
        </td>
        <td>
          <span>{speciality.totalThemes}</span>
        </td>
        <td className={styles.actions}>
          <NavLink
            to={`${speciality.name?.toLowerCase()}`}
            className={styles.editBtn}
          >
            Info
          </NavLink>
          <button
            className={styles.editBtn}
            onClick={() => handleEditClick(speciality)}
          >
            Edit
          </button>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDeleteClick(speciality.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Speciality;
