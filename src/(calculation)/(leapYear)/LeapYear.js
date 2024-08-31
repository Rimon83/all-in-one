import React, { useEffect } from 'react'
import "./LeapYear.css"
import data from "./years.json"
import Form from '../../components/(form)/Form'
import interactive from "./main"

const options = data.years

// inputs array
const inputs = [{
 name: "year",
 type: "select",
 title: "Year",
 options: options,
}]

const LeapYear = () => {
useEffect(() => {
  const cleanup = interactive();

  // Cleanup the event listeners
  return () => {
    cleanup();
  };
}, []);
  return (
    <section className="section_container">
      <h1>Leap Year</h1>
      <div className="text_container">
        <h3>
          Start by entering the year to determine whether it is a leap year
          (having an additional day).
        </h3>
      </div>
      <Form inputs={inputs} buttonTitle="Check" />
      <div className="displayMessage"></div>
    </section>
  );
}

export default LeapYear