import React from "react";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import Event from "./Event";
import Schedule from "./Schedule";
import Courses from "./Courses";
import Subscription from "./Subscription";
import Warning from "./Warning";

const Main = () => {
  // const sliderRef = useRef(null);

  // const goToSlide = pageNumber => {
  // 	if (sliderRef) sliderRef.current.slickGoTo(pageNumber);
  // };

  return (
    <React.Fragment>
      <Hero />
      <Event />
      {/* <Benefits /> */}
      <Schedule />
      <Courses />
      <Warning />
      {/* <section className="section">
				<div className="container">
					<SliderItem sliderRef={sliderRef} data={data} />
				</div>
			</section> */}
      <Subscription />
      <Footer />
    </React.Fragment>
  );
};

export default Main;
