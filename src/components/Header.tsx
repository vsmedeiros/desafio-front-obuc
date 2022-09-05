import React from "react"
import Logo from "../assets/Dona-Maria.png"
import styles from "../styles/Header.module.css"
export default function Header() {
    return (
        <div className={styles.header}>
            <img src={Logo} className={styles.header_logo} alt="donamarialogo"/>
            <h1 className={styles.header_title}>Formulário vaga confeitaria Dona Maria</h1>
            <h2 className={styles.header_subtitle}>Preencha o formulário e valide para gerar o PDF.</h2>
        </div>
    )
}