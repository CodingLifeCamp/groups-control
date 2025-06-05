import { useEffect } from "react";
import Level from "./Level";
import { useParams } from "react-router-dom";
import styles from "./Levels.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLevels } from "../../../redux/slices/levels/levelsSlice";

const Levels = () => {
  const dispatch = useDispatch();
  const { levels } = useSelector((state) => state.levels);
  const path = useParams();
  const { specialities } = useSelector((state) => state.specialities);
  const specialityID = specialities.find(
    (d) => d.name.toLowerCase() === path.name.toLocaleLowerCase()
  )?.id;

  useEffect(() => {
    dispatch(fetchLevels(specialityID));
  }, [dispatch]);

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <td>
            <span>№</span>
          </td>
          <td>
            <span>Level</span>
          </td>
          <td>
            <span>Lessons</span>
          </td>
          <td className={styles.actions}>
            <span>Actions</span>
          </td>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {levels &&
          levels.map((level, i) => <Level i={i} key={i} level={level} />)}
      </tbody>
    </table>
  );
};

export default Levels;
