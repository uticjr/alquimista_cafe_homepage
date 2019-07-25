import React from "react";
import styles from "./styles.module.css";

const Card = ({
  title,
  day,
  description,
  place,
  time,
  src
}) => {
  return (
    <div className={styles.card}>
      {/* <div className={styles.image}>
        <figure className="image is-256x256">
          <img src={src} alt="" className="is-rounded" />
        </figure>
      </div> */}
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h5>{day}</h5>
        <p>{description}</p>
        <h5 style={!place ? { display: 'none' } : {}}>Local</h5>
        <p style={!place ? { display: 'none' } : {}}>{place}</p>
        <h5 style={!time ? { display: 'none' } : {}}>Hora</h5>
        <p style={!time ? { display: 'none' } : {}}>{time}</p>
      </div>
    </div>
  );
};

export default Card;
