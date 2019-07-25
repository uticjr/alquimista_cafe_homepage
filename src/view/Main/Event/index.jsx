import React from "react";
import styles from "./styles.module.css";

const Event = () => {
  return (
    <section id="event" className="section">
      <div className="container">
        <div className={styles.container}>
          <p className="title">
            O Circuito Alquimista Cafés vai apresentar ao público as melhores
            técnicas de preparação de um café especial, bem como um resgate
            cultural da cadeia produtiva do café na Amazônia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Event;
