import React, { useState } from "react";
import styles from "../styles/Form.module.css";
import { Formik, Form, Field } from "formik";
import PdfFile from "./PdfFile";
import { MyFormValues } from "../interfaces/MyFormValues";
import { PDFViewer } from "@react-pdf/renderer";
import { Select, TextField, MenuItem } from "@material-ui/core";
import { schema } from "./YupValidation";
import Modal from "./SaveModal";
import PDFLink from "./PDFLink";
import HomeButtons from "./HomeButtons";
import SaveButton from "./SaveButton";

const save = (data: MyFormValues) => {
  localStorage.setItem("" + data.position, JSON.stringify(data));
};

export default function FormComponent() {
  const initialValues: MyFormValues = {
    position: "",
    salary: "",
    responsability: "",
    benefit: "",
    step: "",
    skill: "",
    experience: "",
    contact: "",
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobInfo, setJobInfo] = useState<MyFormValues>({});
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add(styles.active_modal);
  } else {
    document.body.classList.remove(styles.active_modal);
  }
  return (
    <div className={styles.form}>
      <Formik
        enableReinitialize={true}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={schema}
        initialValues={jobInfo || initialValues}
        onSubmit={(data) => {
          setJobInfo({ ...data });
          setIsSubmitting(true);
        }}
      >
        {({ errors, handleChange }) => (
          <Form
            onChange={(e: any) => {
              handleChange(e);
              setIsSubmitting(false);
            }}
          >
            <div className={styles.form_row}>
              <div className={styles.form_input_select}>
                <label htmlFor="position" className={styles.input_label}>
                  Modelos de vagas:
                </label>
                <Field
                  id="position"
                  name="position"
                  type="select"
                  as={Select}
                  className={styles.form_input}
                  onChange={(e: any) => {
                    const job = localStorage.getItem(e.target.value);
                    setJobInfo({});
                    setJobInfo(JSON.parse(job ? job : ""));
                    handleChange(e);
                    setIsSubmitting(false);
                  }}
                >
                  <MenuItem value="" disabled>
                    Escolha um template
                  </MenuItem>
                  {Object.keys(localStorage).map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
                </Field>
              </div>
            </div>
            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <label htmlFor="position" className={styles.input_label}>
                  Título do cargo:
                </label>
                <Field
                  id="position"
                  name="position"
                  type="text"
                  placeholder=" Ex.: Padeiro."
                  className={styles.form_input}
                  as={TextField}
                />
                {errors.position && (
                  <div className={styles.error_message}>{errors.position}</div>
                )}
              </div>
              <div className={styles.form_group}>
                <label htmlFor="salary" className={styles.input_label}>
                  Salário (R$):
                </label>
                <Field
                  id="salary"
                  name="salary"
                  placeholder="Ex.: 1000"
                  className={styles.form_input}
                  as={TextField}
                />
                {errors.salary && (
                  <div className={styles.error_message}>{errors.salary}</div>
                )}
              </div>
            </div>
            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <label htmlFor="responsability" className={styles.input_label}>
                  Atividades que o cargo exerce:
                </label>
                <Field
                  id="responsability"
                  name="responsability"
                  type="text"
                  placeholder="Ex.: Limpar o equipamento e ferramentas de cozinha antes de usar."
                  className={styles.form_input}
                  as={TextField}
                />
                {errors.responsability && (
                  <div className={styles.error_message}>
                    {errors.responsability}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <label htmlFor="benefit" className={styles.input_label}>
                  Benefícios do cargo:
                </label>
                <Field
                  id="benefit"
                  name="benefit"
                  type="text"
                  placeholder="Ex.: Assistência médica e odontológica, convênio com empresas parceiras."
                  className={styles.form_input}
                  as={TextField}
                />
                {errors.benefit && (
                  <div className={styles.error_message}>{errors.benefit}</div>
                )}
              </div>
            </div>
            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <label htmlFor="step" className={styles.input_label}>
                  Etapas do processo:
                </label>
                <Field
                  id="step"
                  name="step"
                  type="text"
                  placeholder="Ex.: Realização da entrevista de emprego, Verificação dos dados informados, Anúncio do resultado."
                  className={styles.form_input}
                  as={TextField}
                />
                {errors.step && (
                  <div className={styles.error_message}>{errors.step}</div>
                )}
              </div>
            </div>
            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <label htmlFor="skill" className={styles.input_label}>
                  Habilidades necessárias:
                </label>
                <Field
                  id="skill"
                  name="skill"
                  type="text"
                  placeholder="Ex.: Gerenciamento de Tempo, Destreza, Atenção aos Detalhes, Conhecimento de Produtos e Ética de Trabalho."
                  className={styles.form_input}
                  as={TextField}
                />
                {errors.skill && (
                  <div className={styles.error_message}>{errors.skill}</div>
                )}
              </div>
            </div>
            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <label htmlFor="experience" className={styles.input_label}>
                  Experiência necessária:
                </label>
                <Field
                  id="experience"
                  name="experience"
                  type="text"
                  placeholder="Ex.: 2 anos experiência"
                  className={styles.form_input}
                  as={TextField}
                />
                {errors.experience && (
                  <div className={styles.error_message}>
                    {errors.experience}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <label htmlFor="contact" className={styles.input_label}>
                  Entrar em contato pelo email:
                </label>
                <Field
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder="Ex.: donamaria@gmail.com"
                  className={styles.form_input}
                  as={TextField}
                />
                {errors.contact && (
                  <div className={styles.error_message}>{errors.contact}</div>
                )}
              </div>
            </div>
            <div className={styles.btn_wrapper}>
              <HomeButtons />
              {isSubmitting && <PDFLink jobInfo={jobInfo} />}
              {isSubmitting && <SaveButton toggleModal={toggleModal} />}
            </div>
          </Form>
        )}
      </Formik>
      {isSubmitting && window.innerWidth > 790 && (
        <PDFViewer className={styles.pdfviewer}>
          <PdfFile {...jobInfo} />
        </PDFViewer>
      )}
      {modal && (
        <Modal jobInfo={jobInfo} save={save} toggleModal={toggleModal} />
      )}
    </div>
  );
}
