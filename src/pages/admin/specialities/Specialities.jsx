import "./Specialities.css";
import { useState } from "react";
import styles from "./Specialities.module.css";
import Table from "./table/Table";
import { FaXmark } from "react-icons/fa6";
import Modal from "../../../components/modal/Modal";
import BreadCrumps from "../../../components/breadCrumps/BreadCrumps";
import SpecialityForm from "./specialityForm/SpecialityForm";

const Specialities = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <Modal>
          <SpecialityForm />
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
        </Modal>
      )}
      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Specialities List</h3>
          <div>
            <input type="search" placeholder="search speciality" />
            <button onClick={() => setShowModal(true)}>Add speciality</button>
          </div>
        </div>
        <BreadCrumps />
        <div className={styles.container}>
          <Table />
        </div>
      </section>
    </>
  );
};

export default Specialities;
