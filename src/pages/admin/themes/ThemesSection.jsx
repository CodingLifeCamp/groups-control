import styles from "./ThemesSection.module.css";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Modal from "../../../components/modal/Modal";
import Themes from "./Themes";
import BreadCrumps from "../../../components/breadCrumps/BreadCrumps";
import ThemeForm from "./themeForm/ThemeForm";

const ThemesSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal>
          <ThemeForm setShowModal={setShowModal} />
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
        </Modal>
      )}
      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Themes List</h3>
          <div>
            <input type="search" placeholder="search theme" />
            <button onClick={() => setShowModal(true)}>Add Theme</button>
          </div>
        </div>
        <BreadCrumps />
        <div className={styles.container}>
          <Themes />
        </div>
      </section>
    </>
  );
};

export default ThemesSection;
