import { useState } from "react";
import styles from "./Themes.module.css";
import { useDispatch } from "react-redux";
import { deleteTheme } from "../../../redux/slices/themes/themesSlice";
import { FaXmark } from "react-icons/fa6";
import Modal from "../../../components/modal/Modal";
import ThemeForm from "./themeForm/ThemeForm";

const Level = ({ i, theme }) => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  const handleDeleteClick = (id) => {
    dispatch(deleteTheme(id));
  };

  const handleEditClick = (data) => {
    setSelected({ name: data.name, id: data.id });
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <Modal>
          <ThemeForm
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
          <span>{theme.name}</span>
        </td>
        <td className={styles.actions}>
          <button
            className={styles.editBtn}
            onClick={() => handleEditClick(theme)}
          >
            Edit
          </button>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDeleteClick(theme.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Level;
