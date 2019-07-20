import React, { useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import SliderItem from '../../components/Slider';
import Hero from './Hero';
import styles from './styles.module.css';

const data = [
	{
		title: "Workshop",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing",
		src: ""
	},
	{
		title: "Campeonato",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing",
		src: ""
	},
	{
		title: "Circuito Alquimista",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing",
		src: ""
	}
];

const Main = () => {
	const sliderRef = useRef(null);

	const goToSlide = pageNumber => {
		if (sliderRef) sliderRef.current.slickGoTo(pageNumber);
	};

	return (
		<React.Fragment>
			<Navbar />
			<Hero />
			<section className="section">
				<div className="container">
					<div className={styles.row}>
						{/* {[...Array(3)].map((_, index) => (
							<Card key={index} sliderReference={index} onUpdateSlide={goToSlide} />
						))} */}
						{data.map(((item, index) => (
							<Card 
								key={index}  
								title={item.title} 
								description={item.description}
                src={item.src}
                sliderReference={index}
								onUpdateSlide={goToSlide}
							/>
						)))}
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					{/* <h3 className="title" style={{ textAlign: 'center' }}>
						Evento
					</h3> */}
					<SliderItem sliderRef={sliderRef} data={data} />
				</div>
			</section>
			<Footer />
		</React.Fragment>
	);
};

export default Main;
