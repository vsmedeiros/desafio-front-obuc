import styles from "../styles/HomeButtons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function HomeButtons(props: any) {
  return (
    <>
      <button className={styles.btn + " " + styles.btn_validate} type="submit">
        Validar <FontAwesomeIcon icon={faCheck}
        />
      </button>

      <button
        type="reset"
        onClick={() => window.location.reload()}
        className={styles.btn + " " + styles.btn_clean}
      >
        Limpar <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  );
}
