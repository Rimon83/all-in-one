import React, { useEffect } from 'react'
import "./BMI.css"
import Form from '../../components/(form)/Form';
import interactive from "./main"

// inputs array
const inputs = [
 {
  name: "weight",
  type: "text",
  title: "Weight in Kg"
 },
 {
  name: "height",
  type: "text",
  title: "Height in m"
 }
]

const BMI = () => {
 useEffect(() => {
    const cleanup = interactive();

    // Cleanup the event listeners
    return () => {
      cleanup();
    };

 }, [])
  return (
    <section className="section_container">
      <h1>BMI Calculation</h1>
      <div className="text_container">
        <h3>
          To begin, Enter your weight and height and see if you are overweight
          or not.
        </h3>
      </div>
      <Form inputs={inputs} buttonTitle="Calculate"/>
      <div className="displayMessage"></div>
    </section>
  );
}

export default BMI