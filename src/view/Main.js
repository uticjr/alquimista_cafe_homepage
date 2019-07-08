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
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'flex-end',
								width: '40%',
								padding: 22,
								border: '1px solid #d8d8d8',
								height: 240,
							}}
						>
							<div style={{ display: 'flex', flex: 1, marginBottom: 22 }}>
								<h3>Descrição</h3>
							</div>
							<div>
								<a href="#" className="button">
									Venda
								</a>
							</div>
						</div>
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
					<h3 className="title" style={{ textAlign: 'center' }}>
						Evento
					</h3>
					<SliderItem />
				</div>
			</section>
			<Footer />
		</React.Fragment>
	);
};

export default Main;
