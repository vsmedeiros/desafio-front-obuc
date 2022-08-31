import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import Logo from "../assets/Dona-Maria.png";
import { MyFormValues } from "../interfaces/MyFormValues";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
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
});

const PdfFile = (props:MyFormValues) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.title}>{props.position}</Text>
      <Text style={styles.header}>{props.salary}</Text>
      <Text style={styles.header}>{props.responsability}</Text>
      <Text style={styles.header}>{props.step}</Text>
      <Text style={styles.header}>{props.skill}</Text>
      <Text style={styles.header}>{props.experience}</Text>
      <Text style={styles.header}>{props.contact}</Text>
      <Image style={styles.image} src={Logo} />
      <Text
        style={styles.pageNumber}
        render={({ pageNumber }) => `${pageNumber}`}
      />
    </Page>
    <Text style={styles.header}></Text>
  </Document>
);
export default PdfFile;
