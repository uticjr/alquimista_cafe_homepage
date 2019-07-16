import React from "react";
import styles from './styles.module.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Circuito Café</h1>
          <div className={styles.card}>
            <div className={styles.content}>
              <h3>Descrição</h3>
            </div>
            <div>
              <a href="#" className="button">
                Venda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
