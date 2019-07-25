import React from "react";
import Card from "../../../components/Card/Card";
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <section id="courses" className="section theme-white">
      <div className="container">
        <h2 className="title">Cursos</h2>
        <div className="row">
          {CourseList.map((schedule, index) => (
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

export default Courses;
