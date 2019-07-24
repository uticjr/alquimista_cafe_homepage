import React from "react";
import Icon from "@mdi/react";
import { mdiGooglePlus, mdiLinkedin, mdiTwitter } from "@mdi/js";
import styles from "./styles.module.css";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className={styles.row}>
        {/* <div className={styles.column}>
          <h3>Siga a gente</h3>
          <div className={styles.linkContainer}>
            <Icon path={mdiGooglePlus} size={1} />
            <Icon path={mdiLinkedin} size={1} />
            <Icon path={mdiTwitter} size={1} />
          </div>
          <h3 style={{ marginTop: 11 }}>Entre em contato</h3>
          <p>(91) 99999-9999</p>
          <p>(91) 98888-8888</p>
          <a href="#">Email</a>
          <a href="#">Contato</a>
        </div>
        <div className={styles.column}>
          <h3>Localização</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.560326802595!2d-48.48062508524596!3d-1.438837298950652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48ea7879bca93%3A0xd1eb9c08b4629a11!2sUnama+-+Universidade+da+Amaz%C3%B4nia+-+Campus+Alcindo+Cacela!5e0!3m2!1spt-BR!2sbr!4v1563762227908!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
		</div> */}
      </div>
	  <p className="title is-6" style={{ textAlign: 'center' }}>Utic 2019 - Todos os direitor reservados</p>
    </div>
  </div>
);

export default Footer;
