import React from "react";
import styles from "./styles.module.css";

const SubscriptionCard = ({ title, price, vacancy, link, message }) => {
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
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="button"
        >
          Fazer inscrição
        </a>
        {!!message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default SubscriptionCard;
