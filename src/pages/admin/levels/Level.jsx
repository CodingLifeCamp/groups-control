import { useState } from "react";
import styles from "./Levels.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteLevel } from "../../../redux/slices/levels/levelsSlice";
import { FaXmark } from "react-icons/fa6";
import Modal from "../../../components/modal/Modal";
import LevelForm from "./levelForm/LevelForm";

const Level = ({ i, level }) => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const handleDeleteClick = (id) => {
    dispatch(deleteLevel(id));
  };

  const handleEditClick = (data) => {
    setSelected({ name: data.name, id: data.id });
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <Modal>
          <LevelForm
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
          <span>{level.name}</span>
        </td>
        <td>
          <span>{level.totalThemes}</span>
        </td>
        <td className={styles.actions}>
          <NavLink to={`${level.name}`} className={styles.editBtn}>
            Info
          </NavLink>
          <button
            className={styles.editBtn}
            onClick={() => handleEditClick(level)}
          >
            Edit
          </button>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDeleteClick(level.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Level;
