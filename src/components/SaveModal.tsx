import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import styles from "../styles/Modal.module.css";
export default function SaveModal(props: any) {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay}>
        <div className={styles.modal_content}>
          <h2>
            Deseja salvar esse modelo com a chave {" "}
            <b style={{ fontWeight: "bold" }}>{props.jobInfo.position}</b>?
          </h2>
          <button
            className={styles.btn_modal}
            onClick={() => {
              props.save(props.jobInfo);
              swal(
                "Modelo salvo!",
                "Modelo salvo com chave " + props.jobInfo.position + "!",
                "success"
              );
              props.toggleModal();
            }}
          >
            SIM <FontAwesomeIcon icon={faCheck} />
          </button>
          <button
            className={styles.btn_modal_no}
            onClick={() => {
              props.toggleModal();
            }}
          >
            NÃO <FontAwesomeIcon icon={faX} />
          </button>
        </div>
      </div>
    </div>
  );
}
