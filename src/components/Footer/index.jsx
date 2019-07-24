import React from "react";
import Icon from "@mdi/react";
import { mdiInstagram, mdiFacebook, mdiYoutube } from "@mdi/js";
import styles from "./styles.module.css";

const Footer = () => (
  <div className="footer">
    <div className="container">
    <h4 className="title is-5 is-white">Siga as nossas redes sociais</h4>
      <div className={styles.row}>
        <div className={styles.linkContainer}>
          <a 
            href="https://www.instagram.com/circuitoalquimistacafes/?igshid=lvutf8qvsaco"
            target="_blank"
          >
          <Icon path={mdiInstagram} color="white" size={1.2} />
          </a>
          <a 
            href="https://pt-br.facebook.com/alquimistacafes/"
            target="_blank"
          >
          <Icon path={mdiFacebook} color="white" size={1.2} />
          </a>
          <a 
            href="https://www.youtube.com/channel/UCHaNswuhzU4MOVGoG-7z2jg"
            target="_blank"
          >
          <Icon path={mdiYoutube} color="white" size={1.2} />
          </a>
        </div>
      </div>
      <h3 className="title is-5 is-white">Acesse também</h3>
      <div className={styles.row}>
        <div className={styles.linkContainer}>
          <a 
            href="https://www.instagram.com/alquimistacafes/?igshid=1wxw2xboft541"
            target="_blank"
          >
            <Icon path={mdiInstagram} color="white" size={1.2} />
          </a>
        </div>
      </div>
      <div></div>
      <p className="title is-6 is-white">
        Utic 2019 - Todos os direitor reservados
      </p>
    </div>
  </div>
);

export default Footer;
