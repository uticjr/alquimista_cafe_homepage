import React from 'react';
import Slider from 'react-slick';
// import styles from './styles.module.css';
import './styles.css';

const SliderItems = ({ sliderRef }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: 'slider',
		dotsClass: 'slick-dots dots',
		speed: 600,
		// autoplay: true,
		// autoplaySpeed: 8000,
		// pauseOnHover: true,
	};
	return (
		<Slider {...settings} ref={sliderRef}>
			<div className="content-container">
				<div className="image-container">
					<figure className="image">
						<img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
					</figure>
				</div>
				<div className="description-container">
					<p>Descrição</p>
				</div>
			</div>
			<div className="content-container">
				<div className="image-container">
					<figure className="image">
						<img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
					</figure>
				</div>
				<div className="description-container">
					<p>Descrição</p>
				</div>
			</div>
			<div className="content-container">
				<div className="image-container">
					<figure className="image">
						<img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
					</figure>
				</div>
				<div className="description-container">
					<p>Descrição</p>
				</div>
			</div>
		</Slider>
	);
};

export default SliderItems;
