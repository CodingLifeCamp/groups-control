import "./Specialities.css";
import { useState, useEffect } from "react";
import styles from "./Specialities.module.css";
import Table from "./table/Table";
import { FaXmark } from "react-icons/fa6";
import Modal from "../../../components/modal/Modal";
import BreadCrumps from "../../../components/breadCrumps/BreadCrumps";
import SpecialityForm from "./specialityForm/SpecialityForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecialities } from "../../../redux/slices/specialities/specialitiesSlice";

const Specialities = () => {
  const [showModal, setShowModal] = useState(false);
  const [showData, setShowData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { specialities, status, error } = useSelector(
    (state) => state.specialities
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpecialities());
  }, [dispatch]);

  useEffect(() => {
    setShowData(() =>
      specialities.toSorted((a, b) => a.name.localeCompare(b.name))
    );
  }, [specialities]);

  useEffect(() => {
    const filteredData = specialities.filter((d) =>
      d.name?.toLowerCase().includes(searchText.toLowerCase())
    );

    setShowData(() =>
      filteredData.toSorted((a, b) => a.name.localeCompare(b.name))
    );
  }, [searchText]);

  return (
    <>
      {showModal && (
        <Modal>
          <SpecialityForm setShowModal={setShowModal} />
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
        </Modal>
      )}
      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Specialities List</h3>
          <div>
            <input
              type="search"
              value={searchText}
              placeholder="search speciality"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={() => setShowModal(true)}>Add speciality</button>
          </div>
        </div>
        <BreadCrumps />
        <div className={styles.container}>
          <Table specialities={showData} />
        </div>
      </section>
    </>
  );
};

export default Specialities;
