import React from 'react';
import styles from './styles.module.css';

const Card = ({ title, description }) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<figure className="image is-128x128">
					<img src="https://bulma.io/images/placeholders/256x256.png" alt="" className="is-rounded" />
				</figure>
			</div>
			<div className={styles.content}>
				<h3>Título</h3>
				<p>Descrição</p>
			</div>
			<div className={styles.footer}>
				<a href="#" className="button">
					Saiba mais
				</a>
			</div>
		</div>
	);
};

export default Card;
