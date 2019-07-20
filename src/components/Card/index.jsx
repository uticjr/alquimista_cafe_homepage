import React from 'react';
import styles from './styles.module.css';

const Card = ({ title, description, src, sliderReference, onUpdateSlide }) => {
	const onUpdate = () => {
		onUpdateSlide(sliderReference);
	};

	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<figure className="image is-256x256">
					<img src={src} alt="" className="is-rounded" />
				</figure>
			</div>
			<div className={styles.content}>
				<h2 style={{ fontWeight: 'bold' }}>{title}</h2>
				<p>{description}</p>
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
