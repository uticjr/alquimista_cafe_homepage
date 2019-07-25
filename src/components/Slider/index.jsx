import React from "react";
import Slider from "react-slick";
// import styles from './styles.module.css';
import "./styles.css";

const SliderItems = ({ sliderRef, data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider",
    dotsClass: "slick-dots dots",
    // autoplay: true,
    // autoplaySpeed: 8000,
    // pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        <div className="slick-container">
		  <div className="title-container">
		  <h3 className="title">{data[0].title}</h3>
		  </div>
          <div className="content-container">
            <div className="image-container">
              <figure className="image">
                <img src={data[0].src} alt="" />
              </figure>
            </div>
            <div className="description-container">
              <p>{data[0].description}</p>
            </div>
          </div>
        </div>
        <div className="slick-container">
          <div className="title-container">
		  <h3 className="title">{data[1].title}</h3>
		  </div>
          <div className="content-container">
            <div className="image-container">
              <figure className="image">
                <img src={data[1].src} alt="" />
              </figure>
            </div>
            <div className="description-container">
              <p>{data[1].description}</p>
            </div>
          </div>
        </div>
        <div className="slick-container">
          <div className="title-container">
		  <h3 className="title">{data[2].title}</h3>
		  </div>
          <div className="content-container">
            <div className="image-container">
              <figure className="image">
                <img src={data[2].src} alt="" />
              </figure>
            </div>
            <div className="description-container">
              <p>{data[2].description}</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderItems;
