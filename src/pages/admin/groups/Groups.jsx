import { useState } from "react";
import styles from "./Groups.module.css";
import Table from "./table/Table";
import FormGroup from "./formGroup/FormGroup";
import Modal from "../../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";
import BreadCrumps from "../../../components/breadCrumps/BreadCrumps";

const Groups = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <Modal>
          <FormGroup />
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
        </Modal>
      )}
      <section className={styles.groups}>
        <div className={styles.header}>
          <h3>Groups List</h3>
          <div>
            <input type="search" placeholder="search group" />
            <button onClick={() => setShowModal(true)}>Add Group</button>
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

export default Groups;
