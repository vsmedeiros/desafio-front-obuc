import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import styles from "../styles/SaveModal.module.css";
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
            type="button"
            className={styles.btn_modal}
            onClick={() => {
              props.save(props.jobInfo);
              Swal.fire({
                title:"Modelo salvo!",
                text:"Modelo salvo com chave "+props.jobInfo.position+".",
                icon: "success",
              })
              props.toggleModal();
            }}
          >
            SIM <FontAwesomeIcon icon={faCheck} />
          </button>
          <button
             type="button"
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
