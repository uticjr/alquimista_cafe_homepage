import React from "react";
import Card from "../../../components/Card/Card";
import ScheduleList from "./ScheduleList";

const Schedule = () => {
  return (
    <section id="schedule" className="section theme-white">
      <div className="container">
        <h2 className="title">Programas</h2>
        <div className="row wrap">
         {ScheduleList.map((schedule, index) => (
           <Card
           key={index}
           title={schedule.title}
           day={schedule.day}
           description={schedule.description}
           place={schedule.place}
           time={schedule.time}
          />
         ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
