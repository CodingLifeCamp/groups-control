import { useState, useEffect } from "react";
import styles from "./Teachers.module.css";
import Table from "./table/Table";
import { FaXmark } from "react-icons/fa6";
import Modal from "../../../components/modal/Modal";
import FormTeacher from "./formTeacher/FormTeacher";
import BreadCrumps from "../../../components/breadCrumps/BreadCrumps";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../../redux/slices/teachers/teachersSlice";

const Teachers = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { teachers } = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <>
      {showModal && (
        <Modal>
          <FormTeacher setShowModal={setShowModal} />
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
        </Modal>
      )}
      <section className={styles.teachers}>
        <div className={styles.header}>
          <h3>Teachers List</h3>
          <div>
            <input type="search" placeholder="search teacher" />
            <button onClick={() => setShowModal(true)}>Add Teacher</button>
          </div>
        </div>
        <BreadCrumps />
        <div className={styles.container}>
          <Table teachers={teachers} />
        </div>
      </section>
    </>
  );
};

export default Teachers;
