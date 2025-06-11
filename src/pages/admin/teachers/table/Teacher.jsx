import { useState } from "react";
import styles from "./Table.module.css";
import { useDispatch } from "react-redux";
import { deleteTeacher } from "../../../../redux/slices/teachers/teachersSlice";
import { FaXmark } from "react-icons/fa6";
import Modal from "../../../../components/modal/Modal";
import FormTeacher from "../formTeacher/FormTeacher";

const Teacher = ({ i, teacher }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  const handleDeleteClick = (id) => {
    dispatch(deleteTeacher(id));
  };

  const handleEditClick = (data) => {
    const { fullName, phone, speciality, id } = data;

    let firstname = fullName.split(" ")[1];
    let lastname = fullName.split(" ")[0];
    setSelected({
      firstname,
      lastname,
      phone: phone.slice(1),
      speciality,
      id,
    });
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <Modal>
          <FormTeacher
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
          <span>{teacher.fullName}</span>
        </td>
        <td>
          <span>{teacher.phone}</span>
        </td>
        <td>
          <span>{teacher.speciality?.name}</span>
        </td>
        <td>
          <span>{teacher.totalGroups}</span>
        </td>
        <td>
          <span>{teacher.totalStudents}</span>
        </td>
        <td className={styles.actions}>
          <button
            className={styles.editBtn}
            onClick={() => handleEditClick(teacher)}
          >
            Edit
          </button>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDeleteClick(teacher.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Teacher;
