import React from 'react';
import styles from './styles.module.css';

const Card = ({ title, description, sliderReference, onUpdateSlide }) => {
	const onUpdate = e => {
		onUpdateSlide(sliderReference);
	};

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
				<button className="button" onClick={onUpdate}>
					Saiba mais
				</button>
			</div>
		</div>
	);
};

export default Card;
