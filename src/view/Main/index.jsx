import React, { useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SliderItem from '../../components/Slider';
import Hero from './Hero';
import Event from './Event';
import Schedule from './Schedule';
import Courses from './Courses';
import Benefits from './Benefits';

const Main = () => {
	const sliderRef = useRef(null);

	const goToSlide = pageNumber => {
		if (sliderRef) sliderRef.current.slickGoTo(pageNumber);
	};

	return (
		<React.Fragment>
			<Navbar />
			<Hero />
			{/* <Event />
			<Benefits /> */}
			<Schedule />
			<Courses />
			{/* <section className="section">
				<div className="container">
					<SliderItem sliderRef={sliderRef} data={data} />
				</div>
			</section> */}
			<Footer />
		</React.Fragment>
	);
};

export default Main;
