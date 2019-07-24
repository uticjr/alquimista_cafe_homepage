import React from "react";
import SubscriptionCard from "../../../components/Card/SubscriptionCard";
import { schedules, koar, barista } from "./SubscriptionList";

const Subscription = () => {
  return (
    <section className="section theme-white">
      <div className="container">
        <h2 className="title">Garanta já sua inscrição</h2>
        <div className="row">
          {schedules.map((schedule, index) => (
            <SubscriptionCard
              key={index}
              title={schedule.title}
              price={schedule.price}
              vacancy={schedule.vacancy}
              link={schedule.link}
            />
          ))}
        </div>
        <hr />
        <h3 className="title is-3">Cursos</h3>
        <div className="row">
          <SubscriptionCard
            title={koar.title}
            price={koar.price}
            vacancy={koar.vacancy}
            link={koar.link}
          />
        </div>
        <h5 className="title is-4" style={{ marginTop: 11 }}>
          Curso de Barista
        </h5>
        <div className="row wrap">
          {barista.map((day, index) => (
            <SubscriptionCard
              key={index}
              title={day.title}
              price={day.price}
              vacancy={day.vacancy}
              link={day.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
