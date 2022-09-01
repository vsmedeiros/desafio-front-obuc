import React, { useState } from "react";
import styles from "../styles/Form.module.css";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import PdfFile from "./PdfFile";
import { MyFormValues } from "../interfaces/MyFormValues";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const reqMessage = "Preencha esse campo";
const schema = Yup.object().shape({
  position: Yup.string().required(reqMessage),
  salary: Yup.string()
    .matches(/^[0-9]+$/, "Digitar somente números!")
    .required(reqMessage).test('start-zero', 'Iniciar com número diferente de 0!', val => !val?.startsWith("0")),
  responsability: Yup.string().required(reqMessage),
  benefit: Yup.string().required(reqMessage),
  step: Yup.string().required(reqMessage),
  skill: Yup.string().required(reqMessage),
  experience: Yup.string().required(reqMessage),
  contact: Yup.string()
    .email("O contato deve estar no formato de email!")
    .required(reqMessage),
});

export default function FormComponent() {
  const initialValues: MyFormValues = {
    position: "Padeiro",
    salary: "100",
    responsability: "Fazer pão, lavar maquinário.",
    benefit: "Plano de saúde",
    step: "Entrevista, contratação",
    skill: "Conhecer ingredientes",
    experience: "2 anos experiências",
    contact: "vitorsimedeiros@gmail.com",
  };
  const [jobinfo, setJobinfo] = useState<MyFormValues>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className={styles.form}>
      <Formik
        
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={(data) => {
          setJobinfo({ ...data });
          console.log(JSON.stringify(data));
          setIsSubmitting(true);
        }}
      >
        {({ errors, handleChange, handleBlur, isValid }) => (
          
          <Form
          onChange={(e: any) => {
            handleChange(e);
            setIsSubmitting(false);
          }}
          >
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
                />
                {errors.contact && (
                  <div className={styles.error_message}>{errors.contact}</div>
                )}
              </div>
            </div>
            <div className={styles.btn_wrapper}>
              <button className={styles.btn+' '+styles.btn_validate} type="submit">
              </button>
              <button type="reset" className={styles.btn}>Limpar</button>
            </div>
          </Form>
        )}
      </Formik>
      {isSubmitting? (
        <PDFDownloadLink
          document={<PdfFile {...jobinfo} />}
          fileName={"Vaga.pdf"}
        >
          {({ loading }) =>
            loading ? (
              <button className={styles.btn}>Carregando documento...</button>
            ) : (
              <button className={styles.btn}>Baixar</button>
            )
          }
        </PDFDownloadLink>
      ) : (
        <></>
      )}
      {isSubmitting ? (<PDFViewer className={styles.pdfviewer}>
        <PdfFile {...jobinfo} />
      </PDFViewer>) : (<></>)}
    </div>
  );
}
