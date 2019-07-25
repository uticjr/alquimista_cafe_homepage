import React from 'react';
import logo from '../../../assets/logos/inverted_sf.png'

// Falta colocar a data certa do evento

const Hero = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          {/* <h1 className="title">Circuito Alquimista Cafés</h1> */}
          <img src={logo} alt=""/>
          {/* <h3 className="title is-3" style={{ color: 'white', maxWidth: 620, textAlign: 'left'}}>09/09 - 20/10</h3> */}
             
        </div>
      </div>
    </section>
  );
};

export default Hero;
