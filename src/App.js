import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

const App = () => {
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
          <Card />
        </div>
      </section>
      <section className="section">
        <div className="container" />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default App;
