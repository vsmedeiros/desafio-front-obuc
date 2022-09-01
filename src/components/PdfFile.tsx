import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import Logoimg from "../assets/Dona-Maria.png";
import Footerimg from "../assets/Dona Maria Cupcake.png";
import { MyFormValues } from "../interfaces/MyFormValues";

const styles = StyleSheet.create({
  content: {
    fontSize: 12,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 15,
    color: "grey",
  },
  title: {
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 10,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
    width: 100,
    alignSelf: "center",
  },
  label: {
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 45,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  document: {
    marginBottom: 20,
    marginTop: 20,
  }
});

const PdfFile = (props:MyFormValues) => (
  <Document >
    <Page wrap={false} style={styles.document}>
      <Image style={styles.image} src={Logoimg} />
      <Text style={styles.title}>ESTAMOS CONTRATANDO</Text>
      <Text style={styles.title}>VAGA: {props.position}</Text>
      <Text wrap={false} style={styles.label}>• Salário:</Text>
      <Text wrap={false} style={styles.content}>R$ {props.salary}</Text>
      <Text wrap={false} style={styles.label}>• Atividades que o cargo exerce:</Text>
      <Text wrap={false} style={styles.content}>{props.responsability}</Text>
      <Text wrap={false} style={styles.label}>• Benefícios do cargo:</Text>
      <Text wrap={false} style={styles.content}>{props.benefit}</Text>
      <Text wrap={false} style={styles.label}>• Etapas do processo:</Text>
      <Text wrap={false} style={styles.content}>{props.step}</Text>
      <Text wrap={false} style={styles.label}>• Habilidades necessárias:</Text>
      <Text wrap={false} style={styles.content}>{props.skill}</Text>
      <Text wrap={false} style={styles.label}>• Experiência necessária:</Text>
      <Text wrap={false} style={styles.content}>{props.experience}</Text>
      <Text wrap={false} style={styles.label}>• Entre em contato pelo email:</Text>
      <Text wrap={false} style={styles.content}>{props.contact}</Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber }) => `${pageNumber}`}
      />
      <Image style={styles.image} src={Footerimg} />
    </Page>
  </Document>
);
export default PdfFile;
