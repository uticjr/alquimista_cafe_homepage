import React from 'react';
import styles from './styles.module.css';

const SubscriptionCard = ({ title, price, vacancy, link, message }) => {
  return (
    <div className={styles.cardSubs}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {
          !!price &&
          <h5>R$ {price}</h5>
        }
        {
          !!vacancy &&
          <p><span>{vacancy}</span> vagas</p>
        }
        {
          !!message &&
          <p>{message}</p>
        }
      </div>
      <div className={styles.footer}>
        <a href={link} target="_blank" className="button">
          Fazer inscrição
        </a>
      </div>
    </div>
  );
};

export default SubscriptionCard;
