import React from 'react';
import styles from './styles.module.css';

const SubscriptionCard = ({ title, price, vacancy, link }) => {
  return (
    <div className={styles.cardSubs}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h5>R$ {price}</h5>
        {
          !!vacancy &&
          <p><span>{vacancy}</span> vagas</p>
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
