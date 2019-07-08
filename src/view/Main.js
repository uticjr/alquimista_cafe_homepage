import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import SliderItem from '../components/Slider';
import styles from './styles.module.css';

const Main = () => {
	return (
		<React.Fragment>
			<Navbar />
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Circuito Café</h1>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className={styles.row}>
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<SliderItem />
				</div>
			</section>
			<Footer />
		</React.Fragment>
	);
};

export default Main;
