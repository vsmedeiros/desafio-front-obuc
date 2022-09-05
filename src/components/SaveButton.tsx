import styles from "../styles/SaveButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

export default function HomeButtons(props: any) {
  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          props.toggleModal();
        }}
      >
        Salvar <FontAwesomeIcon icon={faFloppyDisk} />
      </button>
    </>
  );
}
