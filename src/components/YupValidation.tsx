
import * as Yup from "yup";
const reqMessage = "Preencha esse campo!";
export const schema = Yup.object().shape({
  position: Yup.string().trim().required(reqMessage),
  salary: Yup.string()
    .trim()
    .matches(/^[0-9]+$/, "Digitar somente números!")
    .required(reqMessage)
    .test(
      "start-zero",
      "Iniciar com número diferente de 0!",
      (val) => !val?.startsWith("0")
    ),
  responsability: Yup.string().trim().required(reqMessage),
  benefit: Yup.string().trim().required(reqMessage),
  step: Yup.string().trim().required(reqMessage),
  skill: Yup.string().trim().required(reqMessage),
  experience: Yup.string().trim().required(reqMessage),
  contact: Yup.string()
    .trim()
    .email("O contato deve estar no formato de email!")
    .required(reqMessage),
});