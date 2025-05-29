import { useState } from "react";
import styles from "./Table.module.css";
import Modal from "../../../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";
import GroupInfo from "../group/GroupInfo";

const Group = ({ i }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal>
          <GroupInfo />
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
          <span>ALG-077</span>
        </td>
        <td>
          <span>Frontend</span>
        </td>
        <td>
          <span>J-14:00-16:00</span>
        </td>
        <td>
          <span>Hayotbek Turg'unov</span>
        </td>
        <td>
          <span>8</span>
        </td>
        <td>
          <span>React</span>
        </td>
        <td>
          <span>7.05.2025</span>
        </td>
        <td>
          <span>7.08.2025</span>
        </td>
        <td className={styles.actions}>
          <button className={styles.editBtn} onClick={() => setShowModal(true)}>
            Info
          </button>
          <button className={styles.editBtn}>Edit</button>
          <button className={styles.deleteBtn}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default Group;
