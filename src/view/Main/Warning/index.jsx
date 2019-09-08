import React from "react";
import styles from "./styles.module.css";

const Warning = () => {
  return (
    <section className="section theme-white">
      <div className="container">
        <div className="row">
          <div className={styles.card}>
            <h5 className={styles.title}>Aviso</h5>
            <div className={styles.content}>
              <p>O workshop e o curso de Koar serão dia 10/09</p>
              <span>Local:</span>
              <p>Antes seria na Unama Alcindo Cacela, Bloco F, Laboratório de
              Práticas Gastronômicas.</p>
              <p>Passa a ser na Delalê. Tv. Alferes Costa, 2690.</p>
              <span>Hora:</span> 
              <p>15h às 18</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Warning;
