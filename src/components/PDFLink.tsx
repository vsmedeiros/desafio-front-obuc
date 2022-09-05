import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import PdfFile from "./PdfFile";
import styles from "../styles/PDFLink.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default function PDFLink(props: any) {
  return (
      <PDFDownloadLink
        document={<PdfFile {...props.jobInfo} />}
        fileName={"Vaga "+props.jobInfo.position+".pdf"}
      >
        {({ loading }) =>
          loading ? (
            <div className={styles.btn + " " + styles.btn_download}>
              Carregando...
            </div>
          ) : (
            <div className={styles.btn + " " + styles.btn_download}>
              Baixar <FontAwesomeIcon icon={faFilePdf} />
            </div>
          )
        }
      </PDFDownloadLink>
  );
}
