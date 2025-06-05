import { useEffect } from "react";
import Theme from "./Theme";
import styles from "./Themes.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchThemes } from "../../../redux/slices/themes/themesSlice";

const Themes = () => {
  const dispatch = useDispatch();
  const { themes } = useSelector((state) => state.themes);
  const path = useParams();
  const { levels } = useSelector((state) => state.levels);
  const levelID = levels.find(
    (d) => d.name.toLowerCase() === path.id.toLocaleLowerCase()
  )?.id;

  useEffect(() => {
    dispatch(fetchThemes(levelID));
  }, [dispatch]);

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <td>
            <span>№</span>
          </td>
          <td>
            <span>Themes</span>
          </td>
          <td className={styles.actions}>
            <span>Actions</span>
          </td>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {themes &&
          themes.map((theme, i) => <Theme i={i} key={i} theme={theme} />)}
      </tbody>
    </table>
  );
};

export default Themes;
