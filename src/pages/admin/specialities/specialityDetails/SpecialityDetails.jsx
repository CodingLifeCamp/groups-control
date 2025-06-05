import styles from "./SpecialityDetails.module.css";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Modal from "../../../../components/modal/Modal";
import Levels from "../../levels/Levels";
import BreadCrumps from "../../../../components/breadCrumps/BreadCrumps";
import LevelForm from "../../levels/levelForm/LevelForm";

const SpecialityDetails = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal>
          <LevelForm setShowModal={setShowModal} />
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
        </Modal>
      )}
      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Levels List</h3>
          <div>
            <input type="search" placeholder="search level" />
            <button onClick={() => setShowModal(true)}>Add Level</button>
          </div>
        </div>
        <BreadCrumps />
        <div className={styles.container}>
          <Levels />
        </div>
      </section>
    </>
  );
};

export default SpecialityDetails;
