import React, { useState } from "react";
import Contrato from "../../assets/documents/Contrato.pdf";
import Regras from "../../assets/documents/Regras.pdf";
import styles from "./styles.module.css";

const SubscriptionCard = ({ title, vacancy, link, message, checkbox, disabled }) => {
  const [disable, setDisable] = useState(disabled);

  const onCheckboxClicked = () => setDisable(!disable);

  return (
    <div className={styles.cardSubs}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {!!vacancy && (
          <p>
            <span>{vacancy}</span> vagas
          </p>
        )}
      </div>
      <div className={styles.footer}>
        {checkbox && 
          <div className="row">
            <label className="checkbox">
              <input type="checkbox" onClick={onCheckboxClicked} />
              Eu concordo com as{" "}
              <a href={Regras} target="_blanck">
                regras
              </a>
              {" e o "}
              <a href={Contrato} target="_blanck">
                contrato
              </a>
            </label>
          </div>
        }
        {!!message && <p className={styles.message}>{message}</p>}
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="button"
          disabled={disable}
        >
          Fazer inscrição
        </a>
      </div>
    </div>
  );
};

export default SubscriptionCard;
